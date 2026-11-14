// Appended to hx-real-check.mjs (without its main) by .github/workflows/mac-driver-grant.yml, so that
// it uses the same driver code as the check: in Privacy & Security, find the switch of one row by
// the app name in that row, press it through the Computer Use driver, check that only that switch
// changed and that System Settings asks for a password, then press Cancel and check it went back.
// Usage: node lib.mjs <out folder> <driver> <pane, such as Privacy_ScreenCapture> <row name>
import { spawnSync as hxpSpawnSync } from "node:child_process";
import { mkdirSync as hxpMkdir, writeFileSync as hxpWrite } from "node:fs";
import { join as hxpJoin } from "node:path";

/** The switch of each named row: the smallest group above the name that holds exactly one switch. */
function hxpRows(elements) {
  const rows = [];
  for (const [i, element] of elements.entries()) {
    if (hxRoleKind(element.role) !== "text" || !element.label) continue;
    let check = null;
    let depth = element.depth;
    for (let j = i - 1; j >= 0; j -= 1) {
      const above = elements[j];
      if (above.depth >= depth) continue;
      depth = above.depth;
      const inside = [];
      for (let k = j + 1; k < elements.length && elements[k].depth > above.depth; k += 1) inside.push(elements[k]);
      const checks = inside.filter((candidate) => hxRoleKind(candidate.role) === "check");
      if (checks.length === 1) {
        check = checks[0];
        break;
      }
      if (checks.length > 1) break;
    }
    rows.push({ name: element.label, text: element, check });
  }
  return rows;
}

function hxpState(rows) {
  return Object.fromEntries(rows.filter((row) => row.check).map((row) => [row.name, row.check.value]));
}

async function hxpMain() {
  const [out, driverPath, pane, rowName] = process.argv.slice(2);
  hxpMkdir(out, { recursive: true });
  const result = { pane, row: rowName };
  const save = () => hxpWrite(hxpJoin(out, "result.json"), JSON.stringify(result, null, 2));
  hxpSpawnSync("open", [`x-apple.systempreferences:com.apple.preference.security?${pane}`]);
  await wait(5000);
  const driver = await startDriver(driverPath, "darwin");
  result.driver_ready = driver.ready;
  try {
    if (!driver.ready) return;
    const call = (name, args, ms = 15000) => driver.socket.call(name, args, ms);
    const listed = await call("list_windows", { on_screen_only: true }, 5000);
    const win = hxChooseWindow(listed.content, { app: "System Settings" });
    result.window = win ? { app: win.app, title: win.title } : null;
    result.pid = win?.pid ?? null;
    if (!win) return;
    const target = { kind: "window", pid: win.pid, window_id: win.windowId };
    const read = async () => {
      const answer = await call("get_window_state", {
        pid: win.pid,
        window_id: win.windowId,
        include_screenshot: false,
        max_elements: 1500,
        timeout_ms: 3000,
      });
      return answer.ok ? hxReadWindow(answer.content) : null;
    };
    const before = await read();
    if (!before) {
      result.error = "no window state";
      return;
    }
    hxpWrite(hxpJoin(out, "outline-before.txt"), hxOutline(before, 30000));
    const rowsBefore = hxpRows(before.elements);
    result.rows_before = hxpState(rowsBefore);
    const row = rowsBefore.find((candidate) => hxPlainName(candidate.name) === hxPlainName(rowName));
    result.row_found = Boolean(row);
    result.switch_found = Boolean(row?.check);
    if (!row?.check) return;
    result.switch = { index: row.check.index, role: row.check.role, value: row.check.value, token: Boolean(row.check.token) };
    for (const mode of ["background", "foreground"]) {
      const answer = await call("click", { target, element_token: row.check.token, delivery_mode: mode });
      const effect = actionEffect(answer);
      result[`click_${mode}`] = { ok: answer.ok, worked: effect.worked, reason: effect.reason ?? "" };
      if (effect.worked) break;
    }
    await wait(2500);
    const after = await read();
    if (after) {
      hxpWrite(hxpJoin(out, "outline-after.txt"), hxOutline(after, 30000));
      const state = hxpState(hxpRows(after.elements));
      result.rows_after = state;
      result.changed = Object.keys(result.rows_before).filter((name) => state[name] !== result.rows_before[name]);
      result.only_that_row_changed = result.changed.length === 1 && hxPlainName(result.changed[0]) === hxPlainName(rowName);
      result.sheet_texts = after.elements
        .filter((element) => /password|modify settings|cancel|trying to modify/iu.test(`${element.label} ${element.value}`))
        .map((element) => `${hxRoleKind(element.role)}: ${element.label || element.value}`)
        .slice(0, 12);
      const cancel = after.elements.find((element) => hxRoleKind(element.role) === "button" && /^cancel$/iu.test(element.label));
      result.cancel_found = Boolean(cancel);
      if (cancel) {
        const answer = await call("click", { target, element_token: cancel.token, delivery_mode: "background" });
        result.cancel_click = actionEffect(answer).worked;
        await wait(2500);
        const back = await read();
        if (back) {
          const state2 = hxpState(hxpRows(back.elements));
          result.rows_after_cancel = state2;
          result.back_as_before = Object.keys(result.rows_before).every((name) => state2[name] === result.rows_before[name]);
        }
      }
    }
    const windows = await call("list_windows", { on_screen_only: true }, 5000);
    result.windows_after = JSON.stringify(windows.content ?? windows.error ?? "").match(/"(?:title|window_title)":"[^"]*"/gu)?.slice(0, 20) ?? [];
  } catch (error) {
    result.error = error instanceof Error ? error.message : String(error);
  } finally {
    save();
    driver.child.kill();
  }
}

hxpMain().then(
  () => process.exit(0),
  (error) => {
    process.stderr.write(`${error instanceof Error ? (error.stack ?? error.message) : String(error)}\n`);
    process.exit(2);
  },
);
