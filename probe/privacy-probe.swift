// Probe 2: does macOS accept a program's press on a toggle in System Settings → Privacy & Security?
// For each pane: open it, list the toggles (Accessibility API), press one, and record what happens:
// the value changes, an authentication window (password or Touch ID) appears, or nothing.
// Usage: privacy-probe <output folder>. Writes <output>/privacy.json and screenshots.
import AppKit
import ApplicationServices
import Foundation

let out = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "."
let panes = [
  ("screen_recording", "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"),
  ("app_management", "x-apple.systempreferences:com.apple.preference.security?Privacy_AppBundles"),
  ("automation", "x-apple.systempreferences:com.apple.preference.security?Privacy_Automation"),
  ("accessibility", "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"),
]

func attr(_ element: AXUIElement, _ name: String) -> AnyObject? {
  var value: AnyObject?
  return AXUIElementCopyAttributeValue(element, name as CFString, &value) == .success ? value : nil
}

func text(_ object: AnyObject?) -> String {
  if let string = object as? String { return string }
  if let number = object as? NSNumber { return number.stringValue }
  return ""
}

struct Found { let element: AXUIElement; let info: [String: String] }

func walk(_ element: AXUIElement, _ depth: Int, _ toggles: inout [Found], _ labels: inout [String]) {
  if depth > 40 || toggles.count > 60 { return }
  let role = text(attr(element, kAXRoleAttribute as String))
  let subrole = text(attr(element, kAXSubroleAttribute as String))
  if role == "AXCheckBox" || role == "AXSwitch" || subrole == "AXSwitch" || subrole == "AXToggle" {
    toggles.append(Found(element: element, info: [
      "role": role, "subrole": subrole,
      "title": text(attr(element, kAXTitleAttribute as String)),
      "description": text(attr(element, kAXDescriptionAttribute as String)),
      "value": text(attr(element, kAXValueAttribute as String)),
      "enabled": text(attr(element, kAXEnabledAttribute as String)),
    ]))
  }
  if role == "AXStaticText", labels.count < 80 {
    let value = text(attr(element, kAXValueAttribute as String))
    if !value.isEmpty { labels.append(value) }
  }
  if let children = attr(element, kAXChildrenAttribute as String) as? [AXUIElement] {
    for child in children { walk(child, depth + 1, &toggles, &labels) }
  }
}

func settingsApp() -> NSRunningApplication? {
  NSRunningApplication.runningApplications(withBundleIdentifier: "com.apple.systempreferences").first
}

func windowOwners() -> [String] {
  let list = CGWindowListCopyWindowInfo([.optionOnScreenOnly], kCGNullWindowID) as? [[String: Any]] ?? []
  return list.compactMap { window in
    let owner = window[kCGWindowOwnerName as String] as? String ?? ""
    let name = window[kCGWindowName as String] as? String ?? ""
    return owner.isEmpty ? nil : (name.isEmpty ? owner : "\(owner): \(name)")
  }
}

func shot(_ name: String) {
  let task = Process()
  task.executableURL = URL(fileURLWithPath: "/usr/sbin/screencapture")
  task.arguments = ["-x", "\(out)/\(name).png"]
  try? task.run()
  task.waitUntilExit()
}

func sleepSeconds(_ seconds: Double) { Thread.sleep(forTimeInterval: seconds) }

var report: [String: Any] = [
  "macos": ProcessInfo.processInfo.operatingSystemVersionString,
  "accessibility_trusted": AXIsProcessTrusted(),
  "screen_capture_preflight": CGPreflightScreenCaptureAccess(),
]
var results: [[String: Any]] = []
for (name, url) in panes {
  var result: [String: Any] = ["pane": name]
  NSWorkspace.shared.open(URL(string: url)!)
  sleepSeconds(7)
  guard let app = settingsApp() else {
    result["error"] = "System Settings is not running"
    results.append(result)
    continue
  }
  let element = AXUIElementCreateApplication(app.processIdentifier)
  var toggles: [Found] = []
  var labels: [String] = []
  walk(element, 0, &toggles, &labels)
  result["toggles"] = toggles.map { $0.info }
  result["labels"] = Array(labels.prefix(40))
  shot("\(name)-before")
  let before = Set(windowOwners())
  if let target = toggles.first(where: { $0.info["enabled"] != "0" }) ?? toggles.first {
    let valueBefore = text(attr(target.element, kAXValueAttribute as String))
    let press = AXUIElementPerformAction(target.element, kAXPressAction as CFString)
    sleepSeconds(4)
    let valueAfter = text(attr(target.element, kAXValueAttribute as String))
    let after = Set(windowOwners())
    result["pressed"] = target.info
    result["press_result"] = press.rawValue
    result["value_before"] = valueBefore
    result["value_after"] = valueAfter
    result["new_windows"] = Array(after.subtracting(before)).sorted()
    let auth: (String) -> Bool = { $0.contains("SecurityAgent") || $0.contains("coreautha") || $0.contains("LocalAuthentication") }
    result["auth_window_before"] = before.contains(where: auth)
    result["auth_window_new"] = after.subtracting(before).contains(where: auth)
    result["windows_after"] = Array(after).sorted()
    var sheetTexts: [String] = []
    var sheets = 0
    if let windows = attr(element, kAXWindowsAttribute as String) as? [AXUIElement] {
      for window in windows {
        if let children = attr(window, kAXChildrenAttribute as String) as? [AXUIElement] {
          for sheet in children where text(attr(sheet, kAXRoleAttribute as String)) == "AXSheet" {
            sheets += 1
            var none: [Found] = []
            var words: [String] = []
            walk(sheet, 0, &none, &words)
            if let buttons = attr(sheet, kAXChildrenAttribute as String) as? [AXUIElement] {
              for button in buttons where text(attr(button, kAXRoleAttribute as String)) == "AXButton" {
                words.append("[" + text(attr(button, kAXTitleAttribute as String)) + "]")
              }
            }
            sheetTexts.append(contentsOf: words)
          }
        }
      }
    }
    result["sheets"] = sheets
    result["sheet_texts"] = sheetTexts
    shot("\(name)-after")
  } else {
    result["pressed"] = NSNull()
  }
  results.append(result)
  settingsApp()?.terminate()
  sleepSeconds(3)
}
report["panes"] = results
let data = try JSONSerialization.data(withJSONObject: report, options: [.prettyPrinted, .sortedKeys])
try data.write(to: URL(fileURLWithPath: "\(out)/privacy.json"))
print(String(data: data, encoding: .utf8) ?? "")
