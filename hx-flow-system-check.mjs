// scripts/hx-flow-system-check.ts
import { execFile as execFile3, spawn as spawn2 } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { freemem, totalmem as totalmem2 } from "node:os";
import { join } from "node:path";
import { performance } from "node:perf_hooks";
import { parseArgs } from "node:util";

// src/backend/hx-powershell.ts
import { spawn } from "node:child_process";
import { constants, setPriority } from "node:os";

// src/backend/hx-computer/tables.ts
function hxParseNumber(stdout, min, max, scale = 1) {
  const text = stdout.trim().replace(",", ".");
  if (!/^-?\d+(\.\d+)?$/u.test(text))
    return null;
  const value = Math.round(Number(text) * scale);
  return value >= min && value <= max ? String(value) : null;
}

// src/backend/hx-computer/tables-win.ts
function page(key, uri, zh, en, pinyin, more = [], security = false) {
  return { key, address: `ms-settings:${uri}`, zh, en, pinyin, more, security };
}
var HX_WIN_PAGES = [
  page("display", "display", "屏幕", "Display", "ping mu", ["显示", "分辨率", "缩放", "显示器"]),
  page("night-light", "nightlight", "夜间模式", "Night light", "ye jian mo shi", ["护眼"]),
  page("sound", "sound", "声音", "Sound", "sheng yin", ["音量", "扬声器", "麦克风", "输出设备"]),
  page("notifications", "notifications", "通知", "Notifications", "tong zhi", ["勿扰", "免打扰"]),
  page("focus", "quiethours", "专注", "Focus", "zhuan zhu", ["专注助手", "Focus assist"]),
  page("power", "powersleep", "电源", "Power & sleep", "dian yuan", ["睡眠", "电池", "休眠"]),
  page("storage", "storagesense", "存储", "Storage", "cun chu", ["磁盘空间"]),
  page("multitasking", "multitasking", "多任务处理", "Multitasking", "duo ren wu chu li", ["贴靠窗口", "虚拟桌面"]),
  page("clipboard", "clipboard", "剪贴板", "Clipboard", "jian tie ban"),
  page("about", "about", "系统信息", "About", "xi tong xin xi", ["关于", "电脑名称", "系统版本"]),
  page("bluetooth", "bluetooth", "蓝牙和其他设备", "Bluetooth & devices", "lan ya", ["蓝牙"]),
  page("printers", "printers", "打印机和扫描仪", "Printers & scanners", "da yin ji", ["打印机"]),
  page("mouse", "mousetouchpad", "鼠标", "Mouse", "shu biao", ["指针速度", "滚轮"]),
  page("touchpad", "devices-touchpad", "触摸板", "Touchpad", "chu mo ban"),
  page("typing", "typing", "输入", "Typing", "shu ru", ["键盘", "输入法"]),
  page("network", "network-status", "网络和 Internet", "Network & internet", "wang luo", ["网络"]),
  page("wifi", "network-wifi", "WLAN", "Wi-Fi", "", ["WiFi", "无线网络", "无线局域网"]),
  page("ethernet", "network-ethernet", "以太网", "Ethernet", "yi tai wang"),
  page("vpn", "network-vpn", "VPN", "VPN", ""),
  page("proxy", "network-proxy", "代理", "Proxy", "dai li", [], true),
  page("airplane", "network-airplanemode", "飞行模式", "Airplane mode", "fei xing mo shi"),
  page("hotspot", "network-mobilehotspot", "移动热点", "Mobile hotspot", "yi dong re dian"),
  page("personalization", "personalization", "个性化", "Personalization", "ge xing hua"),
  page("background", "personalization-background", "背景", "Background", "bei jing", ["壁纸", "桌面背景", "墙纸"]),
  page("colors", "colors", "颜色", "Colors", "yan se", ["浅色模式", "主题色", "强调色"]),
  page("lock-screen", "lockscreen", "锁屏界面", "Lock screen", "suo ping jie mian", ["锁屏"]),
  page("themes", "themes", "主题", "Themes", "zhu ti"),
  page("fonts", "fonts", "字体", "Fonts", "zi ti"),
  page("taskbar", "taskbar", "任务栏", "Taskbar", "ren wu lan"),
  page("start", "personalization-start", "开始菜单", "Start", "kai shi cai dan", ["开始"]),
  page("apps", "appsfeatures", "安装的应用", "Installed apps", "an zhuang de ying yong", ["应用和功能", "卸载程序"]),
  page("default-apps", "defaultapps", "默认应用", "Default apps", "mo ren ying yong", ["默认浏览器"]),
  page("startup-apps", "startupapps", "启动应用", "Startup apps", "qi dong ying yong", ["开机启动", "启动项"], true),
  page("your-info", "yourinfo", "账户信息", "Your info", "zhang hu xin xi"),
  page("email-accounts", "emailandaccounts", "电子邮件和账户", "Email & accounts", "dian zi you jian he zhang hu"),
  page("sign-in", "signinoptions", "登录选项", "Sign-in options", "deng lu xuan xiang", ["密码", "PIN", "指纹", "人脸"], true),
  page("other-users", "otherusers", "其他用户", "Other users", "qi ta yong hu", ["家庭和其他用户"], true),
  page("date-time", "dateandtime", "日期和时间", "Date & time", "ri qi he shi jian", ["时区"]),
  page("language", "regionlanguage", "语言和区域", "Language & region", "yu yan he qu yu", ["系统语言"]),
  page("speech", "speech", "语音", "Speech", "yu yin"),
  page("game-bar", "gaming-gamebar", "游戏栏", "Game Bar", "you xi lan"),
  page("accessibility", "easeofaccess", "辅助功能", "Accessibility", "fu zhu gong neng", ["轻松使用"]),
  page("text-size", "easeofaccess-display", "文本大小", "Text size", "wen ben da xiao", ["字体大小"]),
  page("mouse-pointer", "easeofaccess-mousepointer", "鼠标指针和触控", "Mouse pointer and touch", "shu biao zhi zhen"),
  page("narrator", "easeofaccess-narrator", "讲述人", "Narrator", "jiang shu ren"),
  page("magnifier", "easeofaccess-magnifier", "放大镜", "Magnifier", "fang da jing"),
  page("privacy", "privacy", "隐私和安全性", "Privacy & security", "yin si he an quan xing", ["隐私"], true),
  page("location", "privacy-location", "定位", "Location", "ding wei", [], true),
  page("camera", "privacy-webcam", "摄像头", "Camera", "she xiang tou", ["相机权限"], true),
  page("microphone", "privacy-microphone", "麦克风权限", "Microphone access", "mai ke feng quan xian", [], true),
  page("windows-security", "windowsdefender", "Windows 安全中心", "Windows Security", "an quan zhong xin", ["杀毒", "防火墙", "Defender"], true),
  page("windows-update", "windowsupdate", "Windows 更新", "Windows Update", "geng xin", ["系统更新"]),
  page("backup", "backup", "Windows 备份", "Windows Backup", "bei fen"),
  page("troubleshoot", "troubleshoot", "疑难解答", "Troubleshoot", "yi nan jie da"),
  page("recovery", "recovery", "恢复", "Recovery", "hui fu", ["重置此电脑"], true),
  page("activation", "activation", "激活", "Activation", "ji huo"),
  page("developers", "developers", "开发者选项", "For developers", "kai fa zhe xuan xiang", [], true)
];
function hxPowerShellPath(env = process.env) {
  const root = env.SystemRoot || env.windir || "C:\\Windows";
  return `${root.replace(/[\\/]+$/u, "")}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
}
var HX_POWERSHELL = hxPowerShellPath();
var PREAMBLE = "$ProgressPreference = 'SilentlyContinue'; try { [Console]::OutputEncoding = [System.Text.Encoding]::UTF8 } catch { }; ";
function hxPowerShell(scriptText, env) {
  return {
    command: HX_POWERSHELL,
    args: [
      "-NoLogo",
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-Command",
      `${PREAMBLE}${scriptText}`
    ],
    ...env ? { env } : {}
  };
}
var PERSONALIZE = "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize";
var CLIPBOARD = "HKCU:\\Software\\Microsoft\\Clipboard";
var WMI_LIMIT_SECONDS = 10;
var BROADCAST = [
  "try {",
  "$hxQuote = [string][char]34;",
  "$hxMember = '[DllImport(' + $hxQuote + 'user32.dll' + $hxQuote + ', CharSet = CharSet.Unicode)] public static extern IntPtr SendMessageTimeout(IntPtr hWnd, uint Msg, UIntPtr wParam, string lParam, uint fuFlags, uint uTimeout, out UIntPtr lpdwResult);';",
  "Add-Type -Namespace Hx -Name Native -MemberDefinition $hxMember -ErrorAction Stop;",
  "$hxDone = [UIntPtr]::Zero;",
  "[void][Hx.Native]::SendMessageTimeout([IntPtr]0xffff, 0x1A, [UIntPtr]::Zero, 'ImmersiveColorSet', 2, 2000, [ref]$hxDone)",
  "} catch { }"
].join(" ");
function registryRead(path, name, missing) {
  return hxPowerShell(`$v = (Get-ItemProperty -Path '${path}' -Name '${name}' -ErrorAction SilentlyContinue).'${name}'; if ($null -eq $v) { '${missing}' } else { [string]$v }`);
}
function registryWrite(path, name, value, broadcast) {
  return hxPowerShell(`if (-not (Test-Path '${path}')) { New-Item -Path '${path}' -Force | Out-Null }; Set-ItemProperty -Path '${path}' -Name '${name}' -Value ${value} -Type DWord -ErrorAction Stop${broadcast ? `; ${BROADCAST}` : ""}`);
}
function registrySwitch(input) {
  const offIs = input.offIs ?? (input.onIs === 1 ? 0 : 1);
  return {
    key: input.key,
    page: input.page,
    zh: input.zh,
    en: input.en,
    pinyin: input.pinyin,
    more: input.more ?? [],
    values: { type: "switch" },
    read: registryRead(input.path, input.name, "missing"),
    parse: (stdout) => {
      const text = stdout.trim();
      if (text === String(input.onIs))
        return "on";
      if (text === String(offIs))
        return "off";
      return text === "missing" ? input.missing : null;
    },
    write: (value) => registryWrite(input.path, input.name, value === "on" ? input.onIs : offIs, input.broadcast)
  };
}
var THEME_READINGS = {
  "0,0": "on",
  "1,1": "off",
  "0,1": "apps only",
  "1,0": "system only"
};
var THEME_WRITES = {
  on: [0, 0],
  off: [1, 1],
  "apps only": [0, 1],
  "system only": [1, 0]
};
var DARK_MODE = {
  key: "dark-mode",
  page: "colors",
  zh: "深色模式",
  en: "Dark mode",
  pinyin: "shen se mo shi",
  more: ["暗色模式", "黑暗模式", "深色主题", "dark theme"],
  values: { type: "switch" },
  read: hxPowerShell(`$p = Get-ItemProperty -Path '${PERSONALIZE}' -ErrorAction SilentlyContinue; $a = $p.AppsUseLightTheme; $s = $p.SystemUsesLightTheme; if ($null -eq $a -or $null -eq $s) { 'missing' } else { [string]$a + ',' + [string]$s }`),
  parse: (stdout) => THEME_READINGS[stdout.trim()] ?? null,
  write: (value) => {
    const [apps, system] = THEME_WRITES[value] ?? [1, 1];
    return hxPowerShell(`if (-not (Test-Path '${PERSONALIZE}')) { New-Item -Path '${PERSONALIZE}' -Force | Out-Null }; Set-ItemProperty -Path '${PERSONALIZE}' -Name 'AppsUseLightTheme' -Value ${apps} -Type DWord -ErrorAction Stop; Set-ItemProperty -Path '${PERSONALIZE}' -Name 'SystemUsesLightTheme' -Value ${system} -Type DWord -ErrorAction Stop; ${BROADCAST}`);
  }
};
var FIRST_SETTINGS = [
  DARK_MODE,
  registrySwitch({
    key: "app-dark-mode",
    page: "colors",
    zh: "应用深色模式",
    en: "Dark mode for apps",
    pinyin: "",
    more: ["应用模式", "app mode"],
    path: PERSONALIZE,
    name: "AppsUseLightTheme",
    onIs: 0,
    missing: null,
    broadcast: true
  }),
  registrySwitch({
    key: "system-dark-mode",
    page: "colors",
    zh: "任务栏和开始菜单深色模式",
    en: "Dark mode for the taskbar and Start",
    pinyin: "",
    more: ["任务栏深色", "Windows 模式", "Windows mode"],
    path: PERSONALIZE,
    name: "SystemUsesLightTheme",
    onIs: 0,
    missing: null,
    broadcast: true
  }),
  registrySwitch({
    key: "transparency",
    page: "colors",
    zh: "透明效果",
    en: "Transparency effects",
    pinyin: "tou ming xiao guo",
    path: PERSONALIZE,
    name: "EnableTransparency",
    onIs: 1,
    missing: null,
    broadcast: true
  }),
  registrySwitch({
    key: "clipboard-history",
    page: "clipboard",
    zh: "剪贴板历史记录",
    en: "Clipboard history",
    pinyin: "jian tie ban li shi ji lu",
    path: CLIPBOARD,
    name: "EnableClipboardHistory",
    onIs: 1,
    missing: "off",
    broadcast: false
  }),
  {
    key: "brightness",
    page: "display",
    zh: "屏幕亮度",
    en: "Screen brightness",
    pinyin: "ping mu liang du",
    more: ["亮度"],
    values: { type: "number", min: 0, max: 100 },
    read: hxPowerShell(`try { [string](Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightness -OperationTimeoutSec ${WMI_LIMIT_SECONDS} -ErrorAction Stop | Select-Object -First 1).CurrentBrightness } catch { 'none' }`),
    parse: (stdout) => hxParseNumber(stdout, 0, 100),
    write: (value) => hxPowerShell(`$m = Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightnessMethods -OperationTimeoutSec ${WMI_LIMIT_SECONDS} -ErrorAction Stop | Select-Object -First 1; Invoke-CimMethod -InputObject $m -MethodName WmiSetBrightness -Arguments @{ Timeout = [uint32]1; Brightness = [byte]${Number(value)} } -OperationTimeoutSec ${WMI_LIMIT_SECONDS} -ErrorAction Stop | Out-Null`)
  }
];
function registryChoice(input) {
  const options = input.options.map(([option]) => option);
  return {
    key: input.key,
    page: input.page,
    zh: input.zh,
    en: input.en,
    pinyin: input.pinyin,
    more: input.more ?? [],
    values: { type: "choice", options },
    read: registryRead(input.path, input.name, "missing"),
    parse: (stdout) => {
      const text = stdout.trim();
      if (text === "missing")
        return input.missing;
      return input.options.find(([, number]) => String(number) === text)?.[0] ?? null;
    },
    write: (value) => {
      const number = input.options.find(([option]) => option === value)?.[1] ?? input.options[0]?.[1] ?? 0;
      return registryWrite(input.path, input.name, number, input.broadcast);
    }
  };
}
function powerMinutes(input) {
  return {
    key: input.key,
    page: "power",
    zh: input.zh,
    en: input.en,
    pinyin: input.pinyin,
    more: input.more ?? [],
    values: { type: "number", min: 0, max: 600 },
    read: hxPowerShell(`$q = (powercfg /query SCHEME_CURRENT ${input.group} ${input.setting}) -join ' '; $n = [regex]::Matches($q, '0x[0-9a-fA-F]{8}'); if ($n.Count -lt 2) { 'none' } else { [string][math]::Round([Convert]::ToInt32($n[$n.Count - 2].Value, 16) / 60) }`),
    parse: (stdout) => hxParseNumber(stdout, 0, 600),
    write: (value) => hxPowerShell(`powercfg /change ${input.change} ${Number(value)}`)
  };
}
var ADVANCED = "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced";
var MORE_SETTINGS = [
  registryChoice({
    key: "taskbar-alignment",
    page: "taskbar",
    zh: "任务栏对齐方式",
    en: "Taskbar alignment",
    pinyin: "ren wu lan dui qi",
    more: ["任务栏居中", "任务栏靠左", "开始按钮靠左"],
    path: ADVANCED,
    name: "TaskbarAl",
    options: [
      ["left", 0],
      ["center", 1]
    ],
    missing: "center",
    broadcast: true
  }),
  registrySwitch({
    key: "task-view-button",
    page: "taskbar",
    zh: "任务栏上的任务视图按钮",
    en: "Task view button on the taskbar",
    pinyin: "ren wu shi tu",
    more: ["任务视图", "task view"],
    path: ADVANCED,
    name: "ShowTaskViewButton",
    onIs: 1,
    missing: "on",
    broadcast: true
  }),
  registrySwitch({
    key: "clock-seconds",
    page: "taskbar",
    zh: "时钟显示秒",
    en: "Show seconds in the clock",
    pinyin: "shi zhong xian shi miao",
    more: ["显示秒", "seconds"],
    path: ADVANCED,
    name: "ShowSecondsInSystemClock",
    onIs: 1,
    missing: "off",
    broadcast: true
  }),
  registrySwitch({
    key: "accent-title-bars",
    page: "colors",
    zh: "标题栏和窗口边框显示主题色",
    en: "Accent color on title bars and window borders",
    pinyin: "",
    more: ["标题栏颜色", "窗口边框颜色"],
    path: "HKCU:\\Software\\Microsoft\\Windows\\DWM",
    name: "ColorPrevalence",
    onIs: 1,
    missing: "off",
    broadcast: true
  }),
  registrySwitch({
    key: "accent-start-taskbar",
    page: "colors",
    zh: "开始菜单和任务栏显示主题色",
    en: "Accent color on Start and the taskbar",
    pinyin: "",
    more: ["任务栏颜色"],
    path: PERSONALIZE,
    name: "ColorPrevalence",
    onIs: 1,
    missing: "off",
    broadcast: true
  }),
  registrySwitch({
    key: "notifications",
    page: "notifications",
    zh: "接收通知",
    en: "Get notifications",
    pinyin: "jie shou tong zhi",
    more: ["通知开关", "notifications on or off"],
    path: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications",
    name: "ToastEnabled",
    onIs: 1,
    missing: "on",
    broadcast: false
  }),
  registrySwitch({
    key: "game-mode",
    page: "game-bar",
    zh: "游戏模式",
    en: "Game Mode",
    pinyin: "you xi mo shi",
    path: "HKCU:\\Software\\Microsoft\\GameBar",
    name: "AllowAutoGameMode",
    onIs: 1,
    missing: "on",
    broadcast: false
  }),
  registrySwitch({
    key: "storage-sense",
    page: "storage",
    zh: "存储感知",
    en: "Storage Sense",
    pinyin: "cun chu gan zhi",
    more: ["自动清理"],
    path: "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\StorageSense\\Parameters\\StoragePolicy",
    name: "01",
    onIs: 1,
    missing: "off",
    broadcast: false
  }),
  powerMinutes({
    key: "screen-off-minutes",
    zh: "多久后关闭屏幕（接通电源时，分钟）",
    en: "Turn off the screen after (on power, minutes)",
    pinyin: "",
    more: ["关闭屏幕", "屏幕关闭时间", "熄屏时间"],
    group: "SUB_VIDEO",
    setting: "VIDEOIDLE",
    change: "monitor-timeout-ac"
  }),
  powerMinutes({
    key: "sleep-minutes",
    zh: "多久后睡眠（接通电源时，分钟）",
    en: "Sleep after (on power, minutes)",
    pinyin: "",
    more: ["睡眠时间", "自动睡眠"],
    group: "SUB_SLEEP",
    setting: "STANDBYIDLE",
    change: "standby-timeout-ac"
  })
];
var HX_WIN_SETTINGS = [...FIRST_SETTINGS, ...MORE_SETTINGS];
var HX_WIN_LIST_APPS = hxPowerShell("Get-StartApps | Select-Object Name, AppID | ConvertTo-Json -Compress");

// src/backend/hx-powershell.ts
var HX_POWERSHELL_IDLE_MS = 10 * 60000;
var HX_POWERSHELL_MAX_ANSWER = 1024 * 1024;
function hxPowerShellLine(script, env, marker) {
  const assignments = Object.entries(env).filter(([name]) => /^[A-Z_][A-Z0-9_]*$/u.test(name)).map(([name, value]) => `$env:${name}=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${Buffer.from(value, "utf16le").toString("base64")}'))`);
  const body = Buffer.from(script, "utf16le").toString("base64");
  return [
    ...assignments,
    `try { & ([ScriptBlock]::Create([Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${body}')))) } catch { }`,
    `Write-Output '${marker}'`
  ].join("; ");
}
function hxPowerShellAnswer(buffer, marker) {
  const lines = buffer.split(/\r?\n/u);
  const index = lines.findIndex((line) => line.trim() === marker);
  if (index < 0)
    return null;
  return { answer: lines.slice(0, index).join(`
`), rest: lines.slice(index + 1).join(`
`) };
}

class HxPowerShell {
  #child = null;
  #ready = false;
  #buffer = "";
  #question = null;
  #chain = Promise.resolve();
  #count = 0;
  #idle = null;
  #command;
  #platform;
  constructor(command = HX_POWERSHELL, platform = process.platform) {
    this.#command = command;
    this.#platform = platform;
  }
  warm() {
    if (this.#platform !== "win32")
      return;
    this.#touch();
    if (this.#child)
      return;
    let child;
    try {
      child = spawn(this.#command, ["-NoLogo", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-Command", "-"], {
        stdio: ["pipe", "pipe", "ignore"],
        windowsHide: true
      });
    } catch {
      return;
    }
    this.#child = child;
    this.#ready = false;
    this.#buffer = "";
    if (child.pid !== undefined) {
      try {
        setPriority(child.pid, constants.priority.PRIORITY_BELOW_NORMAL);
      } catch {}
    }
    child.stdout?.setEncoding("utf8");
    child.stdout?.on("data", (chunk) => this.#read(chunk));
    child.once("error", () => this.#ended(child));
    child.once("exit", () => this.#ended(child));
    child.stdin?.on("error", () => this.#ended(child));
    const marker = this.#marker();
    this.#question = {
      marker,
      resolve: (answer) => {
        if (answer !== null && this.#child === child)
          this.#ready = true;
      },
      timer: setTimeout(() => this.close(), 120000)
    };
    child.stdin?.write(`${hxPowerShellLine("", {}, marker)}
`);
  }
  get ready() {
    return this.#ready;
  }
  ask(script, env, timeoutMs) {
    const next = this.#chain.then(() => this.#ask(script, env, timeoutMs));
    this.#chain = next.catch(() => null);
    return next;
  }
  #ask(script, env, timeoutMs) {
    const child = this.#child;
    if (!child || !this.#ready || !child.stdin)
      return Promise.resolve(null);
    this.#touch();
    return new Promise((resolve) => {
      const marker = this.#marker();
      this.#question = {
        marker,
        resolve,
        timer: setTimeout(() => {
          this.#question = null;
          resolve(null);
          this.close();
        }, timeoutMs)
      };
      child.stdin?.write(`${hxPowerShellLine(script, env, marker)}
`);
    });
  }
  close() {
    const child = this.#child;
    if (child)
      this.#ended(child);
    try {
      child?.kill();
    } catch {}
  }
  #marker() {
    this.#count += 1;
    return `HX-END-${process.pid}-${this.#count}`;
  }
  #read(chunk) {
    this.#buffer += chunk;
    if (this.#buffer.length > HX_POWERSHELL_MAX_ANSWER) {
      this.close();
      return;
    }
    const question = this.#question;
    if (!question)
      return;
    const found = hxPowerShellAnswer(this.#buffer, question.marker);
    if (!found)
      return;
    this.#buffer = found.rest;
    this.#question = null;
    clearTimeout(question.timer);
    question.resolve(found.answer);
  }
  #ended(child) {
    if (this.#child !== child)
      return;
    this.#child = null;
    this.#ready = false;
    this.#buffer = "";
    if (this.#idle)
      clearTimeout(this.#idle);
    this.#idle = null;
    const question = this.#question;
    this.#question = null;
    if (question) {
      clearTimeout(question.timer);
      question.resolve(null);
    }
  }
  #touch() {
    if (this.#idle)
      clearTimeout(this.#idle);
    this.#idle = setTimeout(() => this.close(), HX_POWERSHELL_IDLE_MS);
    this.#idle.unref?.();
  }
}
var hxPowerShell2 = new HxPowerShell;
if (process.platform === "win32")
  process.once("exit", () => hxPowerShell2.close());

// src/backend/hx-computer/runner.ts
import { execFile } from "node:child_process";
import { constants as constants2, setPriority as setPriority2 } from "node:os";
var DEFAULT_TIMEOUT_MS = 15000;
var MAX_OUTPUT_BYTES = 8 * 1024 * 1024;
var EXIT_GRACE_MS = 2000;
var hxRun = (command, args, options = {}) => new Promise((resolve) => {
  let grace;
  const child = execFile(command, [...args], {
    timeout: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    maxBuffer: MAX_OUTPUT_BYTES,
    windowsHide: true,
    encoding: "utf8",
    env: options.env ? { ...process.env, ...options.env } : process.env
  }, (error, stdout, stderr) => {
    clearTimeout(grace);
    if (!error) {
      resolve({ code: 0, stdout, stderr, timedOut: false, missing: false });
      return;
    }
    resolve({
      code: typeof error.code === "number" ? error.code : null,
      stdout,
      stderr,
      timedOut: error.killed === true,
      missing: error.code === "ENOENT"
    });
  });
  if (options.background && child.pid !== undefined) {
    try {
      setPriority2(child.pid, constants2.priority.PRIORITY_LOW);
    } catch {}
  }
  child.once("exit", () => {
    grace = setTimeout(() => {
      child.stdout?.destroy();
      child.stderr?.destroy();
    }, EXIT_GRACE_MS);
    grace.unref();
  });
});

// src/backend/hx-process-keep.ts
var HX_TREE_LIST_MS = 4000;
var LIST_TREE = `$root = [int]$env:HX_PID
$all = @(Get-CimInstance Win32_Process -Property ProcessId,ParentProcessId)
$kids = @{}
foreach ($p in $all) { $k = [int]$p.ParentProcessId; if (-not $kids.ContainsKey($k)) { $kids[$k] = New-Object System.Collections.ArrayList }; [void]$kids[$k].Add([int]$p.ProcessId) }
$windowed = @{}
foreach ($g in Get-Process) { if ($g.MainWindowHandle -ne 0) { $windowed[$g.Id] = $true } }
$stop = New-Object System.Collections.ArrayList
$seen = @{}
function Walk([int]$id) {
  if ($seen.ContainsKey($id)) { return }
  $seen[$id] = $true
  if ($id -ne $root -and $windowed.ContainsKey($id)) { return }
  if ($kids.ContainsKey($id)) { foreach ($c in $kids[$id]) { if ($c -ne $id) { Walk $c } } }
  [void]$stop.Add($id)
}
Walk $root
'HX ' + ($stop -join ' ')`;
function powershell(text) {
  return [
    "-NoLogo",
    "-NoProfile",
    "-NonInteractive",
    "-ExecutionPolicy",
    "Bypass",
    "-EncodedCommand",
    Buffer.from(text, "utf16le").toString("base64")
  ];
}
function hxTreeAnswer(stdout, root) {
  const line = stdout.split(/\r?\n/u).map((item) => item.trim()).find((item) => item.startsWith("HX "));
  if (line === undefined)
    return null;
  const pids = line.slice(3).split(/\s+/u).filter((item) => /^\d+$/u.test(item)).map((item) => Number.parseInt(item, 10)).filter((pid) => pid > 0);
  return pids.at(-1) === root ? pids : null;
}
async function hxTreeWithoutApps(root, run = hxRun) {
  if (run === hxRun && hxPowerShell2.ready) {
    const answer = await hxPowerShell2.ask(LIST_TREE, { HX_PID: String(root) }, HX_TREE_LIST_MS);
    return answer === null ? null : hxTreeAnswer(answer, root);
  }
  const result = await run(HX_POWERSHELL, powershell(LIST_TREE), {
    timeoutMs: HX_TREE_LIST_MS,
    env: { HX_PID: String(root) }
  }).catch(() => null);
  if (result?.code !== 0)
    return null;
  return hxTreeAnswer(result.stdout, root);
}
function hxTaskkillArgs(pids) {
  return [...pids.flatMap((pid) => ["/PID", String(pid)]), "/F"];
}

// src/main/hx-flow-readings.ts
import { execFile as execFile2 } from "node:child_process";
import { readdir, readFile, readlink } from "node:fs/promises";
import { constants as constants3, setPriority as setPriority3, totalmem } from "node:os";
import { promisify } from "node:util";
var run = promisify(execFile2);
var MIN_PROCESS_BYTES = 32 * 1024 * 1024;
async function readMacMemory() {
  const { stdout } = await run("/usr/bin/vm_stat", [], { timeout: 3000 });
  return {
    totalBytes: totalmem(),
    availableBytes: parseVmStat(stdout),
    pressure: await readMacPressure()
  };
}
function parseVmStat(text) {
  const pageSize = Number(/page size of (\d+) bytes/u.exec(text)?.[1] ?? 16384);
  const pages = (name) => Number(new RegExp(`^${name}:\\s+(\\d+)\\.`, "mu").exec(text)?.[1] ?? 0);
  return (pages("Pages free") + pages("Pages inactive") + pages("Pages purgeable") + pages("Pages speculative")) * pageSize;
}
async function readMacPressure() {
  try {
    const { stdout } = await run("/usr/sbin/sysctl", ["-n", "kern.memorystatus_vm_pressure_level"], { timeout: 3000 });
    const level = Number(stdout.trim());
    if (level >= 4)
      return "critical";
    if (level === 2)
      return "warn";
    return "normal";
  } catch {
    return null;
  }
}
async function linuxDescendantBytes(electronPath) {
  const entries = await readdir("/proc");
  const parents = new Map;
  const rss = new Map;
  await Promise.all(entries.filter((entry) => /^\d+$/u.test(entry)).map(async (entry) => {
    const pid = Number(entry);
    try {
      const status = await readFile(`/proc/${pid}/status`, "utf8");
      const ppid = Number(/^PPid:\s+(\d+)$/mu.exec(status)?.[1] ?? 0);
      const kib = Number(/^VmRSS:\s+(\d+) kB$/mu.exec(status)?.[1] ?? 0);
      parents.set(pid, ppid);
      rss.set(pid, kib * 1024);
    } catch {}
  }));
  const own = await descendants(parents);
  let total = 0;
  let processes = 0;
  for (const pid of own) {
    const exe = await readlink(`/proc/${pid}/exe`).catch(() => "");
    if (exe === electronPath)
      continue;
    const bytes = rss.get(pid) ?? 0;
    total += bytes;
    if (bytes >= MIN_PROCESS_BYTES)
      processes += 1;
  }
  return { bytes: total, processes };
}
async function psDescendantBytes(electronPath) {
  const { stdout } = await run("/bin/ps", ["-axo", "pid=,ppid=,rss=,comm="], {
    timeout: 3000,
    maxBuffer: 8 * 1024 * 1024
  });
  const parents = new Map;
  const rss = new Map;
  for (const line of stdout.split(`
`)) {
    const match = /^\s*(\d+)\s+(\d+)\s+(\d+)\s+(.*)$/u.exec(line);
    if (!match)
      continue;
    const pid = Number(match[1]);
    parents.set(pid, Number(match[2]));
    rss.set(pid, { bytes: Number(match[3]) * 1024, command: match[4] ?? "" });
  }
  let total = 0;
  let processes = 0;
  for (const pid of await descendants(parents)) {
    const entry = rss.get(pid);
    if (!entry || entry.command.startsWith(electronPath) || entry.command.includes(" Helper"))
      continue;
    total += entry.bytes;
    if (entry.bytes >= MIN_PROCESS_BYTES)
      processes += 1;
  }
  return { bytes: total, processes };
}
function hxTasklistBytes(stdout, pids) {
  let bytes = 0;
  let processes = 0;
  for (const line of stdout.split(/\r?\n/u)) {
    const fields = [...line.matchAll(/"([^"]*)"/gu)].map((match) => match[1] ?? "");
    if (fields.length < 5 || !pids.has(Number(fields[1])))
      continue;
    const digits = (fields[4] ?? "").replace(/\D/gu, "");
    if (!digits)
      continue;
    const size = Number(digits) * 1024;
    bytes += size;
    if (size >= MIN_PROCESS_BYTES)
      processes += 1;
  }
  return { bytes, processes };
}
async function descendants(parents) {
  const children = new Map;
  for (const [pid, ppid] of parents) {
    const list = children.get(ppid) ?? [];
    list.push(pid);
    children.set(ppid, list);
  }
  const found = new Set;
  const pending = [...children.get(process.pid) ?? []];
  for (let pid = pending.pop();pid !== undefined; pid = pending.pop()) {
    if (found.has(pid))
      continue;
    found.add(pid);
    pending.push(...children.get(pid) ?? []);
  }
  return found;
}

// scripts/hx-flow-system-check.ts
var { values } = parseArgs({ options: { out: { type: "string" }, machine: { type: "string" } } });
var OUT = values.out ?? "out";
var MACHINE = values.machine ?? process.platform;
var MIB = 1024 * 1024;
mkdirSync(OUT, { recursive: true });
var items = [];
var wait = (ms) => new Promise((done) => setTimeout(done, ms));
function command(file, args, timeout = 120000) {
  const start = performance.now();
  return new Promise((done) => {
    execFile3(file, [...args], { timeout, windowsHide: true, maxBuffer: 16 * MIB }, (error, stdout) => done({ stdout: String(stdout), ms: Math.round(performance.now() - start), ok: !error }));
  });
}
function holder(mb) {
  return spawn2(process.execPath, ["-e", `globalThis.held = Buffer.alloc(${mb} * 1024 * 1024, 1); setInterval(() => {}, 1e6);`], {
    stdio: "ignore",
    windowsHide: true
  });
}
var alive = (pid) => {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
};
async function windows() {
  const children = [holder(150), holder(150)];
  await wait(3000);
  const pids = new Set(children.flatMap((child) => child.pid === undefined ? [] : [child.pid]));
  const list = await command("tasklist.exe", ["/FO", "CSV", "/NH"], 30000);
  const reading = hxTasklistBytes(list.stdout, pids);
  items.push({
    id: "win.tasklist",
    pass: list.ok && reading.processes === 2 && reading.bytes >= 2 * 140 * MIB && reading.bytes <= 2 * 400 * MIB,
    detail: `2 个各占 150 MB 的进程：tasklist 读到 ${(reading.bytes / MIB).toFixed(0)} MB、${reading.processes} 个`,
    ms: list.ms
  });
  for (const child of children)
    child.kill();
  for (const round of [1, 2]) {
    const once = await command("powershell.exe", ["-NoLogo", "-NoProfile", "-NonInteractive", "-Command", "exit 0"]);
    items.push({ id: `win.powershell.start${round}`, pass: once.ok, detail: "启动一次新的 PowerShell", ms: once.ms });
  }
  const warmAt = performance.now();
  hxPowerShell2.warm();
  while (!hxPowerShell2.ready && performance.now() - warmAt < 120000)
    await wait(100);
  items.push({
    id: "win.resident.ready",
    pass: hxPowerShell2.ready,
    detail: "常驻 PowerShell 就绪",
    ms: Math.round(performance.now() - warmAt)
  });
  const answers = [];
  for (let index = 0;index < 5; index += 1) {
    const start = performance.now();
    const answer = await hxPowerShell2.ask("Write-Output ('HX ' + $env:HX_N)", { HX_N: String(index) }, 1e4);
    answers.push(Math.round(performance.now() - start));
    if (answer?.trim() !== `HX ${index}`)
      answers.push(-1);
  }
  items.push({
    id: "win.resident.answer",
    pass: !answers.includes(-1),
    detail: `5 次回答（毫秒）：${answers.join("、")}`,
    ms: Math.max(...answers)
  });
  const formScript = Buffer.from('Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.Form; $f.Text = "HX check"; [System.Windows.Forms.Application]::Run($f)', "utf16le").toString("base64");
  const root = spawn2("cmd.exe", [
    "/d",
    "/s",
    "/c",
    `"start "" powershell.exe -NoProfile -EncodedCommand ${formScript} & ping -n 300 127.0.0.1 > nul"`
  ], { stdio: "ignore", windowsHide: true, windowsVerbatimArguments: true });
  const childrenDeadline = performance.now() + 30000;
  let ids = null;
  while (root.pid !== undefined && ids === null && performance.now() < childrenDeadline) {
    const rows = await command("powershell.exe", [
      "-NoProfile",
      "-Command",
      `Get-CimInstance Win32_Process -Filter 'ParentProcessId=${root.pid}' | ForEach-Object { '' + $_.ProcessId + ' ' + $_.Name }`
    ]);
    const children = rows.stdout.split(/\r?\n/u).map((line) => /^(\d+) (.+)$/u.exec(line.trim())).filter((match) => match !== null);
    const shell = children.find((match) => match[2]?.toLowerCase() === "powershell.exe");
    const ping = children.find((match) => match[2]?.toLowerCase() === "ping.exe");
    if (shell && ping)
      ids = { form: Number(shell[1]), worker: Number(ping[1]) };
    else
      await wait(500);
  }
  const windowDeadline = performance.now() + 90000;
  let windowed = false;
  while (ids && !windowed && performance.now() < windowDeadline) {
    const found = await command("powershell.exe", [
      "-NoProfile",
      "-Command",
      `(Get-Process -Id ${ids.form} -ErrorAction SilentlyContinue).MainWindowHandle -ne 0`
    ]);
    windowed = found.stdout.trim() === "True";
    if (!windowed)
      await wait(1000);
  }
  const treeAt = performance.now();
  const tree = root.pid === undefined ? null : await hxTreeWithoutApps(root.pid);
  const treeMs = Math.round(performance.now() - treeAt);
  const listed = tree !== null;
  const stopping = tree ?? [];
  items.push({
    id: "win.tree",
    pass: ids !== null && windowed && listed && stopping.includes(ids.worker) && !stopping.includes(ids.form) && stopping.at(-1) === root.pid,
    detail: `进程树（经常驻 PowerShell）：${tree === null ? "没在时限内列出" : `要停的 ${tree.length} 个，含无窗口的进程：${ids ? tree.includes(ids.worker) : "—"}，含有窗口的应用：${ids ? tree.includes(ids.form) : "—"}`}`,
    ms: treeMs
  });
  if (tree && ids) {
    await command("taskkill.exe", hxTaskkillArgs(tree), 30000);
    await wait(2000);
    items.push({
      id: "win.stop.keeps-app",
      pass: alive(ids.form) && !alive(ids.worker) && root.pid !== undefined && !alive(root.pid),
      detail: `停下后：有窗口的应用${alive(ids.form) ? "还开着" : "被关掉了"}，无窗口的进程${alive(ids.worker) ? "还在" : "已停"}`
    });
    await command("taskkill.exe", ["/PID", String(ids.form), "/T", "/F"], 30000);
  } else {
    root.kill();
  }
  hxPowerShell2.close();
}
async function mac() {
  const reading = await readMacMemory();
  const level = await command("/usr/sbin/sysctl", ["-n", "kern.memorystatus_vm_pressure_level"], 1e4);
  const pressure = await command("/usr/bin/memory_pressure", [], 30000);
  const free = /System-wide memory free percentage:\s*(\d+)%/u.exec(pressure.stdout)?.[1];
  items.push({
    id: "mac.memory",
    pass: reading.availableBytes > 0 && reading.availableBytes <= reading.totalBytes,
    detail: `总内存 ${(reading.totalBytes / MIB).toFixed(0)} MB；vm_stat 估算可用 ${(reading.availableBytes / MIB).toFixed(0)} MB（${(reading.availableBytes / reading.totalBytes * 100).toFixed(0)}%）；内核压力等级 ${level.stdout.trim() || "—"}（HX 读作 ${reading.pressure ?? "未知"}）；memory_pressure 说空闲 ${free ?? "—"}%`
  });
  writeFileSync(join(OUT, "memory_pressure.txt"), pressure.stdout);
  const children = [holder(150), holder(150)];
  await wait(3000);
  const agents = await psDescendantBytes(`${process.execPath}.none`);
  items.push({
    id: "mac.agents",
    pass: agents.processes >= 2 && agents.bytes >= 2 * 140 * MIB,
    detail: `2 个各占 150 MB 的子进程：ps 读到 ${(agents.bytes / MIB).toFixed(0)} MB、${agents.processes} 个`
  });
  for (const child of children)
    child.kill();
}
async function linux() {
  const children = [holder(150), holder(150)];
  await wait(3000);
  const agents = await linuxDescendantBytes(`${process.execPath}.none`);
  items.push({
    id: "linux.agents",
    pass: agents.processes >= 2 && agents.bytes >= 2 * 140 * MIB,
    detail: `2 个各占 150 MB 的子进程：/proc 读到 ${(agents.bytes / MIB).toFixed(0)} MB、${agents.processes} 个`
  });
  for (const child of children)
    child.kill();
}
var started = Date.now();
try {
  if (process.platform === "win32")
    await windows();
  else if (process.platform === "darwin")
    await mac();
  else
    await linux();
} catch (error) {
  items.push({
    id: "error",
    pass: false,
    detail: error instanceof Error ? error.stack ?? error.message : String(error)
  });
}
var report = {
  machine: MACHINE,
  platform: process.platform,
  arch: process.arch,
  node: process.version,
  totalMb: Math.round(totalmem2() / MIB),
  freeMb: Math.round(freemem() / MIB),
  ms: Date.now() - started,
  passed: items.every((item) => item.pass),
  items
};
writeFileSync(join(OUT, "report.json"), `${JSON.stringify(report, null, 2)}
`);
writeFileSync(join(OUT, "summary.md"), [
  `## HX-Flow 系统检查 · ${MACHINE}`,
  "",
  "| 项 | 结果 | 用时 | 说明 |",
  "|---|---|---|---|",
  ...items.map((item) => `| ${item.id} | ${item.pass ? "通过" : "失败"} | ${item.ms ?? ""} | ${item.detail.replace(/\|/gu, "/")} |`),
  ""
].join(`
`));
process.exitCode = report.passed ? 0 : 1;
