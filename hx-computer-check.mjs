// scripts/hx-computer-check.ts
import { copyFile, mkdir as mkdir4, readdir as readdir3, readFile as readFile3, writeFile as writeFile4 } from "node:fs/promises";
import { homedir } from "node:os";
import { join as join5, resolve } from "node:path";

// src/backend/hx-computer/realcheck.ts
import { chmod, mkdir as mkdir3, rm, writeFile as writeFile3 } from "node:fs/promises";
import { arch as arch2, release as release2, type as type2 } from "node:os";
import { join as join4 } from "node:path";

// packages/contracts/src/runtime-values.ts
function isFunction(value) {
  return value instanceof Function;
}
function isObjectValue(value) {
  return value === null || Object(value) === value && !isFunction(value);
}
function isDynamicRecord(value) {
  return value !== null && isObjectValue(value) && !Array.isArray(value);
}

// src/backend/hx-computer/actions.ts
import { stat } from "node:fs/promises";
import { extname, isAbsolute } from "node:path";

// src/backend/hx-computer/tables.ts
function hxSeedTolerance(seed) {
  return seed.tolerance ?? 1;
}
var HX_COMBINED_SEPARATOR = "@@";
function hxParseSwitch(stdout) {
  const text = stdout.trim().toLowerCase();
  if (text === "true")
    return "on";
  if (text === "false")
    return "off";
  return null;
}
function hxParseNumber(stdout, min, max, scale = 1) {
  const text = stdout.trim().replace(",", ".");
  if (!/^-?\d+(\.\d+)?$/u.test(text))
    return null;
  const value = Math.round(Number(text) * scale);
  return value >= min && value <= max ? String(value) : null;
}
function hxParseChoice(stdout, options) {
  const text = stdout.trim().toLowerCase();
  return options.includes(text) ? text : null;
}

// src/backend/hx-computer/tables-mac.ts
function page(key, pane, zh, en, pinyin, more = [], security = false) {
  return { key, address: `x-apple.systempreferences:${pane}`, zh, en, pinyin, more, security };
}
var HX_MAC_PAGES = [
  page("wifi", "com.apple.wifi-settings-extension", "无线局域网", "Wi-Fi", "wu xian ju yu wang", [
    "WiFi",
    "WLAN",
    "无线网络"
  ]),
  page("bluetooth", "com.apple.BluetoothSettings", "蓝牙", "Bluetooth", "lan ya"),
  page("network", "com.apple.Network-Settings.extension", "网络", "Network", "wang luo", [
    "以太网",
    "DNS",
    "代理",
    "VPN"
  ]),
  page("notifications", "com.apple.Notifications-Settings.extension", "通知", "Notifications", "tong zhi"),
  page("sound", "com.apple.Sound-Settings.extension", "声音", "Sound", "sheng yin", ["扬声器", "麦克风", "输出设备"]),
  page("focus", "com.apple.Focus-Settings.extension", "专注模式", "Focus", "zhuan zhu mo shi", [
    "勿扰模式",
    "Do Not Disturb"
  ]),
  page("screen-time", "com.apple.Screen-Time-Settings.extension", "屏幕使用时间", "Screen Time", "ping mu shi yong shi jian"),
  page("appearance", "com.apple.Appearance-Settings.extension", "外观", "Appearance", "wai guan", [
    "浅色模式",
    "强调色"
  ]),
  page("accessibility", "com.apple.Accessibility-Settings.extension", "辅助功能", "Accessibility", "fu zhu gong neng", [
    "旁白",
    "缩放"
  ]),
  page("control-center", "com.apple.ControlCenter-Settings.extension", "控制中心", "Control Center", "kong zhi zhong xin", ["菜单栏"]),
  page("siri", "com.apple.Siri-Settings.extension", "Siri 与聚焦", "Siri & Spotlight", "", [
    "Siri",
    "聚焦",
    "Spotlight"
  ]),
  page("privacy", "com.apple.settings.PrivacySecurity.extension", "隐私与安全性", "Privacy & Security", "yin si yu an quan xing", ["防火墙", "文件保险箱", "定位服务", "屏幕录制", "自动化"], true),
  page("desktop-dock", "com.apple.Desktop-Settings.extension", "桌面与程序坞", "Desktop & Dock", "zhuo mian yu cheng xu wu", ["Dock", "程序坞", "台前调度", "默认浏览器"]),
  page("displays", "com.apple.Displays-Settings.extension", "显示器", "Displays", "xian shi qi", [
    "分辨率",
    "亮度",
    "夜览",
    "屏幕"
  ]),
  page("wallpaper", "com.apple.Wallpaper-Settings.extension", "墙纸", "Wallpaper", "qiang zhi", ["壁纸", "桌面背景"]),
  page("screen-saver", "com.apple.ScreenSaver-Settings.extension", "屏幕保护程序", "Screen Saver", "ping mu bao hu cheng xu", ["屏保"]),
  page("battery", "com.apple.Battery-Settings.extension", "电池", "Battery", "dian chi", [
    "节能",
    "低电量模式",
    "Energy Saver"
  ]),
  page("lock-screen", "com.apple.Lock-Screen-Settings.extension", "锁定屏幕", "Lock Screen", "suo ding ping mu", [
    "自动锁定",
    "锁屏"
  ]),
  page("touch-id", "com.apple.Touch-ID-Settings.extension", "触控 ID 与密码", "Touch ID & Password", "chu kong id yu mi ma", ["登录密码", "指纹"], true),
  page("users", "com.apple.Users-Groups-Settings.extension", "用户与群组", "Users & Groups", "yong hu yu qun zu", [], true),
  page("passwords", "com.apple.Passwords-Settings.extension", "密码", "Passwords", "mi ma", [], true),
  page("internet-accounts", "com.apple.Internet-Accounts-Settings.extension", "互联网账户", "Internet Accounts", "hu lian wang zhang hu", ["邮件账户"]),
  page("game-center", "com.apple.Game-Center-Settings.extension", "Game Center", "Game Center", ""),
  page("wallet", "com.apple.WalletSettingsExtension", "钱包与 Apple Pay", "Wallet & Apple Pay", "qian bao", [], true),
  page("keyboard", "com.apple.Keyboard-Settings.extension", "键盘", "Keyboard", "jian pan", [
    "输入法",
    "快捷键",
    "听写"
  ]),
  page("mouse", "com.apple.Mouse-Settings.extension", "鼠标", "Mouse", "shu biao", ["指针速度", "滚动方向"]),
  page("trackpad", "com.apple.Trackpad-Settings.extension", "触控板", "Trackpad", "chu kong ban", [
    "轻点来点按",
    "手势"
  ]),
  page("printers", "com.apple.Print-Scan-Settings.extension", "打印机与扫描仪", "Printers & Scanners", "da yin ji yu sao miao yi", ["打印机"]),
  page("about", "com.apple.SystemProfiler.AboutExtension", "关于本机", "About", "guan yu ben ji", [
    "电脑名称",
    "系统版本",
    "通用",
    "General"
  ]),
  page("software-update", "com.apple.Software-Update-Settings.extension", "软件更新", "Software Update", "ruan jian geng xin", ["系统更新"]),
  page("storage", "com.apple.settings.Storage", "储存空间", "Storage", "chu cun kong jian", ["磁盘空间", "存储"]),
  page("airdrop", "com.apple.AirDrop-Handoff-Settings.extension", "隔空投送与接力", "AirDrop & Handoff", "ge kong tou song yu jie li", ["隔空投送", "AirDrop", "隔空播放"]),
  page("login-items", "com.apple.LoginItems-Settings.extension", "登录项", "Login Items", "deng lu xiang", ["开机启动", "启动项"], true),
  page("language", "com.apple.Localization-Settings.extension", "语言与地区", "Language & Region", "yu yan yu di qu", [
    "系统语言"
  ]),
  page("date-time", "com.apple.Date-Time-Settings.extension", "日期与时间", "Date & Time", "ri qi yu shi jian", [
    "时区"
  ]),
  page("sharing", "com.apple.Sharing-Settings.extension", "共享", "Sharing", "gong xiang", ["屏幕共享", "文件共享", "远程登录"], true),
  page("time-machine", "com.apple.Time-Machine-Settings.extension", "时间机器", "Time Machine", "shi jian ji qi", [
    "备份"
  ]),
  page("transfer-reset", "com.apple.Transfer-Reset-Settings.extension", "传输或还原", "Transfer or Reset", "chuan shu huo huan yuan", ["抹掉所有内容"], true),
  page("startup-disk", "com.apple.Startup-Disk-Settings.extension", "启动磁盘", "Startup Disk", "qi dong ci pan", [], true),
  page("apple-account", "com.apple.systempreferences.AppleIDSettings", "Apple 账户", "Apple Account", "", ["Apple ID", "iCloud"], true)
];
var OSASCRIPT = "/usr/bin/osascript";
function hxMacCombined(read, write) {
  const readScript = read.command === OSASCRIPT && read.args.length === 2 ? read.args[1] : undefined;
  const writeScript = write.command === OSASCRIPT && write.args.length === 2 ? write.args[1] : undefined;
  if (readScript === undefined || writeScript === undefined)
    return null;
  return {
    command: OSASCRIPT,
    args: [
      "-e",
      readScript,
      "-e",
      "set hxBefore to result as text",
      "-e",
      writeScript,
      "-e",
      readScript,
      "-e",
      `return hxBefore & linefeed & "${HX_COMBINED_SEPARATOR}" & linefeed & (result as text)`
    ]
  };
}
function script(text) {
  return { command: OSASCRIPT, args: ["-e", text] };
}
function events(text) {
  return script(`tell application "System Events" to ${text}`);
}
function volumeNumber(key, zh, en, pinyin, property) {
  return {
    key,
    page: "sound",
    zh,
    en,
    pinyin,
    values: { type: "number", min: 0, max: 100 },
    read: script(`${property} of (get volume settings)`),
    parse: (stdout) => hxParseNumber(stdout, 0, 100),
    write: (value) => script(`set volume ${property} ${Number(value)}`)
  };
}
function dockSwitch(key, zh, en, pinyin, property, more = []) {
  const seed = {
    key,
    page: "desktop-dock",
    zh,
    en,
    pinyin,
    more,
    values: { type: "switch" },
    read: events(`get ${property} of dock preferences`),
    parse: hxParseSwitch,
    write: (value) => events(`set ${property} of dock preferences to ${value === "on"}`)
  };
  return seed;
}
function dockChoice(key, zh, en, pinyin, property, options) {
  const seed = {
    key,
    page: "desktop-dock",
    zh,
    en,
    pinyin,
    values: { type: "choice", options },
    read: events(`get ${property} of dock preferences`),
    parse: (stdout) => hxParseChoice(stdout, options),
    write: (value) => events(`set ${property} of dock preferences to ${options.includes(value) ? value : options[0]}`)
  };
  return seed;
}
var HX_MAC_SETTINGS = [
  {
    key: "dark-mode",
    page: "appearance",
    zh: "深色模式",
    en: "Dark mode",
    pinyin: "shen se mo shi",
    more: ["暗色模式", "夜间模式", "深色外观", "dark appearance"],
    values: { type: "switch" },
    read: events("tell appearance preferences to get dark mode"),
    parse: hxParseSwitch,
    write: (value) => events(`tell appearance preferences to set dark mode to ${value === "on"}`)
  },
  {
    ...volumeNumber("volume", "音量", "Volume", "yin liang", "output volume"),
    more: ["输出音量", "声音大小", "output volume"]
  },
  {
    key: "mute",
    page: "sound",
    zh: "静音",
    en: "Mute",
    pinyin: "jing yin",
    more: ["关闭声音", "muted"],
    values: { type: "switch" },
    read: script("output muted of (get volume settings)"),
    parse: hxParseSwitch,
    write: (value) => script(`set volume output muted ${value === "on"}`)
  },
  volumeNumber("alert-volume", "提示音音量", "Alert volume", "ti shi yin yin liang", "alert volume"),
  {
    ...volumeNumber("input-volume", "输入音量", "Input volume", "shu ru yin liang", "input volume"),
    more: ["麦克风音量"]
  },
  dockSwitch("dock-autohide", "自动隐藏程序坞", "Hide the Dock automatically", "zi dong yin cang cheng xu wu", "autohide", ["自动隐藏 Dock", "Dock autohide"]),
  dockSwitch("dock-magnification", "程序坞放大", "Dock magnification", "cheng xu wu fang da", "magnification", [
    "Dock 放大"
  ]),
  dockSwitch("dock-recents", "在程序坞中显示最近使用的应用", "Show recent apps in the Dock", "", "show recents"),
  dockSwitch("menu-bar-autohide", "自动隐藏菜单栏", "Hide the menu bar automatically", "zi dong yin cang cai dan lan", "autohide menu bar"),
  dockChoice("dock-position", "程序坞位置", "Dock position", "cheng xu wu wei zhi", "screen edge", [
    "left",
    "bottom",
    "right"
  ]),
  dockChoice("dock-minimize-effect", "最小化窗口的效果", "Minimize effect", "", "minimize effect", ["genie", "scale"]),
  {
    key: "dock-size",
    page: "desktop-dock",
    zh: "程序坞大小",
    en: "Dock size",
    pinyin: "cheng xu wu da xiao",
    more: ["Dock 大小"],
    values: { type: "number", min: 0, max: 100 },
    read: events("get dock size of dock preferences"),
    parse: (stdout) => hxParseNumber(stdout, 0, 100, 100),
    write: (value) => events(`set dock size of dock preferences to (${Number(value)} / 100)`),
    tolerance: 4
  },
  dockSwitch("dock-indicators", "显示已打开应用的指示灯", "Show indicators for open apps", "zhi shi deng", "show indicators", ["指示灯", "程序坞指示灯"]),
  dockSwitch("dock-minimize-into-app", "将窗口最小化至应用程序图标", "Minimize windows into the app icon", "", "minimize into application", ["最小化到应用图标"]),
  dockSwitch("dock-launch-animation", "打开应用时显示动画", "Animate opening apps", "", "animate", [
    "启动动画",
    "打开动画"
  ]),
  {
    key: "dock-magnification-size",
    page: "desktop-dock",
    zh: "程序坞放大后的大小",
    en: "Dock magnification size",
    pinyin: "",
    more: ["放大大小"],
    values: { type: "number", min: 0, max: 100 },
    read: events("get magnification size of dock preferences"),
    parse: (stdout) => hxParseNumber(stdout, 0, 100, 100),
    write: (value) => events(`set magnification size of dock preferences to (${Number(value)} / 100)`),
    tolerance: 4
  }
];
function hxMacAppRoots(home) {
  return [
    "/Applications",
    "/Applications/Utilities",
    "/System/Applications",
    "/System/Applications/Utilities",
    "/System/Library/CoreServices/Applications",
    `${home}/Applications`
  ];
}
var HX_MAC_EXTRA_APPS = ["/System/Library/CoreServices/Finder.app"];

// src/backend/hx-computer/tables-win.ts
function page2(key, uri, zh, en, pinyin, more = [], security = false) {
  return { key, address: `ms-settings:${uri}`, zh, en, pinyin, more, security };
}
var HX_WIN_PAGES = [
  page2("display", "display", "屏幕", "Display", "ping mu", ["显示", "分辨率", "缩放", "显示器"]),
  page2("night-light", "nightlight", "夜间模式", "Night light", "ye jian mo shi", ["护眼"]),
  page2("sound", "sound", "声音", "Sound", "sheng yin", ["音量", "扬声器", "麦克风", "输出设备"]),
  page2("notifications", "notifications", "通知", "Notifications", "tong zhi", ["勿扰", "免打扰"]),
  page2("focus", "quiethours", "专注", "Focus", "zhuan zhu", ["专注助手", "Focus assist"]),
  page2("power", "powersleep", "电源", "Power & sleep", "dian yuan", ["睡眠", "电池", "休眠"]),
  page2("storage", "storagesense", "存储", "Storage", "cun chu", ["磁盘空间"]),
  page2("multitasking", "multitasking", "多任务处理", "Multitasking", "duo ren wu chu li", ["贴靠窗口", "虚拟桌面"]),
  page2("clipboard", "clipboard", "剪贴板", "Clipboard", "jian tie ban"),
  page2("about", "about", "系统信息", "About", "xi tong xin xi", ["关于", "电脑名称", "系统版本"]),
  page2("bluetooth", "bluetooth", "蓝牙和其他设备", "Bluetooth & devices", "lan ya", ["蓝牙"]),
  page2("printers", "printers", "打印机和扫描仪", "Printers & scanners", "da yin ji", ["打印机"]),
  page2("mouse", "mousetouchpad", "鼠标", "Mouse", "shu biao", ["指针速度", "滚轮"]),
  page2("touchpad", "devices-touchpad", "触摸板", "Touchpad", "chu mo ban"),
  page2("typing", "typing", "输入", "Typing", "shu ru", ["键盘", "输入法"]),
  page2("network", "network-status", "网络和 Internet", "Network & internet", "wang luo", ["网络"]),
  page2("wifi", "network-wifi", "WLAN", "Wi-Fi", "", ["WiFi", "无线网络", "无线局域网"]),
  page2("ethernet", "network-ethernet", "以太网", "Ethernet", "yi tai wang"),
  page2("vpn", "network-vpn", "VPN", "VPN", ""),
  page2("proxy", "network-proxy", "代理", "Proxy", "dai li", [], true),
  page2("airplane", "network-airplanemode", "飞行模式", "Airplane mode", "fei xing mo shi"),
  page2("hotspot", "network-mobilehotspot", "移动热点", "Mobile hotspot", "yi dong re dian"),
  page2("personalization", "personalization", "个性化", "Personalization", "ge xing hua"),
  page2("background", "personalization-background", "背景", "Background", "bei jing", ["壁纸", "桌面背景", "墙纸"]),
  page2("colors", "colors", "颜色", "Colors", "yan se", ["浅色模式", "主题色", "强调色"]),
  page2("lock-screen", "lockscreen", "锁屏界面", "Lock screen", "suo ping jie mian", ["锁屏"]),
  page2("themes", "themes", "主题", "Themes", "zhu ti"),
  page2("fonts", "fonts", "字体", "Fonts", "zi ti"),
  page2("taskbar", "taskbar", "任务栏", "Taskbar", "ren wu lan"),
  page2("start", "personalization-start", "开始菜单", "Start", "kai shi cai dan", ["开始"]),
  page2("apps", "appsfeatures", "安装的应用", "Installed apps", "an zhuang de ying yong", ["应用和功能", "卸载程序"]),
  page2("default-apps", "defaultapps", "默认应用", "Default apps", "mo ren ying yong", ["默认浏览器"]),
  page2("startup-apps", "startupapps", "启动应用", "Startup apps", "qi dong ying yong", ["开机启动", "启动项"], true),
  page2("your-info", "yourinfo", "账户信息", "Your info", "zhang hu xin xi"),
  page2("email-accounts", "emailandaccounts", "电子邮件和账户", "Email & accounts", "dian zi you jian he zhang hu"),
  page2("sign-in", "signinoptions", "登录选项", "Sign-in options", "deng lu xuan xiang", ["密码", "PIN", "指纹", "人脸"], true),
  page2("other-users", "otherusers", "其他用户", "Other users", "qi ta yong hu", ["家庭和其他用户"], true),
  page2("date-time", "dateandtime", "日期和时间", "Date & time", "ri qi he shi jian", ["时区"]),
  page2("language", "regionlanguage", "语言和区域", "Language & region", "yu yan he qu yu", ["系统语言"]),
  page2("speech", "speech", "语音", "Speech", "yu yin"),
  page2("game-bar", "gaming-gamebar", "游戏栏", "Game Bar", "you xi lan"),
  page2("accessibility", "easeofaccess", "辅助功能", "Accessibility", "fu zhu gong neng", ["轻松使用"]),
  page2("text-size", "easeofaccess-display", "文本大小", "Text size", "wen ben da xiao", ["字体大小"]),
  page2("mouse-pointer", "easeofaccess-mousepointer", "鼠标指针和触控", "Mouse pointer and touch", "shu biao zhi zhen"),
  page2("narrator", "easeofaccess-narrator", "讲述人", "Narrator", "jiang shu ren"),
  page2("magnifier", "easeofaccess-magnifier", "放大镜", "Magnifier", "fang da jing"),
  page2("privacy", "privacy", "隐私和安全性", "Privacy & security", "yin si he an quan xing", ["隐私"], true),
  page2("location", "privacy-location", "定位", "Location", "ding wei", [], true),
  page2("camera", "privacy-webcam", "摄像头", "Camera", "she xiang tou", ["相机权限"], true),
  page2("microphone", "privacy-microphone", "麦克风权限", "Microphone access", "mai ke feng quan xian", [], true),
  page2("windows-security", "windowsdefender", "Windows 安全中心", "Windows Security", "an quan zhong xin", ["杀毒", "防火墙", "Defender"], true),
  page2("windows-update", "windowsupdate", "Windows 更新", "Windows Update", "geng xin", ["系统更新"]),
  page2("backup", "backup", "Windows 备份", "Windows Backup", "bei fen"),
  page2("troubleshoot", "troubleshoot", "疑难解答", "Troubleshoot", "yi nan jie da"),
  page2("recovery", "recovery", "恢复", "Recovery", "hui fu", ["重置此电脑"], true),
  page2("activation", "activation", "激活", "Activation", "ji huo"),
  page2("developers", "developers", "开发者选项", "For developers", "kai fa zhe xuan xiang", [], true)
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
function hxWinCombined(read, write) {
  const readScript = hxPowerShellScript(read);
  const writeScript = hxPowerShellScript(write);
  if (readScript === null || writeScript === null)
    return null;
  return hxPowerShell([
    `$hxBefore = & { ${readScript} };`,
    `& { ${writeScript} } | Out-Null;`,
    `$hxAfter = & { ${readScript} };`,
    `[string]$hxBefore + [char]10 + '${HX_COMBINED_SEPARATOR}' + [char]10 + [string]$hxAfter`
  ].join(" "), write.env);
}
function hxPowerShellScript(command) {
  if (command.command !== HX_POWERSHELL)
    return null;
  const script = command.args[command.args.length - 1];
  return script?.startsWith(PREAMBLE) ? script.slice(PREAMBLE.length) : null;
}
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
function hxExplorerPath(env = process.env) {
  const root = env.SystemRoot || env.windir || "C:\\Windows";
  return `${root.replace(/[\\/]+$/u, "")}\\explorer.exe`;
}
function hxWinOpen(target) {
  return { command: hxExplorerPath(), args: [target] };
}
function hxWinOpened(result) {
  return !result.missing && !result.timedOut && (result.code === 0 || result.code === 1);
}
function hxWinStart(target) {
  return hxPowerShell("$hxStep = 'start'; Start-Process -FilePath $env:HX_TARGET -ErrorAction Stop", {
    HX_TARGET: target
  });
}

// src/backend/hx-computer/combine.ts
function hxCombinedChange(platform, seed, value) {
  const write = seed.write(value);
  return platform === "mac" ? hxMacCombined(seed.read, write) : hxWinCombined(seed.read, write);
}
function hxCombinedValues(seed, stdout) {
  const parts = stdout.split(new RegExp(`^${HX_COMBINED_SEPARATOR}$`, "mu"));
  if (parts.length !== 2)
    return null;
  const before = seed.parse(parts[0] ?? "");
  const after = seed.parse(parts[1] ?? "");
  return before === null || after === null ? null : { before, after };
}

// src/backend/hx-computer/runner.ts
import { execFile } from "node:child_process";
var DEFAULT_TIMEOUT_MS = 15000;
var MAX_OUTPUT_BYTES = 8 * 1024 * 1024;
function hxRunOk(result) {
  return result.code === 0 && !result.timedOut && !result.missing;
}
function hxRunFailure(command, result) {
  if (result.missing)
    return `${command} is not on this computer`;
  if (result.timedOut)
    return `${command} did not answer in time`;
  const text = (result.stderr.trim() || result.stdout.trim()).split(`
`)[0] ?? "";
  return `${command} ended with code ${result.code ?? "none"}${text ? `: ${text.slice(0, 300)}` : ""}`;
}
var hxRun = (command, args, options = {}) => new Promise((resolve) => {
  execFile(command, [...args], {
    timeout: options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    maxBuffer: MAX_OUTPUT_BYTES,
    windowsHide: true,
    encoding: "utf8",
    env: options.env ? { ...process.env, ...options.env } : process.env
  }, (error, stdout, stderr) => {
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
});

// src/backend/hx-computer/search.ts
var EXACT = 100;
var STARTS = 80;
var CONTAINS = 60;
var MENTIONED = 45;
var WORDS = 40;
var SURE_LEAD = 10;
var MIN_MENTION_LATIN = 4;
var MIN_MENTION_OTHER = 2;
function hxNormalize(text) {
  return text.normalize("NFKC").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
}
function words(text) {
  return text.normalize("NFKC").toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((word) => word.length > 0);
}
var GENERIC_NAMES = new Set([
  "设置",
  "系统设置",
  "偏好设置",
  "系统偏好设置",
  "settings",
  "setting",
  "systemsettings",
  "systempreferences",
  "preferences"
]);
var GENERIC_PARTS = ["系统偏好设置", "系统设置", "偏好设置", "设置"];
var FILLER_PARTS = [
  "请帮我",
  "帮我",
  "帮忙",
  "麻烦",
  "给我",
  "打开",
  "开启",
  "关闭",
  "关掉",
  "启动",
  "运行",
  "进入",
  "一下",
  "请",
  "把",
  "的"
];
var GENERIC_WORDS = new Set(["settings", "setting", "preferences", "preference"]);
var FILLER_WORDS = new Set([
  "please",
  "open",
  "launch",
  "run",
  "show",
  "go",
  "to",
  "the",
  "my",
  "turn",
  "on",
  "off",
  "set",
  "change",
  "enable",
  "disable"
]);
var FILLER_PENALTY = 2;
var GENERIC_PENALTY = 5;
var MIN_CORE = 2;
function mentionable(name) {
  return name.length >= (/^[\da-z]+$/u.test(name) ? MIN_MENTION_LATIN : MIN_MENTION_OTHER);
}
function scoreName(query, queryWords, name) {
  const candidate = hxNormalize(name);
  if (!candidate)
    return 0;
  if (candidate === query)
    return EXACT;
  if (candidate.startsWith(query))
    return STARTS + Math.min(10, 10 * query.length / candidate.length);
  if (candidate.includes(query))
    return CONTAINS + Math.min(10, 10 * query.length / candidate.length);
  if (mentionable(candidate) && !GENERIC_NAMES.has(candidate) && query.includes(candidate)) {
    return MENTIONED + Math.min(14, candidate.length * 2);
  }
  if (queryWords.length > 1 && queryWords.every((word) => candidate.includes(word)))
    return WORDS;
  return 0;
}
function core(text, generic) {
  const kept = [];
  for (const word of words(text)) {
    if (/^[\da-z]+$/u.test(word)) {
      if (FILLER_WORDS.has(word) || generic && GENERIC_WORDS.has(word))
        continue;
      kept.push(word);
      continue;
    }
    let rest = word;
    for (const part of generic ? [...GENERIC_PARTS, ...FILLER_PARTS] : FILLER_PARTS)
      rest = rest.split(part).join("");
    if (rest)
      kept.push(rest);
  }
  return kept;
}
function variants(text) {
  const list = [{ query: hxNormalize(text), words: words(text), penalty: 0 }];
  for (const [generic, penalty] of [
    [false, FILLER_PENALTY],
    [true, GENERIC_PENALTY]
  ]) {
    const kept = core(text, generic);
    const query = kept.join("");
    if (query.length >= MIN_CORE && !list.some((variant) => variant.query === query)) {
      list.push({ query, words: kept, penalty });
    }
  }
  return list;
}
function hxSearch(entries, queryText, options = {}) {
  if (!hxNormalize(queryText))
    return [];
  const forms = variants(queryText);
  const hits = [];
  for (const entry of entries) {
    if (options.kinds && !options.kinds.includes(entry.kind))
      continue;
    let score = 0;
    for (const name of [entry.title, ...entry.names]) {
      for (const form of forms) {
        const found = scoreName(form.query, form.words, name);
        if (found > 0)
          score = Math.max(score, found - form.penalty);
      }
    }
    if (score > 0)
      hits.push({ entry, score });
  }
  hits.sort((left, right) => right.score - left.score || left.entry.title.localeCompare(right.entry.title));
  return hits.slice(0, options.limit ?? 8);
}
function hxSureHit(hits) {
  const [first, second] = hits;
  if (!first || first.score < MENTIONED)
    return null;
  if (second && first.score - second.score < SURE_LEAD)
    return null;
  return first.entry;
}
function hxPinyinNames(spaced) {
  const syllables = spaced.split(/\s+/u).filter((part) => part.length > 0);
  if (syllables.length === 0)
    return [];
  const full = syllables.join("");
  const initials = syllables.map((part) => part[0]).join("");
  return initials.length >= 2 && initials !== full ? [full, initials] : [full];
}

// src/backend/hx-computer/actions.ts
var UNSUPPORTED = {
  status: "unsupported",
  reason: "This works on macOS and Windows. On this system use the other Computer Use tools."
};
var RUNS_WHEN_OPENED = new Set([
  ".action",
  ".app",
  ".appinstaller",
  ".application",
  ".appref-ms",
  ".appx",
  ".appxbundle",
  ".bat",
  ".chm",
  ".cmd",
  ".com",
  ".command",
  ".cpl",
  ".diagcab",
  ".exe",
  ".fileloc",
  ".gadget",
  ".hta",
  ".inetloc",
  ".jar",
  ".jnlp",
  ".js",
  ".jse",
  ".lnk",
  ".mpkg",
  ".msc",
  ".msi",
  ".msix",
  ".msixbundle",
  ".msp",
  ".pif",
  ".pkg",
  ".prefpane",
  ".ps1",
  ".py",
  ".pyw",
  ".reg",
  ".scf",
  ".scpt",
  ".scptd",
  ".scr",
  ".sct",
  ".settingcontent-ms",
  ".sh",
  ".terminal",
  ".tool",
  ".url",
  ".vb",
  ".vbe",
  ".vbs",
  ".workflow",
  ".ws",
  ".wsc",
  ".wsf",
  ".wsh",
  ".xll"
]);
var READ_BACK_WAITS_MS = [400, 1200];
var OPEN_TIMEOUT_MS = 20000;
var WINDOWS_COMMAND_TIMEOUT_MS = 90000;
var RESCAN_MIN_MS = 20000;
var MAX_URL = 2000;
var SWITCH_ON = new Set(["on", "true", "1", "yes", "enable", "enabled", "开", "打开", "开启", "启用", "是"]);
var SWITCH_OFF = new Set(["off", "false", "0", "no", "disable", "disabled", "关", "关闭", "停用", "否"]);
var CHOICE_WORDS = {
  左: "left",
  左边: "left",
  左侧: "left",
  下: "bottom",
  底部: "bottom",
  下方: "bottom",
  右: "right",
  右边: "right",
  右侧: "right",
  神奇效果: "genie",
  缩放效果: "scale",
  缩放: "scale"
};
var NOT_ALLOWED = /-1743|not authori[sz]ed to send apple events/iu;
var NEEDS_AUTOMATION = "macOS has not allowed HXBot to control System Events. The user allows it in System Settings › Privacy & Security › Automation; then try again.";
function hxBrief(entry) {
  return {
    id: entry.id,
    kind: entry.kind,
    title: entry.title,
    alsoCalled: entry.names.filter((name) => name !== entry.title).slice(0, 3),
    ...entry.values ? { values: entry.values } : {},
    ...entry.kind === "setting" ? { direct: entry.direct === true } : {},
    ...entry.kind === "page" && entry.risk === 3 ? { security: true } : {}
  };
}
function hxExpected(values) {
  if (values.type === "switch")
    return "on or off";
  if (values.type === "number")
    return `a whole number from ${values.min} to ${values.max}`;
  if (values.type === "choice")
    return `one of: ${values.options.join(", ")}`;
  return "the full path of a file";
}
function hxNormalizeValue(values, raw) {
  const text = raw.trim().toLowerCase();
  if (values.type === "switch") {
    if (SWITCH_ON.has(text))
      return "on";
    return SWITCH_OFF.has(text) ? "off" : null;
  }
  if (values.type === "number") {
    const match = /^(\d{1,4})\s*%?$/u.exec(text);
    if (!match?.[1])
      return null;
    const value = Number(match[1]);
    return value >= values.min && value <= values.max ? String(value) : null;
  }
  if (values.type === "choice") {
    const option = CHOICE_WORDS[text] ?? text;
    return values.options.includes(option) ? option : null;
  }
  return isAbsolute(raw.trim()) ? raw.trim() : null;
}
function sameValue(seed, left, right) {
  if (seed.values.type === "number")
    return Math.abs(Number(left) - Number(right)) <= hxSeedTolerance(seed);
  return left === right;
}
var pause = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

class HxComputerActions {
  #catalog;
  #run;
  #wait;
  constructor(catalog, run, wait = pause) {
    this.#catalog = catalog;
    this.#run = run;
    this.#wait = wait;
  }
  #command(command, timeoutMs) {
    const limit = timeoutMs ?? (this.#catalog.platform === "windows" ? WINDOWS_COMMAND_TIMEOUT_MS : 20000);
    return this.#run(command.command, command.args, {
      timeoutMs: limit,
      ...command.env ? { env: command.env } : {}
    });
  }
  async#start(target) {
    if (this.#catalog.platform !== "windows")
      return this.#run("/usr/bin/open", [target], { timeoutMs: 20000 });
    const shell = await this.#command(hxWinOpen(target), OPEN_TIMEOUT_MS);
    if (hxWinOpened(shell))
      return { ...shell, code: 0 };
    if (!shell.missing)
      return shell;
    return this.#command(hxWinStart(target), WINDOWS_COMMAND_TIMEOUT_MS);
  }
  async find(input) {
    if (this.#catalog.platform === null)
      return UNSUPPORTED;
    const options = { ...input.kinds ? { kinds: input.kinds } : {}, limit: input.limit ?? 8 };
    let hits = hxSearch(await this.#catalog.entries(), input.query, options);
    if (hits.length === 0 && (!input.kinds || input.kinds.includes("app"))) {
      await this.#catalog.refresh(RESCAN_MIN_MS);
      hits = hxSearch(await this.#catalog.entries(), input.query, options);
    }
    return hits.length === 0 ? { status: "not-found" } : { status: "found", results: hits.map((hit) => hxBrief(hit.entry)) };
  }
  async#resolve(input, kinds) {
    if (input.id) {
      const entry = await this.#catalog.entry(input.id);
      return entry && kinds.includes(entry.kind) ? { entry } : null;
    }
    const found = await this.find({ query: input.query ?? "", kinds, limit: 5 });
    if (found.status !== "found")
      return null;
    const entries = await this.#catalog.entries();
    const sure = hxSureHit(hxSearch(entries, input.query ?? "", { kinds, limit: 5 }));
    return sure ? { entry: sure } : { candidates: found.results };
  }
  async#openEntry(entry) {
    const target = entry.kind === "setting" ? (await this.#catalog.entry(entry.page ?? ""))?.target : entry.target;
    if (!target)
      return { status: "failed", reason: "This entry has nothing to open." };
    const result = await this.#start(target);
    if (hxRunOk(result))
      return { status: "opened", what: hxBrief(entry) };
    return { status: "failed", reason: hxRunFailure("Opening it", result) };
  }
  async open(input) {
    if (this.#catalog.platform === null)
      return UNSUPPORTED;
    const given = [input.id, input.query, input.path, input.url].filter((value) => value !== undefined && value !== "");
    if (given.length !== 1)
      return { status: "invalid", reason: "Give exactly one of id, query, path and url." };
    if (input.url)
      return this.#openUrl(input.url);
    if (input.path)
      return this.#openPath(input.path);
    const resolved = await this.#resolve(input, ["app", "page", "setting"]);
    if (!resolved) {
      return {
        status: "not-found",
        reason: "Nothing on this computer has that name. Try computer_find with other words."
      };
    }
    return "entry" in resolved ? this.#openEntry(resolved.entry) : { status: "candidates", candidates: resolved.candidates };
  }
  async#openUrl(url) {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      return { status: "invalid", reason: "That is not a web address." };
    }
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:" || url.length > MAX_URL) {
      return { status: "refused", reason: "Only http and https addresses are opened this way." };
    }
    const result = await this.#start(parsed.href);
    return hxRunOk(result) ? { status: "opened", what: { kind: "website", target: parsed.href } } : { status: "failed", reason: hxRunFailure("Opening it", result) };
  }
  async#openPath(path) {
    if (!isAbsolute(path))
      return { status: "invalid", reason: "Give the full path." };
    let folder;
    let runnable;
    try {
      const info = await stat(path);
      folder = info.isDirectory();
      runnable = this.#catalog.platform === "mac" && !folder && (info.mode & 73) !== 0;
    } catch {
      return { status: "not-found", reason: "There is no file or folder at that path." };
    }
    const kind = extname(path).toLowerCase();
    if (RUNS_WHEN_OPENED.has(kind) || kind === "" && runnable) {
      return {
        status: "refused",
        reason: "Opening this file would run it. Open an app by its name or id; run a program with your command tool."
      };
    }
    const result = await this.#start(path);
    return hxRunOk(result) ? { status: "opened", what: { kind: "file", target: path } } : { status: "failed", reason: hxRunFailure("Opening it", result) };
  }
  async#openPageOf(entry, reason) {
    const page = entry.kind === "page" ? entry : await this.#catalog.entry(entry.page ?? "");
    if (!page?.target)
      return { status: "failed", reason };
    const opened = hxRunOk(await this.#start(page.target));
    return { status: "page", page: hxBrief(page), opened, reason };
  }
  async#read(seed) {
    const result = await this.#command(seed.read);
    if (NOT_ALLOWED.test(result.stderr)) {
      return { problem: "permission", reason: NEEDS_AUTOMATION };
    }
    if (!hxRunOk(result))
      return { problem: "unreadable", reason: hxRunFailure("Reading the setting", result) };
    const value = seed.parse(result.stdout);
    return value === null ? { problem: "unreadable", reason: "The system gave no value for this setting right now." } : { value };
  }
  async#combined(seed, entry, brief, wanted) {
    const platform = this.#catalog.platform;
    const command = platform === null || seed.values.type === "file" ? null : hxCombinedChange(platform, seed, wanted);
    if (!command)
      return null;
    const result = await this.#command(command);
    if (NOT_ALLOWED.test(result.stderr))
      return { status: "needs-permission", reason: NEEDS_AUTOMATION };
    if (!hxRunOk(result))
      return null;
    const values = hxCombinedValues(seed, result.stdout);
    if (!values)
      return null;
    if (sameValue(seed, values.before, wanted))
      return { status: "unchanged", setting: brief, value: values.before };
    if (sameValue(seed, values.after, wanted)) {
      return { status: "changed", setting: brief, previous: values.before, value: values.after };
    }
    for (const waitMs of READ_BACK_WAITS_MS) {
      await this.#wait(waitMs);
      const after = await this.#read(seed);
      if ("value" in after && sameValue(seed, after.value, wanted)) {
        return { status: "changed", setting: brief, previous: values.before, value: after.value };
      }
    }
    await this.#command(seed.write(values.before));
    await this.#catalog.disable(entry.id);
    return this.#openPageOf(entry, "The change did not take effect, so the earlier value was put back. The settings page is open.");
  }
  async set(input) {
    if (this.#catalog.platform === null)
      return UNSUPPORTED;
    if ((input.id ? 1 : 0) + (input.query ? 1 : 0) !== 1) {
      return { status: "invalid", reason: "Give exactly one of id and query." };
    }
    const resolved = await this.#resolve(input, ["setting", "page"]);
    if (!resolved) {
      return {
        status: "not-found",
        reason: "No setting or settings page has that name. Try computer_find with other words."
      };
    }
    if ("candidates" in resolved)
      return { status: "candidates", candidates: resolved.candidates };
    const entry = resolved.entry;
    if (entry.kind === "page" && entry.risk !== 3 && !input.id) {
      const direct = (await this.#catalog.entries()).filter((candidate) => candidate.kind === "setting" && candidate.page === entry.id && candidate.direct === true);
      if (direct.length > 0)
        return { status: "candidates", candidates: [...direct, entry].map(hxBrief) };
    }
    if (entry.kind === "page") {
      return this.#openPageOf(entry, entry.risk === 3 ? "This is a security page. It is open; the user makes the change there." : "HXBot has no direct command for what is on this page. It is open: make the change there with the other Computer Use tools.");
    }
    const seed = this.#catalog.settingSeed(entry.id);
    if (!seed || !entry.values)
      return { status: "failed", reason: "This setting is not known on this system." };
    const brief = hxBrief(entry);
    const state = await this.#catalog.directState(entry.id);
    if (state === "disabled") {
      return this.#openPageOf(entry, "On this computer the direct change of this setting did not take effect before. Its page is open.");
    }
    const wanted = input.value === undefined || input.value.trim() === "" ? null : hxNormalizeValue(entry.values, input.value);
    if (input.value !== undefined && input.value.trim() !== "" && wanted === null) {
      return { status: "invalid-value", setting: brief, expected: hxExpected(entry.values) };
    }
    if (wanted !== null && state === "direct") {
      const combined = await this.#combined(seed, entry, brief, wanted);
      if (combined)
        return combined;
    }
    const before = await this.#read(seed);
    if ("problem" in before) {
      if (before.problem === "permission")
        return { status: "needs-permission", reason: before.reason };
      return this.#openPageOf(entry, `${before.reason} Its page is open.`);
    }
    if (wanted === null)
      return { status: "value", setting: brief, value: before.value };
    if (before.value === wanted)
      return { status: "unchanged", setting: brief, value: before.value };
    if (state === "unchecked") {
      return this.#openPageOf(entry, "HXBot changes a setting directly only after its self-test passed for it on this computer, and it has not yet. The settings page is open: make the change there with the other Computer Use tools. Tell the user once that Settings › Computer Use › Run the self-test checks this computer (it changes no value); after it, such changes are immediate.");
    }
    const written = await this.#command(seed.write(wanted));
    if (NOT_ALLOWED.test(written.stderr))
      return { status: "needs-permission", reason: NEEDS_AUTOMATION };
    if (!hxRunOk(written))
      return { status: "failed", reason: hxRunFailure("Changing the setting", written) };
    for (const waitMs of [0, ...READ_BACK_WAITS_MS]) {
      if (waitMs > 0)
        await this.#wait(waitMs);
      const after = await this.#read(seed);
      if ("value" in after && sameValue(seed, after.value, wanted)) {
        return { status: "changed", setting: brief, previous: before.value, value: after.value };
      }
    }
    await this.#command(seed.write(before.value));
    await this.#catalog.disable(entry.id);
    return this.#openPageOf(entry, "The change did not take effect, so the earlier value was put back. The settings page is open.");
  }
}

// src/backend/hx-computer/catalog.ts
import { createHash } from "node:crypto";
import { mkdir, readFile as readFile2, rename, writeFile } from "node:fs/promises";
import { join as join2 } from "node:path";

// src/backend/hx-computer/apps.ts
import { readdir, readFile, stat as stat2 } from "node:fs/promises";
import { basename, join } from "node:path";

// src/backend/hx-computer/pinyin-table.ts
/*! The pinyin below is data of pinyin-pro 3.29.5 (https://github.com/zh-lx/pinyin-pro):

MIT License

Copyright (c) 2022-present zh-lx

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var HX_PINYIN_TABLE = "a啊阿吖嗄锕 ai埃挨哎唉哀皑癌蔼矮艾碍爱隘捱嗳嗌嫒瑷暧砹锿霭 an鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌黯 ang肮昂盎 ao凹敖熬翱袄傲奥懊澳嚣坳艹拗嗷岙廒遨媪骜獒聱螯鏊鳌鏖 ba芭捌扒叭吧笆八疤巴拔跋靶把坝霸罢爸茇菝岜灞钯粑鲅魃 bai白柏百摆佰败拜稗捭呗掰 ban斑班搬扳般颁板版扮拌伴瓣半办绊阪坂钣瘢癍舨 bang邦帮梆榜膀绑棒磅蚌镑傍谤蒡浜 bao苞胞包褒剥薄雹保堡饱宝抱报暴豹鲍爆勹葆孢煲鸨褓龅 bei杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶蓓悖碚鹎褙鐾鞴 ben奔苯本笨畚坌贲锛 beng崩绷甭泵蹦迸嘣甏 bi逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必壁臂避陛匕俾荜荸萆薜吡哔狴庳愎滗濞弼妣婢嬖璧畀铋秕裨筚箅篦舭襞跸髀 bian鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥窆褊蝙笾鳊 biao标彪膘表婊飑飙飚镖镳瘭裱鳔髟 bie鳖憋别瘪蹩 bin彬斌濒滨宾摈傧豳缤玢槟殡膑镔髌鬓 bing兵冰柄丙秉饼炳病并禀冫邴摒 bo玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳簿亳啵饽檗擘礴钹鹁簸趵跛踣 bu捕卜哺补埠不布步部怖卟逋瓿晡钚钸醭 ca擦礤 cai猜裁材才财睬踩采彩菜蔡 can餐参蚕残惭惨灿骖璨粲黪 cang苍舱仓沧藏 cao操糙槽曹草嘈漕螬艚 ce厕策侧册测恻 cen岑涔 ceng层蹭曾噌 cha插叉茬茶查碴搽察岔差诧刹嚓猹馇汊姹杈槎檫锸镲衩 chai拆柴豺侪钗瘥虿 chan搀掺蝉馋谗缠铲产阐颤冁谄蒇廛忏潺澶孱羼婵骣觇禅蟾躔 chang昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳 chao超抄钞朝嘲潮巢吵炒怊晁焯耖 che车扯撤掣彻澈坼屮砗 chen郴臣辰尘晨忱沉陈趁衬伧谌谶抻嗔宸琛榇碜龀 cheng撑称城橙成呈乘程惩澄诚承逞骋秤丞埕枨柽樘塍瞠铖裎蛏酲 chi吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺郗墀茌叱哧啻嗤彳饬媸敕眵鸱瘛褫蚩螭笞篪豉踟魑 chong充冲虫崇宠茺忡憧铳舂艟 chou抽酬畴踌稠愁筹仇绸瞅丑臭俦帱惆瘳雠 chu初出橱厨躇锄雏滁除楚础储矗搐触处畜亍刍怵憷绌杵楮樗褚蜍蹰黜 chuai揣搋膪踹 chuan川穿椽传船喘串舛遄巛氚钏舡 chuang疮窗床闯创怆 chui吹炊捶锤垂陲棰槌 chun春椿醇唇淳纯蠢莼鹑蝽 chuo戳绰啜辶辍踔龊 ci疵茨磁雌辞慈瓷词此刺赐次呲祠鹚糍 cong聪葱囱匆从丛苁淙骢琮璁枞 cou凑楱辏腠 cu粗醋簇促蔟徂猝殂酢蹙蹴 cuan蹿篡窜汆撺爨镩 cui摧崔催脆瘁粹淬翠萃啐悴璀榱毳 cun村存寸忖皴 cuo磋撮搓措挫错厝嵯脞锉矬痤鹾蹉 da搭达答瘩打大耷哒嗒怛妲褡笪靼鞑 dai呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨骀绐玳黛 dan耽担丹单郸掸胆旦氮但惮淡诞蛋儋萏啖澹殚赕眈疸瘅聃箪 dang当挡党荡档谠凼菪宕砀铛裆 dao刀捣蹈倒岛祷导到稻悼道盗刂叨忉氘纛 de德得的锝 deng蹬灯登等瞪凳邓噔嶝戥磴镫簦 di堤低滴迪敌笛狄涤嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻荻嘀娣柢棣觌砥碲睇镝羝骶 dia嗲 dian颠掂滇碘点典靛垫电佃甸店惦奠淀殿坫巅玷钿癜癫簟踮 diao碉叼雕凋刁掉吊钓铞貂鲷 die跌爹碟蝶迭谍叠垤堞揲喋牒瓞耋蹀鲽 ding丁盯叮钉顶鼎锭定订仃啶玎腚碇疔耵酊 diu丢铥 dong东冬董懂动栋侗恫冻洞垌咚岽峒氡胨胴硐鸫 dou兜抖斗陡豆逗痘都蔸窦蚪篼 du督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟牍蠹笃髑黩 duan端短锻段断缎椴煅簖 dui堆兑队对怼憝碓 dun墩吨蹲敦顿钝盾遁沌炖砘礅盹镦趸 duo掇哆多夺垛躲朵跺舵剁惰堕咄哚沲缍铎裰踱 e蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩苊莪萼呃愕阏屙婀轭腭锇锷鹗颚鳄 ei诶 en恩蒽摁 er而儿耳尔饵洱二贰佴迩珥铒鸸鲕 fa发罚筏伐乏阀法珐垡砝 fan藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蕃蘩幡梵燔畈蹯 fang坊芳方肪房防妨仿访纺放匚邡枋钫舫鲂 fei菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绯榧腓斐扉镄痱蜚篚翡霏鲱 fen芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼鲼鼢 feng丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑唪沣砜 fo佛 fou否缶 fu夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫阝郛芙苻茯菔拊呋呒幞怫滏艴孚驸绂绋桴赙祓砩黻黼罘稃馥蚨蜉蝠蝮麸趺跗鲋鳆 ga噶嘎尬尕尜旮钆 gai该改概钙盖溉丐陔垓戤赅胲 gan干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐 gang冈刚钢缸肛纲岗港杠戆罡筻 gao篙皋高膏羔糕搞稿告睾诰郜藁缟槔槁杲锆 ge哥歌搁戈鸽胳疙割革葛格阁隔铬个各咯鬲哿圪塥嗝搿膈硌镉袼虼舸骼 gei给 gen根跟亘茛哏艮 geng耕更庚羹埂耿梗哽赓绠鲠 gong工攻功恭龚供躬公宫弓巩汞拱贡共廾珙肱蚣觥 gou钩勾沟苟狗垢构购够佝诟岣遘媾缑枸觏彀笱篝鞲 gu辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰崮汩梏轱牯牿臌毂瞽罟钴锢鸪痼蛄酤觚鲴 gua刮瓜剐寡挂褂卦诖呱栝胍鸹 guai乖拐怪 guan棺关官冠观管馆罐惯灌贯倌掼涫盥鹳鳏 guang光广逛咣犷桄胱 gui瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧晷皈簋鲑 gun辊滚棍丨衮绲磙鲧 guo锅郭国果裹过馘埚掴呙帼崞猓椁虢聒蜾蝈 ha蛤哈铪 hai骸孩海氦亥害骇还咳醢 han酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖瀚晗焓顸颔蚶鼾 hang夯杭航沆绗颃 hao镐壕嚎豪毫郝好耗号浩蒿薅嗥嚆濠灏昊皓颢蚝 he呵喝荷菏核禾和何合盒阂河涸赫褐鹤贺诃劾壑嗬阖纥曷盍颌翮 hei嘿黑嗨 hen痕很狠恨 heng哼亨横衡恒蘅珩桁 hong轰哄烘虹鸿洪宏弘红黉訇讧荭蕻薨闳泓 hou喉侯猴吼厚候后堠後逅瘊篌糇鲎骺 hu呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜瓠鹄鹕鹱虍笏醐斛鹘 hua花哗华猾滑画划化话骅桦砉铧 huai槐徊怀淮坏踝 huan欢环桓缓换患唤痪豢焕涣宦幻郇奂萑擐圜獾洹浣漶寰逭缳锾鲩鬟 huang荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇 hui灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙咴喙隳洄浍彗缋珲晖恚虺蟪麾 hun荤昏婚魂浑混诨馄阍溷 huo豁活伙火获或惑霍货祸劐藿攉嚯夥灬钬锪镬耠蠖 ji击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪亟乩剞佶偈墼芨芰蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠虮笈笄暨跻跽霁鲚鲫髻麂 jia嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏葭岬浃迦珈戛胛恝铗镓痂瘕袷蛱笳袈跏 jian歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧楗戋戬牮犍毽腱睑锏鹣裥笕翦趼踺鲣鞯 jiang僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇 jiao蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖佼僬艽茭挢噍徼姣敫皎鹪蛟醮跤鲛 jie揭接皆秸街阶截劫节杰捷睫竭洁结解姐戒藉芥界借介疥诫届讦诘卩拮喈嗟婕孑桀碣疖颉蚧羯鲒骱 jin巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽劲卺荩堇噤馑廑妗缙瑾槿赆觐钅衿矜 jing荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌箐 jiong炯窘冂迥炅扃 jiu揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鸠鹫赳鬏 ju桔鞠拘狙疽居驹菊局矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫 juan捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌 jue撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘噱崛獗孓珏桷橛爝镢蹶觖鳜 jun均菌钧军君峻俊竣浚郡骏捃皲隽麇 ka喀咖卡佧咔胩 kai开揩楷凯慨剀垲蒈忾恺铠锎锴 kan槛刊堪勘坎砍看侃凵莰阚戡龛瞰 kang康慷糠扛抗亢炕伉闶钪 kao考拷烤靠尻栲犒铐 ke坷苛柯棵磕颗科壳可渴克刻客课嗑岢恪溘骒缂珂轲氪瞌钶锞稞疴窠颏蚵蝌髁 ken肯啃垦恳裉 keng坑吭铿 kong空恐孔控倥崆箜 kou抠口扣寇芤蔻叩眍筘 ku枯哭窟苦酷库裤刳堀喾绔骷 kua夸垮挎跨胯侉 kuai块筷侩快蒯郐哙狯脍 kuan宽款髋 kuang匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶 kui亏盔岿窥葵奎魁傀馈愧溃馗匮夔蒉揆喹喟悝愦逵暌睽聩蝰篑跬 kun坤昆捆困悃阃琨锟醌鲲髡 kuo括扩廓阔蛞 la垃拉喇蜡腊辣啦剌邋旯砬瘌 lai莱来赖崃徕涞濑赉睐铼癞籁 lan蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥岚漤榄斓罱镧褴 lang琅榔狼廊郎朗浪莨蒗啷阆锒稂螂 lao捞劳牢老佬姥酪烙涝唠崂栳铑铹痨耢醪 le勒乐仂叻嘞泐鳓 lei雷镭蕾磊累儡垒擂肋类泪羸诔嫘缧檑耒酹 leng棱楞冷塄愣 li厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜呖唳喱猁溧澧逦娌嫠骊缡枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴雳鲡鳢黧 lia俩 lian联莲连镰廉怜涟帘敛脸链恋炼练蔹奁潋濂琏楝殓臁裢裣蠊鲢 liang粮凉梁粱良两辆量晾亮谅墚椋踉靓魉 liao撩聊僚疗燎寥辽潦了撂镣廖料蓼尥嘹獠寮缭钌鹩 lie列裂烈劣猎冽埒捩咧洌趔躐鬣 lin琳林磷霖临邻鳞淋凛赁吝拎蔺啉嶙廪懔遴檩辚膦瞵粼躏麟 ling玲菱零龄铃伶羚凌灵陵岭领另令酃苓呤囹泠绫柃棂瓴聆蛉翎鲮 liu溜琉榴硫馏留刘瘤流柳六浏遛骝绺旒熘锍镏鹨鎏 long龙聋咙笼窿隆垄拢陇垅茏泷珑栊胧砻癃 lou楼娄搂篓漏陋蒌喽嵝镂瘘耧蝼髅 lu芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆撸噜泸渌漉逯璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈 luan峦挛孪滦卵乱脔娈栾鸾銮 lun抡轮伦仑沦纶论囵 luo萝螺罗逻锣箩骡裸落洛骆络倮蠃荦摞猡泺漯珞椤脶镙瘰跞雒 lv驴吕铝侣旅履屡缕虑氯律率滤绿偻捋闾榈膂稆褛 lve掠略锊 ma妈麻玛码蚂马骂嘛吗犸杩蟆 mai埋买麦卖迈脉劢荬唛霾 man瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔 mang芒茫盲氓忙莽邙漭硭蟒 mao猫茅锚毛矛铆卯茂冒帽貌贸袤茆峁泖瑁昴牦耄旄懋瞀蝥蟊髦 me么 mei玫枚梅酶霉煤没眉媒镁每美昧寐妹媚莓嵋猸浼湄楣镅鹛袂魅 men门闷们扪焖懑钔 meng萌蒙檬盟锰猛梦孟勐甍瞢懵朦礞虻蜢蠓艋艨 mi眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼咪嘧猕汨宓弭脒祢敉糸縻麋 mian棉眠绵冕免勉娩缅面沔渑湎宀腼眄黾 miao苗描瞄藐秒渺庙妙喵邈缈杪淼眇鹋 mie蔑灭咩蠛篾 min民抿皿敏悯闽苠岷闵泯缗玟珉愍鳘 ming明螟鸣铭名命冥茗溟暝瞑酩 miu谬缪 mo貉摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫嬷殁镆秣瘼耱貊貘麽 mou谋某侔哞眸蛑鍪 mu牟拇牡亩姆母墓暮幕募慕木目睦牧穆仫坶苜沐毪钼 na拿哪呐钠那娜纳捺肭镎衲 nai氖乃奶耐奈鼐艿萘柰 nan南男难喃囡楠腩蝻赧 nang囊攮囔馕曩 nao挠脑恼闹淖孬垴呶猱瑙硇铙蛲 ne呢讷疒 nei馁内 nen嫩恁 neng能 ng嗯 ni妮霓倪泥尼拟你匿腻逆溺伲坭猊怩昵旎睨铌鲵 nian蔫拈年碾撵捻念粘辗廿埝辇黏鲇鲶 niang娘酿 niao鸟尿茑嬲脲袅 nie捏聂孽啮镊镍涅乜陧蘖嗫颞臬蹑 nin您 ning柠狞凝宁拧泞佞咛甯聍 niu牛扭钮纽狃忸妞 nong脓浓农弄侬哝 nou耨 nu奴努怒弩胬孥驽 nuan暖 nuo挪懦糯诺傩搦喏锘 nv女恧钕衄 nve虐疟 o哦噢 ou欧鸥殴藕呕偶沤讴怄瓯耦 pa耙啪趴爬帕怕琶葩杷筢 pai拍排牌徘湃派俳蒎哌 pan攀潘盘磐盼畔判叛丬爿泮袢襻蟠蹒 pang乓庞旁耪胖彷滂逄螃 pao抛咆刨炮袍跑泡匏狍庖脬疱 pei呸胚培裴赔陪配佩沛辔帔旆锫醅霈 pen喷盆湓 peng砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰堋嘭怦蟛 pi辟坯砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕仳陴邳郫圮埤鼙芘擗噼庀淠媲纰枇甓睥罴铍癖疋蚍蜱貔 pian篇偏片骗谝骈犏胼翩蹁 piao飘漂瓢票剽莩嘌嫖骠缥殍瞟螵 pie撇瞥丿苤氕 pin拼频贫品聘拚姘嫔榀牝颦 ping乒坪苹萍平凭瓶评屏俜娉枰鲆 po坡泼颇婆破魄迫粕叵鄱珀钋钷皤笸 pou剖裒掊 pu脯扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗溥濮璞攴氆攵镤镨蹼 qi期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫丌亓圻芑芪荠萁萋葺蕲嘁屺岐汔淇骐绮琪琦杞桤槭耆欹祺憩碛颀蛴蜞綦蹊鳍麒 qia掐恰洽葜髂 qian牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉倩佥阡芊芡茜荨掮岍悭骞搴褰缱椠肷愆钤虔箝 qiang枪呛腔羌墙蔷强抢戕嫱樯戗炝锖锵镪襁蜣羟跄 qiao橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞峤愀憔缲樵硗跷鞒 qie切茄且怯窃惬慊妾挈锲箧 qin钦侵亲秦琴勤芹擒禽寝沁芩揿吣嗪噙檎锓覃螓衾 qing青轻氢倾卿清擎晴氰情顷请庆苘圊檠磬蜻罄綮謦鲭黥 qiong琼穷邛茕穹蛩筇跫銎 qiu秋丘邱球求囚酋泅俅巯犰湫逑遒楸赇虬蚯裘糗鳅鼽 qu趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍朐祛磲鸲癯蛐蠼麴瞿黢 quan圈颧权醛泉全痊拳犬券劝诠荃犭悛绻辁畎铨蜷筌鬈 que缺炔瘸却鹊榷确雀阕阙悫 qun裙群逡 ran然燃冉染苒蚺髯 rang瓤壤攘嚷让禳穰 rao饶扰绕荛娆桡 re惹热 ren壬仁人忍韧任认刃妊纫亻仞荏饪轫稔衽 reng扔仍 ri日 rong戎茸蓉荣融熔溶容绒冗嵘狨榕肜蝾 rou揉柔肉糅蹂鞣 ru茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡缛铷襦颥 ruan软阮朊 rui蕊瑞锐芮蕤枘睿蚋 run闰润 ruo若弱偌箬 sa撒洒萨卅仨挲脎飒 sai腮鳃塞赛噻 san三叁伞散馓毵 sang桑嗓丧搡磉颡 sao搔骚扫嫂埽缫臊瘙鳋 se瑟色涩啬铯穑 sen森 seng僧 sha莎砂杀沙纱傻啥煞厦唼歃铩痧裟霎鲨 shai筛晒酾 shan珊苫杉山删煽衫闪陕擅赡膳善汕扇缮栅讪鄯埏芟彡潸姗嬗骟膻钐疝蟮舢跚鳝 shang墒伤商赏晌上尚裳垧绱殇熵觞 shao梢捎稍烧芍勺韶少哨邵绍劭潲杓蛸筲艄 she奢赊蛇舌舍赦摄射慑涉社设厍佘猞滠畲麝 shen砷申呻伸身深娠绅神沈审婶甚肾慎渗什诜谂莘葚哂渖椹胂矧蜃糁 sheng声生甥牲升绳省盛剩胜圣嵊晟眚笙 shi师失狮施湿诗尸虱十石拾时食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑饣轼贳炻礻铈螫舐筮豕鲥鲺 shou收手首守寿授售受瘦兽扌狩绶艏 shu蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽摅沭澍姝纾毹腧殳秫 shua刷耍唰 shuai摔衰甩帅蟀 shuan栓拴闩涮 shuang霜双爽孀 shui谁水睡税氵 shun吮瞬顺舜 shuo说硕朔烁蒴搠妁槊铄 si斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕厶咝汜泗澌姒驷纟缌祀锶鸶耜蛳笥 song松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦 sou搜艘擞嗽叟薮嗖嗾馊溲飕瞍锼螋 su苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫涑簌觫稣 suan酸蒜算狻 sui虽隋随绥髓碎岁穗遂隧祟谇荽濉邃燧眭睢 sun孙损笋荪狲飧榫隼 suo蓑梭唆缩琐索锁所唢嗦嗍娑桫睃羧 ta塌他它她塔獭挞蹋踏闼溻遢榻沓铊趿鳎 tai胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐 tan弹坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯昙忐钽锬镡 tang汤塘搪堂棠膛唐糖倘躺淌趟烫傥帑饧溏瑭铴镗耥螗螳羰醣 tao掏涛滔绦萄桃逃淘陶讨套鼗啕洮韬焘饕 te特忒忑慝铽 teng藤腾疼誊滕 ti梯剔踢锑提题蹄啼体替嚏惕涕剃屉倜悌逖绨缇鹈裼醍 tian天添填田甜恬舔腆掭忝阗殄畋 tiao调挑条迢眺跳佻苕祧窕蜩笤粜龆鲦髫 tie贴铁帖萜餮 ting厅听烃汀廷停亭庭挺艇莛葶婷梃町铤蜓霆 tong通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼 tou偷投头透亠钭骰 tu凸秃突图徒途涂屠土吐兔堍荼菟钍酴 tuan湍团抟彖疃 tui推颓腿蜕褪退煺 tun囤吞屯臀氽饨暾豚 tuo拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝柁橐砣箨酡跎鼍 wa挖哇蛙洼娃瓦袜佤娲腽 wai歪外崴 wan豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄莞菀纨绾琬脘畹蜿 wang汪王亡枉网往旺望忘妄罔尢惘辋魍 wei威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫偎诿隈隗葳薇囗帏帷嵬猥猬闱沩洧涠逶娓玮韪軎炜煨痿艉鲔 wen瘟温蚊文闻纹吻稳紊问刎阌汶璺雯 weng嗡翁瓮蓊蕹 wo挝蜗涡窝我斡卧握沃倭莴喔幄渥肟硪龌 wu巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴唔庑怃忤浯寤迕妩婺骛杌牾於焐鹉鹜痦蜈鋈鼯 xi昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜洗系隙戏细僖兮隰郄菥葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷歙熹禊禧皙穸蜥螅蟋舄舾羲粞翕醯鼷 xia瞎虾匣霞辖暇峡侠狭下夏吓呷狎遐瑕柙硖罅黠 xian铣掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼苋莶藓岘猃暹娴氙燹祆鹇痫蚬筅籼酰跣跹霰 xiang相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨 xiao萧硝霄削哮销消宵淆晓小孝校肖啸笑效哓崤潇逍骁绡枭枵筱箫魈 xie楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷獬廨渫瀣邂绁缬榭榍躞 xin薪芯锌欣辛新忻心信衅囟馨忄昕歆鑫 xing星腥猩惺兴刑型形邢行醒幸杏性姓陉荇擤悻硎 xiong兄凶胸匈汹雄熊芎 xiu休修羞朽嗅锈秀袖绣咻岫馐庥溴鸺貅髹 xu墟戌需虚嘘须徐许蓄酗叙旭序恤絮婿绪续吁诩勖圩蓿洫溆顼栩煦盱胥糈醑 xuan轩喧宣悬旋玄选癣眩绚儇谖萱揎泫渲漩璇楦暄炫煊碹铉镟痃 xue靴薛学穴雪血谑泶踅鳕 xun勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀蕈薰峋徇獯恂洵浔曛窨醺鲟 ya压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶轧伢垭揠岈迓娅琊桠氩砑睚痖 yan焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣赝剡俨偃兖讠谳阽郾鄢菸崦恹闫湮滟妍嫣琰檐晏胭腌焱罨筵酽魇餍鼹 yang殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅 yao邀腰妖瑶摇尧遥窑谣姚咬舀药要耀钥夭爻吆崾徭幺珧杳轺曜肴铫鹞窈繇鳐 ye椰噎耶爷野冶也页掖业叶曳腋夜液靥谒邺揶晔烨铘 yi一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓仡佚佾诒圯埸懿苡荑薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪轶贻旖熠眙钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟 yin茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞廴垠堙茚吲喑狺夤洇氤铟瘾蚓霪龈 ying英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔荥莺萦蓥撄嘤膺滢潆瀛瑛璎楹媵鹦瘿颍罂 yo哟唷 yong拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉喁慵邕镛甬鳙饔 you幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莠莜莸呦囿宥柚猷牖铕疣蚰蚴蝣蝤鱿黝鼬 yu迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄圄圉嵛狳饫馀庾阈鬻妪妤纡瑜昱觎腴欤煜燠肀聿钰鹆鹬瘐瘀窬窳蜮蝓竽臾舁雩龉 yuan鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院垸塬芫掾沅媛瑗橼爰眢鸢螈箢鼋 yue曰约越跃岳粤月悦阅龠哕瀹樾刖钺 yun耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽愠纭韫殒昀氲熨筠 za匝砸杂咋拶咂 zai栽哉灾宰载再在仔崽甾 zan咱攒暂赞瓒昝簪糌趱錾 zang赃脏葬奘驵臧 zao遭糟凿藻枣早澡蚤躁噪造皂灶燥唣 ze责择则泽仄赜啧帻迮昃笮箦舴 zei贼 zen怎谮 zeng增憎赠缯甑罾锃 zha扎喳渣札铡闸眨榨乍炸诈柞揸吒咤哳楂砟痄蚱齄 zhai翟摘斋宅窄债寨砦瘵 zhan瞻毡詹沾盏斩崭展蘸栈占战站湛绽谵搌旃 zhang樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑 zhao招昭找沼赵照罩兆肇召诏棹钊笊 zhe遮折哲蛰辙者锗蔗这浙着谪摺柘辄磔鹧褶蜇赭 zhen珍斟真甄砧臻贞针侦枕疹诊震振镇阵帧圳蓁浈溱缜桢榛轸赈胗朕祯畛稹鸩箴 zheng蒸挣睁征狰争怔整拯正政症郑证诤峥钲铮筝 zhi芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙徵夂忮彘咫骘栉枳栀桎轵轾贽胝膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯 zhong中盅忠钟衷终种肿重仲众冢锺螽舯踵 zhou舟周州洲诌粥轴肘帚咒皱宙昼骤荮啁妯纣绉胄碡籀酎 zhu珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻丶伫侏邾苎茱洙渚潴杼槠橥炷铢疰瘃竺箸舳翥躅麈 zhua抓爪 zhuai拽 zhuan专砖转撰赚篆啭馔颛 zhuang幢桩庄装妆撞壮状 zhui椎锥追赘坠缀惴骓缒隹 zhun谆准肫窀 zhuo捉拙卓桌琢茁酌啄灼浊倬诼擢浞涿濯禚斫镯 zi兹咨资姿滋淄孜紫籽滓子自渍字谘茈嵫姊孳缁梓辎赀恣眦锱秭耔笫粢趑觜訾龇鲻髭 zong鬃棕踪宗综总纵偬腙粽 zou邹走奏揍诹陬鄹驺鲰 zu租足卒族祖诅阻组俎菹镞 zuan钻纂攥缵躜 zui咀嘴醉最罪蕞 zun尊遵撙樽鳟 zuo昨左佐做作坐座阼唑嘬怍胙祚";
var HX_PINYIN_WORDS = {
  宝藏: "bao zang",
  便宜: "pian yi",
  成都: "cheng du",
  成长: "cheng zhang",
  重庆: "chong qing",
  传记: "zhuan ji",
  传输或还原: "chuan shu huo huan yuan",
  的确: "di que",
  调查: "diao cha",
  调度: "diao du",
  调度中心: "diao du zhong xin",
  调用: "diao yong",
  都市: "du shi",
  饿了么: "e le me",
  反省: "fan xing",
  给予: "ji yu",
  供给: "gong ji",
  归还: "gui huan",
  还原: "huan yuan",
  会计: "kuai ji",
  家长: "jia zhang",
  角色: "jue se",
  库乐队: "ku yue dui",
  乐队: "yue dui",
  乐谱: "yue pu",
  乐器: "yue qi",
  率领: "shuai ling",
  目的: "mu di",
  暖和: "nuan huo",
  色调: "se diao",
  生长: "sheng zhang",
  声乐: "sheng yue",
  首都: "shou du",
  睡觉: "shui jiao",
  似的: "shi de",
  投降: "tou xiang",
  为了: "wei le",
  西藏: "xi zang",
  校长: "xiao zhang",
  行情: "hang qing",
  行业: "hang ye",
  淹没: "yan mo",
  钥匙串访问: "yao shi chuan fang wen",
  音乐: "yin yue",
  银行: "yin hang",
  银行卡: "yin hang ka",
  游说: "you shui",
  云音乐: "yun yin yue",
  重复: "chong fu",
  重启: "chong qi",
  重新: "chong xin",
  子弹: "zi dan"
};

// src/backend/hx-computer/pinyin.ts
var HAN = /\p{Script=Han}/u;
var characters = null;
var longestWord = 0;
function table() {
  if (characters)
    return characters;
  const read = new Map;
  for (const group of HX_PINYIN_TABLE.split(" ")) {
    const syllable = /^[a-z]+/u.exec(group)?.[0] ?? "";
    for (const character of group.slice(syllable.length))
      read.set(character, syllable);
  }
  for (const word of Object.keys(HX_PINYIN_WORDS))
    longestWord = Math.max(longestWord, [...word].length);
  characters = read;
  return read;
}
function parts(name) {
  if (!HAN.test(name))
    return null;
  const read = table();
  const letters = [...name.normalize("NFKC")];
  const found = [];
  let latin = "";
  const endLatin = () => {
    if (latin)
      found.push({ text: latin.toLowerCase(), latin: true });
    latin = "";
  };
  for (let at = 0;at < letters.length; ) {
    const letter = letters[at] ?? "";
    if (!HAN.test(letter)) {
      if (/[\p{L}\p{N}]/u.test(letter))
        latin += letter;
      else
        endLatin();
      at += 1;
      continue;
    }
    endLatin();
    let taken = 0;
    for (let length = Math.min(longestWord, letters.length - at);length >= 2; length -= 1) {
      const said = HX_PINYIN_WORDS[letters.slice(at, at + length).join("")];
      if (said) {
        for (const syllable of said.split(" "))
          found.push({ text: syllable, latin: false });
        taken = length;
        break;
      }
    }
    if (taken > 0) {
      at += taken;
      continue;
    }
    const syllable = read.get(letter);
    if (!syllable)
      return null;
    found.push({ text: syllable, latin: false });
    at += 1;
  }
  endLatin();
  return found.length > 0 ? found : null;
}
function hxPinyinTyped(name) {
  const found = parts(name);
  if (!found)
    return [];
  const full = found.map((part) => part.text).join("");
  const initials = found.map((part) => part.latin ? part.text : part.text.slice(0, 1)).join("");
  return initials.length >= 2 && initials !== full ? [full, initials] : [full];
}

// src/backend/hx-computer/apps.ts
var CHINESE_FOLDERS = ["zh-Hans.lproj", "zh_CN.lproj", "zh-CN.lproj", "zh_Hans.lproj", "zh.lproj"];
var MAX_APPS = 3000;
var PLIST_READ_LIMIT = 2 * 1024 * 1024;
var READ_TOGETHER = 6;
var KNOWN_APPS = [
  { match: ["wechat", "微信"], names: ["微信", "WeChat"], pinyin: "wei xin" },
  { match: ["wecom", "企业微信", "wxwork"], names: ["企业微信", "WeCom"], pinyin: "qi ye wei xin" },
  { match: ["dingtalk", "钉钉"], names: ["钉钉", "DingTalk"], pinyin: "ding ding" },
  { match: ["lark", "feishu", "飞书"], names: ["飞书", "Lark", "Feishu"], pinyin: "fei shu" },
  { match: ["qq"], names: ["QQ"] },
  { match: ["wpsoffice", "wps"], names: ["WPS", "WPS Office"] },
  { match: ["neteasemusic", "网易云音乐"], names: ["网易云音乐", "NetEase Music"], pinyin: "wang yi yun yin yue" },
  { match: ["finder", "访达"], names: ["访达", "Finder"], pinyin: "fang da" },
  { match: ["systemsettings", "系统设置"], names: ["系统设置", "System Settings", "设置"], pinyin: "xi tong she zhi" },
  { match: ["settings", "设置"], names: ["设置", "Settings", "系统设置", "Windows 设置"], pinyin: "she zhi" },
  { match: ["notes", "备忘录"], names: ["备忘录", "Notes"], pinyin: "bei wang lu" },
  { match: ["calendar", "日历"], names: ["日历", "Calendar"], pinyin: "ri li" },
  { match: ["reminders", "提醒事项"], names: ["提醒事项", "Reminders"], pinyin: "ti xing shi xiang" },
  { match: ["mail", "邮件"], names: ["邮件", "Mail"], pinyin: "you jian" },
  { match: ["messages", "信息"], names: ["信息", "Messages"], pinyin: "xin xi" },
  { match: ["photos", "照片"], names: ["照片", "Photos"], pinyin: "zhao pian" },
  { match: ["preview", "预览"], names: ["预览", "Preview"], pinyin: "yu lan" },
  { match: ["terminal", "终端"], names: ["终端", "Terminal"], pinyin: "zhong duan" },
  { match: ["calculator", "计算器"], names: ["计算器", "Calculator"], pinyin: "ji suan qi" },
  { match: ["safari", "safari浏览器"], names: ["Safari", "Safari 浏览器"] },
  {
    match: ["activitymonitor", "活动监视器"],
    names: ["活动监视器", "Activity Monitor"],
    pinyin: "huo dong jian shi qi"
  },
  { match: ["music", "音乐"], names: ["音乐", "Music"], pinyin: "yin yue" },
  { match: ["maps", "地图"], names: ["地图", "Maps"], pinyin: "di tu" },
  { match: ["contacts", "通讯录"], names: ["通讯录", "Contacts"], pinyin: "tong xun lu" },
  { match: ["textedit", "文本编辑"], names: ["文本编辑", "TextEdit"], pinyin: "wen ben bian ji" },
  { match: ["shortcuts", "快捷指令"], names: ["快捷指令", "Shortcuts"], pinyin: "kuai jie zhi ling" },
  { match: ["appstore"], names: ["App Store", "应用商店"] },
  { match: ["notepad", "记事本"], names: ["记事本", "Notepad"], pinyin: "ji shi ben" },
  { match: ["paint", "画图"], names: ["画图", "Paint"], pinyin: "hua tu" },
  {
    match: ["fileexplorer", "文件资源管理器"],
    names: ["文件资源管理器", "File Explorer", "资源管理器"],
    pinyin: "zi yuan guan li qi"
  },
  { match: ["taskmanager", "任务管理器"], names: ["任务管理器", "Task Manager"], pinyin: "ren wu guan li qi" },
  { match: ["commandprompt", "命令提示符"], names: ["命令提示符", "Command Prompt", "cmd"] },
  { match: ["microsoftedge"], names: ["Edge", "Microsoft Edge", "Edge 浏览器"] },
  { match: ["googlechrome", "chrome"], names: ["Chrome", "Google Chrome", "谷歌浏览器"] },
  { match: ["microsoftword", "word"], names: ["Word", "Microsoft Word"] },
  { match: ["microsoftexcel", "excel"], names: ["Excel", "Microsoft Excel"] },
  { match: ["microsoftpowerpoint", "powerpoint"], names: ["PowerPoint", "Microsoft PowerPoint", "PPT"] },
  { match: ["microsoftoutlook", "outlook"], names: ["Outlook", "Microsoft Outlook"] },
  { match: ["visualstudiocode", "code"], names: ["VS Code", "Visual Studio Code"] }
];
function unique(names) {
  const seen = new Set;
  const result = [];
  for (const name of names) {
    const text = name.trim();
    const key = hxNormalize(text);
    if (!key || seen.has(key))
      continue;
    seen.add(key);
    result.push(text);
  }
  return result;
}
function hxAppNames(names) {
  const keys = new Set(names.map(hxNormalize));
  const more = [];
  for (const known of KNOWN_APPS) {
    if (!known.match.some((key) => keys.has(key)))
      continue;
    more.push(...known.names, ...known.pinyin ? hxPinyinNames(known.pinyin) : []);
  }
  const all = unique([...names, ...more]);
  return unique([...all, ...all.flatMap(hxPinyinTyped)]);
}
function xmlText(value) {
  return value.replace(/&lt;/gu, "<").replace(/&gt;/gu, ">").replace(/&quot;/gu, '"').replace(/&apos;/gu, "'").replace(/&amp;/gu, "&");
}
function hxPlistString(xml, key) {
  const at = xml.indexOf(`<key>${key}</key>`);
  if (at < 0)
    return "";
  const match = /^\s*<string>([^<]*)<\/string>/u.exec(xml.slice(at + key.length + 11));
  return match?.[1] === undefined ? "" : xmlText(match[1]).trim();
}
function hxStringsValue(text, key) {
  const escaped = key.replace(/[$()*+.?[\\\]^{|}]/gu, "\\$&");
  const match = new RegExp(`(?:^|[\\s;])"?${escaped}"?\\s*=\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*;`, "u").exec(text);
  return match?.[1] === undefined ? "" : match[1].replace(/\\(.)/gu, "$1").trim();
}
function hxDecodeText(bytes) {
  if (bytes.length >= 2 && bytes[0] === 255 && bytes[1] === 254)
    return bytes.subarray(2).toString("utf16le");
  if (bytes.length >= 2 && bytes[0] === 254 && bytes[1] === 255) {
    const swapped = Buffer.from(bytes.subarray(2));
    swapped.swap16();
    return swapped.toString("utf16le");
  }
  return bytes.toString("utf8").replace(/^﻿/u, "");
}
function isBinaryPlist(bytes) {
  return bytes.subarray(0, 6).toString("latin1") === "bplist";
}
async function readSmall(path) {
  try {
    const info = await stat2(path);
    if (!info.isFile() || info.size > PLIST_READ_LIMIT)
      return null;
    return await readFile(path);
  } catch {
    return null;
  }
}
async function plistValue(run, path, key, strings) {
  const bytes = await readSmall(path);
  if (!bytes)
    return "";
  if (!isBinaryPlist(bytes)) {
    const text = hxDecodeText(bytes);
    return strings && !text.trimStart().startsWith("<") ? hxStringsValue(text, key) : hxPlistString(text, key);
  }
  const result = await run("/usr/bin/plutil", ["-extract", key, "raw", "-o", "-", path], { timeoutMs: 5000 });
  return hxRunOk(result) ? result.stdout.trim() : "";
}
function hxMacBundleId(run, bundle) {
  return plistValue(run, join(bundle, "Contents", "Info.plist"), "CFBundleIdentifier", false);
}
async function chineseName(run, app) {
  const resources = join(app, "Contents", "Resources");
  for (const folder of CHINESE_FOLDERS) {
    const file = join(resources, folder, "InfoPlist.strings");
    const name = await plistValue(run, file, "CFBundleDisplayName", true) || await plistValue(run, file, "CFBundleName", true);
    if (name)
      return name;
  }
  const table = join(resources, "InfoPlist.loctable");
  if (!await readSmall(table))
    return "";
  for (const language of ["zh_CN", "zh-Hans"]) {
    for (const key of ["CFBundleDisplayName", "CFBundleName"]) {
      const result = await run("/usr/bin/plutil", ["-extract", `${language}.${key}`, "raw", "-o", "-", table], {
        timeoutMs: 5000
      });
      if (hxRunOk(result) && result.stdout.trim())
        return result.stdout.trim();
    }
  }
  return "";
}
async function appFolders(root, depth) {
  let names;
  try {
    names = await readdir(root);
  } catch {
    return [];
  }
  const found = [];
  for (const name of names.sort()) {
    if (name.startsWith("."))
      continue;
    const path = join(root, name);
    if (name.endsWith(".app"))
      found.push(path);
    else if (depth > 0)
      found.push(...await appFolders(path, depth - 1));
  }
  return found;
}
async function macApp(run, path, chineseFirst) {
  const fileName = basename(path, ".app");
  const info = join(path, "Contents", "Info.plist");
  const [display, bundleName, chinese] = await Promise.all([
    plistValue(run, info, "CFBundleDisplayName", false),
    plistValue(run, info, "CFBundleName", false),
    chineseName(run, path)
  ]);
  const own = chineseFirst ? [chinese, display, bundleName, fileName] : [display, bundleName, fileName, chinese];
  const names = hxAppNames(own);
  return { id: `app:${path}`, kind: "app", title: names[0] ?? fileName, names, risk: 1, target: path };
}
async function hxMacApps(run, home, chineseFirst) {
  const paths = new Set(HX_MAC_EXTRA_APPS);
  for (const root of hxMacAppRoots(home))
    for (const path of await appFolders(root, 1))
      paths.add(path);
  const list = [...paths].slice(0, MAX_APPS);
  const entries = [];
  for (let start = 0;start < list.length; start += READ_TOGETHER) {
    const group = list.slice(start, start + READ_TOGETHER);
    entries.push(...await Promise.all(group.map((path) => macApp(run, path, chineseFirst))));
  }
  return entries;
}
function isGenerated(appId) {
  return appId.startsWith("Microsoft.AutoGenerated.");
}
function hxParseStartApps(stdout) {
  let parsed;
  try {
    parsed = JSON.parse(stdout.replace(/^﻿/u, "").trim() || "[]");
  } catch {
    return [];
  }
  const list = Array.isArray(parsed) ? parsed : [parsed];
  const apps = [];
  const seen = new Set;
  for (const item of list.slice(0, MAX_APPS)) {
    if (!isDynamicRecord(item) || typeof item.Name !== "string" || typeof item.AppID !== "string")
      continue;
    const name = item.Name.trim();
    const appId = item.AppID.trim();
    if (!name || !appId || seen.has(appId))
      continue;
    seen.add(appId);
    apps.push({ name, appId });
  }
  const named = new Set(apps.filter((app) => !isGenerated(app.appId)).map((app) => hxNormalize(app.name)));
  const entries = [];
  for (const { name, appId } of apps) {
    if (isGenerated(appId) && named.has(hxNormalize(name)))
      continue;
    const names = hxAppNames([name]);
    entries.push({
      id: `app:${appId}`,
      kind: "app",
      title: names[0] ?? name,
      names,
      risk: 1,
      target: `shell:AppsFolder\\${appId}`
    });
  }
  return entries;
}
async function hxWinApps(run) {
  const result = await run(HX_WIN_LIST_APPS.command, HX_WIN_LIST_APPS.args, { timeoutMs: 30000 });
  return hxRunOk(result) ? hxParseStartApps(result.stdout) : [];
}

// src/backend/hx-computer/catalog.ts
var FOLDER = "hx-computer";
var CATALOG_FILE = "catalog.json";
var STATE_FILE = "state.json";
var FORMAT = 1;
var HX_CATALOG_MAX_AGE_MS = 24 * 60 * 60 * 1000;
var HX_CATALOG_RETRY_MS = 10 * 60 * 1000;
var HX_DISABLED_RETRY_MS = 7 * 24 * 60 * 60 * 1000;
function hxSeedFingerprint(seed) {
  const values = seed.values.type === "switch" ? ["on", "off"] : seed.values.type === "number" ? [String(seed.values.min), String(seed.values.max)] : seed.values.type === "choice" ? [...seed.values.options] : ["/file"];
  const commands = [seed.read, ...values.map((value) => seed.write(value))].map((command) => [
    command.command,
    command.args
  ]);
  return createHash("sha256").update(JSON.stringify(commands)).digest("hex").slice(0, 16);
}
function sharedPinyin(seeds) {
  const seen = new Set;
  const shared = new Set;
  for (const seed of seeds) {
    for (const name of new Set(hxPinyinNames(seed.pinyin))) {
      if (seen.has(name))
        shared.add(name);
      seen.add(name);
    }
  }
  return shared;
}
function names(seed, shared) {
  const pinyin = hxPinyinNames(seed.pinyin).filter((name) => !shared.has(name));
  return [...new Set([seed.zh, seed.en, ...seed.more ?? [], ...pinyin])];
}
function isEntry(value) {
  return isDynamicRecord(value) && typeof value.id === "string" && value.kind === "app" && typeof value.title === "string" && typeof value.target === "string" && Array.isArray(value.names) && value.names.every((name) => typeof name === "string") && value.risk === 1;
}

class HxCatalog {
  #host;
  #apps = null;
  #builtAt = null;
  #triedAt = null;
  #disabled = null;
  #checked = null;
  #building = null;
  #shared = null;
  constructor(host) {
    this.#host = host;
  }
  get platform() {
    return this.#host.platform;
  }
  pageSeeds() {
    if (this.#host.platform === "mac")
      return HX_MAC_PAGES;
    return this.#host.platform === "windows" ? HX_WIN_PAGES : [];
  }
  settingSeeds() {
    if (this.#host.platform === "mac")
      return HX_MAC_SETTINGS;
    return this.#host.platform === "windows" ? HX_WIN_SETTINGS : [];
  }
  settingSeed(id) {
    return this.settingSeeds().find((seed) => `setting:${seed.key}` === id) ?? null;
  }
  #sharedPinyin() {
    this.#shared ??= sharedPinyin([...this.pageSeeds(), ...this.settingSeeds()]);
    return this.#shared;
  }
  #pages() {
    const shared = this.#sharedPinyin();
    return this.pageSeeds().map((seed) => ({
      id: `page:${seed.key}`,
      kind: "page",
      title: this.#host.chineseFirst ? seed.zh : seed.en,
      names: names(seed, shared),
      risk: seed.security ? 3 : 1,
      target: seed.address
    }));
  }
  #settings(notDirect) {
    const shared = this.#sharedPinyin();
    return this.settingSeeds().map((seed) => ({
      id: `setting:${seed.key}`,
      kind: "setting",
      title: this.#host.chineseFirst ? seed.zh : seed.en,
      names: names(seed, shared),
      risk: 1,
      page: `page:${seed.page}`,
      values: seed.values,
      direct: !notDirect.has(`setting:${seed.key}`)
    }));
  }
  #file(name) {
    const folder = this.#host.dataFolder();
    return folder ? join2(folder, FOLDER, name) : null;
  }
  async#readJson(name) {
    const file = this.#file(name);
    if (!file)
      return null;
    try {
      return JSON.parse(await readFile2(file, "utf8"));
    } catch {
      return null;
    }
  }
  async#writeJson(name, value) {
    const file = this.#file(name);
    const folder = this.#host.dataFolder();
    if (!file || !folder)
      return;
    try {
      await mkdir(join2(folder, FOLDER), { recursive: true, mode: 448 });
      const draft = `${file}.${process.pid}.tmp`;
      await writeFile(draft, JSON.stringify(value), { mode: 384 });
      await rename(draft, file);
    } catch {}
  }
  async#loadState() {
    if (this.#disabled && this.#checked)
      return { disabled: this.#disabled, checked: this.#checked };
    const saved = await this.#readJson(STATE_FILE);
    const record = isDynamicRecord(saved) ? saved : {};
    const disabled = new Map;
    for (const item of Array.isArray(record.disabled) ? record.disabled : []) {
      if (isDynamicRecord(item) && typeof item.id === "string" && typeof item.at === "number") {
        disabled.set(item.id, item.at);
      }
    }
    const checked = new Map;
    for (const item of Array.isArray(record.checked) ? record.checked : []) {
      if (isDynamicRecord(item) && typeof item.id === "string" && typeof item.commands === "string") {
        checked.set(item.id, item.commands);
      }
    }
    this.#disabled = disabled;
    this.#checked = checked;
    return { disabled, checked };
  }
  async#saveState() {
    const { disabled, checked } = await this.#loadState();
    const byId = (left, right) => left.id.localeCompare(right.id);
    await this.#writeJson(STATE_FILE, {
      format: FORMAT,
      disabled: [...disabled].map(([id, at]) => ({ id, at })).sort(byId),
      checked: [...checked].map(([id, commands]) => ({ id, commands })).sort(byId)
    });
  }
  async#disabledTimes() {
    return (await this.#loadState()).disabled;
  }
  async#disabledNow() {
    const now = this.#host.now();
    const ids = new Set;
    for (const [id, at] of await this.#disabledTimes()) {
      if (Math.abs(now - at) < HX_DISABLED_RETRY_MS)
        ids.add(id);
    }
    return ids;
  }
  async disable(id) {
    const times = await this.#disabledTimes();
    times.set(id, this.#host.now());
    await this.#saveState();
  }
  async isDisabled(id) {
    return (await this.#disabledNow()).has(id);
  }
  async#checkedNow() {
    const { checked } = await this.#loadState();
    const ids = new Set;
    for (const seed of this.settingSeeds()) {
      const id = `setting:${seed.key}`;
      if (checked.get(id) === hxSeedFingerprint(seed))
        ids.add(id);
    }
    return ids;
  }
  async markChecked(id) {
    const seed = this.settingSeed(id);
    if (!seed)
      return;
    const { disabled, checked } = await this.#loadState();
    checked.set(id, hxSeedFingerprint(seed));
    disabled.delete(id);
    await this.#saveState();
  }
  async directState(id) {
    if (await this.isDisabled(id))
      return "disabled";
    if (this.#isVerified(id) || (await this.#checkedNow()).has(id))
      return "direct";
    return "unchecked";
  }
  #isVerified(id) {
    const verified = this.#host.verified;
    if (typeof verified === "boolean")
      return verified;
    return verified.some((key) => `setting:${key}` === id);
  }
  async#notDirect() {
    const disabled = await this.#disabledNow();
    const unchecked = new Set;
    const checked = await this.#checkedNow();
    for (const seed of this.settingSeeds()) {
      const id = `setting:${seed.key}`;
      if (!this.#isVerified(id) && !checked.has(id) && !disabled.has(id))
        unchecked.add(id);
    }
    return { disabled, unchecked };
  }
  async#load() {
    if (this.#apps)
      return;
    const saved = await this.#readJson(CATALOG_FILE);
    if (isDynamicRecord(saved) && saved.format === FORMAT && saved.platform === this.#host.platform && typeof saved.builtAt === "number" && Array.isArray(saved.apps)) {
      const apps = saved.apps.filter(isEntry);
      if (apps.length === 0)
        return;
      this.#apps = apps;
      this.#builtAt = saved.builtAt;
    }
  }
  rebuild() {
    this.#building ??= this.#build().finally(() => {
      this.#building = null;
    });
    return this.#building;
  }
  async refresh(minAgeMs) {
    if (this.#triedAt !== null && Math.abs(this.#host.now() - this.#triedAt) < minAgeMs)
      return;
    await this.rebuild();
  }
  async#build() {
    const host = this.#host;
    this.#triedAt = host.now();
    let apps = [];
    try {
      if (host.platform === "mac")
        apps = await hxMacApps(host.run, host.home, host.chineseFirst);
      if (host.platform === "windows")
        apps = await hxWinApps(host.run);
    } catch {
      apps = [];
    }
    if (apps.length === 0) {
      this.#apps ??= [];
      return;
    }
    this.#apps = apps;
    this.#builtAt = host.now();
    await this.#writeJson(CATALOG_FILE, { format: FORMAT, platform: host.platform, builtAt: this.#builtAt, apps });
  }
  async entries() {
    if (this.#host.platform === null)
      return [];
    await this.#load();
    const now = this.#host.now();
    const stale = this.#builtAt === null || Math.abs(now - this.#builtAt) > HX_CATALOG_MAX_AGE_MS;
    const mayTry = this.#triedAt === null || Math.abs(now - this.#triedAt) > HX_CATALOG_RETRY_MS;
    if (this.#apps === null)
      await this.rebuild();
    else if (stale && mayTry)
      this.rebuild();
    const { disabled, unchecked } = await this.#notDirect();
    return [...this.#pages(), ...this.#settings(new Set([...disabled, ...unchecked])), ...this.#apps ?? []];
  }
  async entry(id) {
    return (await this.entries()).find((entry) => entry.id === id) ?? null;
  }
  async status() {
    if (this.#host.platform !== null)
      await this.#load();
    const { disabled, unchecked } = await this.#notDirect();
    const settings = this.settingSeeds();
    return {
      platform: this.#host.platform,
      builtAt: this.#builtAt,
      apps: this.#apps?.length ?? 0,
      pages: this.pageSeeds().length,
      settings: settings.length,
      directSettings: settings.length - disabled.size - unchecked.size,
      disabled: [...disabled].sort(),
      unchecked: unchecked.size
    };
  }
}

// src/backend/hx-computer/realcheck-data.ts
var HX_REAL_APPS = {
  mac: [
    { query: "TextEdit", marks: ["/textedit.app"], processes: ["TextEdit"], required: true, open: true },
    { query: "Calculator", marks: ["/calculator.app"], processes: ["Calculator"], required: true, open: true },
    { query: "Preview", marks: ["/preview.app"], processes: ["Preview"], required: true, open: true },
    { query: "Finder", marks: ["/finder.app"], processes: ["Finder"], required: true, open: false },
    { query: "About This Mac", marks: ["/about this mac.app"], processes: [], required: false, open: false },
    { query: "Safari", marks: ["/safari.app"], processes: ["Safari"], required: true, open: false },
    {
      query: "System Settings",
      marks: ["/system settings.app"],
      processes: ["System Settings"],
      required: true,
      open: false
    },
    { query: "Terminal", marks: ["/terminal.app"], processes: ["Terminal"], required: true, open: false },
    { query: "Notes", marks: ["/notes.app"], processes: ["Notes"], required: true, open: false }
  ],
  windows: [
    { query: "Notepad", marks: ["notepad"], processes: ["notepad"], required: true, open: true },
    { query: "Paint", marks: ["paint"], processes: ["mspaint"], required: false, open: true },
    {
      query: "Calculator",
      marks: ["calculator"],
      processes: ["CalculatorApp", "win32calc", "calc"],
      required: false,
      open: true
    },
    { query: "Command Prompt", marks: ["command prompt"], processes: ["cmd"], required: true, open: false },
    { query: "Settings", marks: ["settings"], processes: ["SystemSettings"], required: true, open: false },
    { query: "File Explorer", marks: ["file explorer"], processes: ["explorer"], required: true, open: false }
  ]
};
function plain(text) {
  return text.normalize("NFKC").trim().toLowerCase().replace(/\s+/gu, " ");
}
function hxRealAppEntry(entries, marks) {
  for (const entry of entries) {
    if (entry.kind !== "app")
      continue;
    const target = (entry.target ?? "").toLowerCase();
    for (const mark of marks) {
      const found = mark.startsWith("/") ? target.endsWith(mark) : entry.names.some((name) => plain(name) === plain(mark));
      if (found)
        return entry;
    }
  }
  return null;
}
var HX_REAL_MAC_CHINESE = [
  ["/finder.app", "访达"],
  ["/terminal.app", "终端"],
  ["/notes.app", "备忘录"],
  ["/system settings.app", "系统设置"],
  ["/calculator.app", "计算器"],
  ["/textedit.app", "文本编辑"]
];
var HX_REAL_TEXT_EDITORS = {
  mac: ["TextEdit"],
  windows: ["notepad"]
};
var HX_REAL_BROWSERS = {
  mac: ["Safari", "Google Chrome", "firefox", "Microsoft Edge"],
  windows: ["msedge", "chrome", "firefox"]
};
function hxRealWays(expected) {
  if (expected === "ask")
    return [];
  return "either" in expected ? expected.either : [expected];
}
var ALL = ["app", "page", "setting"];
var SETTINGS = ["setting", "page"];
var to = (phrase, id, kinds = ALL) => ({ phrase, kinds, expected: { id } });
var either = (phrase, ...ways) => ({
  phrase,
  kinds: ALL,
  expected: { either: ways }
});
var app = (phrase, mark) => ({ phrase, kinds: ALL, expected: { app: mark } });
var HX_REAL_PHRASES = {
  mac: [
    to("蓝牙", "page:bluetooth"),
    to("蓝牙设置", "page:bluetooth"),
    to("打开蓝牙设置", "page:bluetooth"),
    to("bluetooth settings", "page:bluetooth"),
    to("lanya", "page:bluetooth"),
    to("wifi", "page:wifi"),
    to("无线网络", "page:wifi"),
    to("声音设置", "page:sound"),
    to("显示器", "page:displays"),
    to("壁纸", "page:wallpaper"),
    to("键盘", "page:keyboard"),
    to("打印机", "page:printers"),
    to("通知", "page:notifications"),
    either("关于本机", { id: "page:about" }, { app: "/about this mac.app" }),
    to("软件更新", "page:software-update"),
    to("隐私与安全性", "page:privacy"),
    to("程序坞", "page:desktop-dock"),
    to("深色模式", "setting:dark-mode", SETTINGS),
    to("把深色模式打开", "setting:dark-mode", SETTINGS),
    to("dark mode", "setting:dark-mode", SETTINGS),
    to("音量", "setting:volume", SETTINGS),
    to("把音量调到 30", "setting:volume", SETTINGS),
    to("静音", "setting:mute", SETTINGS),
    to("程序坞位置", "setting:dock-position", SETTINGS),
    { phrase: "自动隐藏", kinds: SETTINGS, expected: "ask" },
    app("终端", "/terminal.app"),
    app("terminal", "/terminal.app"),
    app("zhongduan", "/terminal.app"),
    app("访达", "/finder.app"),
    app("计算器", "/calculator.app"),
    app("备忘录", "/notes.app"),
    app("文本编辑", "/textedit.app"),
    app("设置", "/system settings.app"),
    app("打开设置", "/system settings.app"),
    app("系统设置", "/system settings.app"),
    app("safari", "/safari.app")
  ],
  windows: [
    to("蓝牙", "page:bluetooth"),
    to("蓝牙设置", "page:bluetooth"),
    to("打开蓝牙设置", "page:bluetooth"),
    to("bluetooth settings", "page:bluetooth"),
    to("wifi", "page:wifi"),
    to("声音设置", "page:sound"),
    to("屏幕", "page:display"),
    to("夜间模式", "page:night-light"),
    to("壁纸", "page:background"),
    to("任务栏", "page:taskbar"),
    to("打印机", "page:printers"),
    to("系统更新", "page:windows-update"),
    to("默认应用", "page:default-apps"),
    to("剪贴板", "page:clipboard"),
    to("隐私", "page:privacy"),
    to("深色模式", "setting:dark-mode", SETTINGS),
    to("打开深色模式", "setting:dark-mode", SETTINGS),
    to("dark mode", "setting:dark-mode", SETTINGS),
    to("透明效果", "setting:transparency", SETTINGS),
    to("亮度", "setting:brightness", SETTINGS),
    to("剪贴板历史记录", "setting:clipboard-history", SETTINGS),
    app("记事本", "notepad"),
    app("notepad", "notepad"),
    app("设置", "settings"),
    app("打开设置", "settings"),
    app("系统设置", "settings"),
    app("资源管理器", "file explorer"),
    app("cmd", "command prompt")
  ]
};
var HEADING_SLACK = 14;
function hxRealPageShown(texts, name) {
  const wanted = hxNormalize(name);
  if (!wanted)
    return false;
  const words = name.toLowerCase().split(/[^\p{L}\p{N}]+/u).filter((word) => word.length >= 4);
  return texts.some((text) => {
    const shown = hxNormalize(text);
    if (!shown)
      return false;
    if (shown === wanted)
      return true;
    if (shown.length > wanted.length + HEADING_SLACK)
      return false;
    if (shown.length >= 4 && (shown.includes(wanted) || wanted.includes(shown)))
      return true;
    return words.length > 0 && words.every((word) => shown.includes(word));
  });
}
var HX_REAL_PAGE_NOTES = {
  mac: {
    battery: { titles: ["Energy", "Energy Saver"], hardware: true },
    "touch-id": { titles: ["Login Password", "Touch ID"], hardware: true },
    trackpad: { hardware: true },
    wallet: { hardware: true },
    siri: { titles: ["Siri", "Apple Intelligence & Siri", "Spotlight"] },
    "apple-account": { titles: ["Apple ID", "Sign in"] },
    "control-center": { titles: ["Menu Bar"] },
    airdrop: { titles: ["AirDrop & Continuity"] }
  },
  windows: {
    touchpad: { hardware: true },
    wifi: { hardware: true },
    hotspot: { hardware: true },
    airplane: { hardware: true },
    power: { titles: ["Power", "Power & battery"] },
    "text-size": { titles: ["Display"] },
    accessibility: { titles: ["Ease of Access"] },
    "night-light": { desktopOnly: true },
    clipboard: { desktopOnly: true },
    "game-bar": { desktopOnly: true },
    backup: { desktopOnly: true }
  }
};
var HX_REAL_NO_HARDWARE = {
  mac: {},
  windows: { brightness: /not supported|invalid class|0x8004100c|0x80041010/iu }
};
var DEFAULTS = "/usr/bin/defaults";
function defaultsRead(args, shows) {
  return { command: { command: DEFAULTS, args: ["read", ...args] }, shows };
}
var asSwitch = (stdout, _code, value) => stdout.trim() === (value === "on" ? "1" : "0");
function regPath() {
  const root = process.env.SystemRoot || process.env.windir || "C:\\Windows";
  return `${root.replace(/[\\/]+$/u, "")}\\System32\\reg.exe`;
}
function hxRegValue(stdout, name) {
  for (const line of stdout.split(/\r?\n/u)) {
    const parts = line.trim().split(/\s+/u);
    if (parts[0] === name && parts[1] === "REG_DWORD" && parts[2]) {
      const value = Number.parseInt(parts[2], 16);
      return Number.isNaN(value) ? null : value;
    }
  }
  return null;
}
function regRead(key, name, onIs) {
  return {
    command: { command: regPath(), args: ["query", key, "/v", name] },
    shows: (stdout, _code, value) => hxRegValue(stdout, name) === (value === "on" ? onIs : 1 - onIs)
  };
}
var PERSONALIZE2 = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize";
var ADVANCED2 = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced";
var EFFECTS = {
  mac: {
    "dark-mode": defaultsRead(["-g", "AppleInterfaceStyle"], (stdout, code, value) => value === "on" ? stdout.trim() === "Dark" : code !== 0 || stdout.trim() !== "Dark"),
    "dock-autohide": defaultsRead(["com.apple.dock", "autohide"], asSwitch),
    "dock-magnification": defaultsRead(["com.apple.dock", "magnification"], asSwitch),
    "dock-recents": defaultsRead(["com.apple.dock", "show-recents"], asSwitch),
    "menu-bar-autohide": defaultsRead(["-g", "_HIHideMenuBar"], asSwitch),
    "dock-position": defaultsRead(["com.apple.dock", "orientation"], (stdout, _code, value) => stdout.trim() === value),
    "dock-minimize-effect": defaultsRead(["com.apple.dock", "mineffect"], (stdout, _code, value) => stdout.trim() === value),
    "dock-size": defaultsRead(["com.apple.dock", "tilesize"], (stdout, _code, value) => {
      const tile = Number(stdout.trim());
      return Number.isFinite(tile) && Math.abs((tile - 16) / 112 * 100 - Number(value)) <= 3;
    }),
    "dock-indicators": defaultsRead(["com.apple.dock", "show-process-indicators"], asSwitch),
    "dock-minimize-into-app": defaultsRead(["com.apple.dock", "minimize-to-application"], asSwitch),
    "dock-launch-animation": defaultsRead(["com.apple.dock", "launchanim"], asSwitch)
  },
  windows: {
    "app-dark-mode": regRead(PERSONALIZE2, "AppsUseLightTheme", 0),
    "system-dark-mode": regRead(PERSONALIZE2, "SystemUsesLightTheme", 0),
    transparency: regRead(PERSONALIZE2, "EnableTransparency", 1),
    "clipboard-history": regRead("HKCU\\Software\\Microsoft\\Clipboard", "EnableClipboardHistory", 1),
    "taskbar-alignment": {
      command: { command: regPath(), args: ["query", ADVANCED2, "/v", "TaskbarAl"] },
      shows: (stdout, _code, value) => hxRegValue(stdout, "TaskbarAl") === (value === "left" ? 0 : 1)
    },
    "task-view-button": regRead(ADVANCED2, "ShowTaskViewButton", 1),
    "clock-seconds": regRead(ADVANCED2, "ShowSecondsInSystemClock", 1),
    "accent-title-bars": regRead("HKCU\\Software\\Microsoft\\Windows\\DWM", "ColorPrevalence", 1),
    "accent-start-taskbar": regRead(PERSONALIZE2, "ColorPrevalence", 1),
    notifications: regRead("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications", "ToastEnabled", 1),
    "game-mode": regRead("HKCU\\Software\\Microsoft\\GameBar", "AllowAutoGameMode", 1),
    "storage-sense": regRead("HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\StorageSense\\Parameters\\StoragePolicy", "01", 1),
    "dark-mode": {
      command: { command: regPath(), args: ["query", PERSONALIZE2] },
      shows: (stdout, _code, value) => {
        const apps = hxRegValue(stdout, "AppsUseLightTheme");
        const system = hxRegValue(stdout, "SystemUsesLightTheme");
        if (value === "on")
          return apps === 0 && system === 0;
        if (value === "off")
          return apps === 1 && system === 1;
        if (value === "apps only")
          return apps === 0 && system === 1;
        return value === "system only" && apps === 1 && system === 0;
      }
    }
  }
};
function hxRealEffect(platform, key) {
  return EFFECTS[platform][key] ?? null;
}
var osa = (script) => ({ command: "/usr/bin/osascript", args: ["-e", script] });
var defaults = (id, ...args) => ({
  id,
  command: { command: DEFAULTS, args: ["read", ...args] }
});
var reg = (id, key) => ({ id, command: { command: regPath(), args: ["query", key] } });
var shell = (id, script, timeoutMs) => ({
  id,
  command: hxPowerShell(`$hxStep = 'probe'; ${script}`),
  ...timeoutMs ? { timeoutMs } : {}
});
var EXPLORER = "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer";
var HX_REAL_PROBES = {
  mac: [
    defaults("languages", "-g", "AppleLanguages"),
    { id: "volume-settings", command: osa("get volume settings") },
    {
      id: "dock-properties",
      command: osa('tell application "System Events" to get properties of dock preferences')
    },
    {
      id: "appearance-properties",
      command: osa('tell application "System Events" to get properties of appearance preferences')
    },
    defaults("dock-minimize-to-application", "com.apple.dock", "minimize-to-application"),
    defaults("dock-process-indicators", "com.apple.dock", "show-process-indicators"),
    defaults("dock-launch-animation", "com.apple.dock", "launchanim"),
    defaults("dock-large-size", "com.apple.dock", "largesize"),
    defaults("dock-tile-size", "com.apple.dock", "tilesize"),
    defaults("dock-orientation", "com.apple.dock", "orientation"),
    defaults("spaces-rearrange", "com.apple.dock", "mru-spaces"),
    defaults("finder-hidden-files", "com.apple.finder", "AppleShowAllFiles"),
    defaults("finder-extensions", "-g", "AppleShowAllExtensions"),
    defaults("finder-path-bar", "com.apple.finder", "ShowPathbar"),
    defaults("finder-status-bar", "com.apple.finder", "ShowStatusBar"),
    defaults("stage-manager", "com.apple.WindowManager", "GloballyEnabled"),
    defaults("clock", "com.apple.menuextra.clock"),
    defaults("clock-24-hours", "-g", "AppleICUForce24HourTime"),
    {
      id: "battery-percentage",
      command: {
        command: DEFAULTS,
        args: ["-currentHost", "read", "com.apple.controlcenter", "BatteryShowPercentage"]
      }
    },
    defaults("sound-feedback", "-g", "com.apple.sound.beep.feedback"),
    defaults("sound-interface", "-g", "com.apple.sound.uiaudio.enabled"),
    defaults("screenshot", "com.apple.screencapture"),
    { id: "wallpaper", command: osa('tell application "System Events" to get picture of every desktop') },
    { id: "network-ports", command: { command: "/usr/sbin/networksetup", args: ["-listallhardwareports"] } },
    { id: "power", command: { command: "/usr/bin/pmset", args: ["-g"] } },
    {
      id: "visible-processes",
      command: osa('tell application "System Events" to get name of every process whose background only is false')
    },
    {
      id: "settings-current-pane",
      command: osa(`with timeout of 6 seconds
tell application "System Settings" to get id of current pane
end timeout`),
      timeoutMs: 9000
    }
  ],
  windows: [
    reg("explorer-advanced", `${EXPLORER}\\Advanced`),
    reg("explorer", EXPLORER),
    reg("search", "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Search"),
    reg("personalize", PERSONALIZE2),
    reg("dwm", "HKCU\\Software\\Microsoft\\Windows\\DWM"),
    reg("mouse", "HKCU\\Control Panel\\Mouse"),
    reg("desktop", "HKCU\\Control Panel\\Desktop"),
    reg("accessibility", "HKCU\\Control Panel\\Accessibility"),
    reg("notifications", "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications"),
    reg("game-bar", "HKCU\\Software\\Microsoft\\GameBar"),
    reg("storage-sense", "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\StorageSense\\Parameters\\StoragePolicy"),
    reg("clipboard", "HKCU\\Software\\Microsoft\\Clipboard"),
    shell("power-scheme", "powercfg /getactivescheme"),
    shell("power-display", "powercfg /query SCHEME_CURRENT SUB_VIDEO VIDEOIDLE"),
    shell("power-sleep", "powercfg /query SCHEME_CURRENT SUB_SLEEP STANDBYIDLE"),
    shell("sound-devices", "Get-CimInstance Win32_SoundDevice | Select-Object Name, Status | ConvertTo-Json -Compress"),
    shell("network-adapters", "Get-NetAdapter | Select-Object Name, InterfaceDescription, Status | ConvertTo-Json -Compress"),
    shell("start-apps", "(Get-StartApps | Select-Object -First 150 | ForEach-Object { $_.Name }) -join ' ; '"),
    shell("brightness", "Get-CimInstance -Namespace root/WMI -ClassName WmiMonitorBrightness -OperationTimeoutSec 10 -ErrorAction Stop | Select-Object CurrentBrightness, Levels | ConvertTo-Json -Compress"),
    shell("culture", "(Get-Culture).Name + ' ; ' + (Get-UICulture).Name + ' ; ' + (Get-WinSystemLocale).Name"),
    shell("powershell-start", "$hxOwn = [Diagnostics.Process]::GetCurrentProcess(); $hxUp = [int]((Get-Date) - $hxOwn.StartTime).TotalMilliseconds; $hxEach = @(); foreach ($hxRound in 1..3) { $hxAt = Get-Date; & $hxOwn.Path -NoLogo -NoProfile -NonInteractive -Command exit | Out-Null; $hxEach += [int]((Get-Date) - $hxAt).TotalMilliseconds }; 'this one was already up for ' + $hxUp + ' ms; another one takes ' + ($hxEach -join ', ') + ' ms'", 180000)
  ]
};
var HX_REAL_REFUSED = [
  { name: "script.sh" },
  { name: "double-click.command" },
  { name: "program.exe" },
  { name: "batch.bat" },
  { name: "shortcut.lnk" },
  { name: "address.url" },
  { name: "macro.py" },
  { name: "installer.msi" },
  { name: "tool", runnable: true, only: "mac" }
];
var HX_REAL_REFUSED_ADDRESSES = [
  "file:///etc/hosts",
  "javascript:alert(1)",
  "ms-msdt:/id",
  "x-apple.systempreferences:com.apple.BluetoothSettings"
];

// src/backend/hx-computer/realcheck-report.ts
var HX_CHECK_OUTCOMES = ["passed", "failed", "review", "unavailable", "skipped"];
var LABELS = {
  passed: "通过",
  failed: "失败",
  review: "待看",
  unavailable: "测不了",
  skipped: "跳过"
};
var HX_CHECK_GROUPS = [
  ["env", "环境"],
  ["catalog", "目录"],
  ["search", "检索"],
  ["open", "打开应用、文件、网址"],
  ["page", "逐页打开系统设置"],
  ["setting", "读写设置"],
  ["gate", "闸门"],
  ["tool", "工具整条路"],
  ["probe", "为新增设置做的探测"],
  ["final", "收尾"]
];
function hxCheckGroup(id) {
  const dot = id.indexOf(".");
  return dot < 0 ? id : id.slice(0, dot);
}
function hxCheckCounts(items) {
  const counts = { passed: 0, failed: 0, review: 0, unavailable: 0, skipped: 0 };
  for (const item of items)
    counts[item.outcome] += 1;
  return counts;
}
function hxMedian(values) {
  if (values.length === 0)
    return 0;
  const sorted = [...values].sort((left, right) => left - right);
  return sorted[Math.floor((sorted.length - 1) / 2)] ?? 0;
}
function cell(text, limit = 400) {
  const flat = text.replace(/\s+/gu, " ").replace(/\|/gu, "\\|").trim();
  return flat.length > limit ? `${flat.slice(0, limit)}…` : flat;
}
function itemTable(title, items, limit) {
  if (items.length === 0)
    return [];
  const lines = [`### ${title}（${items.length} 项）`, "", "| 编号 | 看到了什么 |", "|---|---|"];
  for (const item of items.slice(0, limit))
    lines.push(`| \`${item.id}\` | ${cell(item.detail)} |`);
  if (items.length > limit)
    lines.push(`| … | 还有 ${items.length - limit} 项，见 report.json |`);
  lines.push("");
  return lines;
}
function hxCheckSummary(report) {
  const counts = hxCheckCounts(report.items);
  const seconds = Math.max(0, Math.round((report.finishedAt - report.startedAt) / 1000));
  const lines = [
    `## ${report.machine}：${counts.failed > 0 ? "有失败" : counts.review > 0 ? "没有失败，有待看的" : "全部通过"}`,
    "",
    `系统：${report.system}。用时 ${seconds} 秒。`,
    "",
    `| 组 | ${HX_CHECK_OUTCOMES.map((outcome) => LABELS[outcome]).join(" | ")} |`,
    `|---|${HX_CHECK_OUTCOMES.map(() => "---:").join("|")}|`
  ];
  for (const [group, title] of HX_CHECK_GROUPS) {
    const items = report.items.filter((item) => item.group === group);
    if (items.length === 0)
      continue;
    const own = hxCheckCounts(items);
    lines.push(`| ${title} | ${HX_CHECK_OUTCOMES.map((outcome) => own[outcome]).join(" | ")} |`);
  }
  lines.push(`| **合计** | ${HX_CHECK_OUTCOMES.map((outcome) => `**${counts[outcome]}**`).join(" | ")} |`, "");
  lines.push(...itemTable("失败", report.items.filter((item) => item.outcome === "failed"), 80));
  lines.push(...itemTable("待看", report.items.filter((item) => item.outcome === "review"), 80));
  lines.push(...itemTable("测不了", report.items.filter((item) => item.outcome === "unavailable" && item.group !== "probe"), 60));
  const times = Object.entries(report.times);
  if (times.length > 0) {
    lines.push("### 用时（中位数，毫秒）", "", "| 做什么 | 毫秒 |", "|---|---:|");
    for (const [name, value] of times)
      lines.push(`| \`${name}\` | ${Math.round(value)} |`);
    lines.push("");
  }
  lines.push("### 这台机器上读、原样写回、真改、改回都通过的设置", "", report.verified.length > 0 ? report.verified.map((key) => `\`${key}\``).join("、") : "没有。", "");
  if (report.untestable.length > 0) {
    lines.push("### 这台机器测不了的设置（仍要在真机上自检）", "", report.untestable.map((key) => `\`${key}\``).join("、"), "");
  }
  return `${lines.join(`
`)}
`;
}
function text(value, limit) {
  return typeof value === "string" ? value.slice(0, limit) : "";
}
function count(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : 0;
}
function outcome(value) {
  return HX_CHECK_OUTCOMES.find((known) => known === value) ?? "failed";
}
function strings(value) {
  return (Array.isArray(value) ? value : []).flatMap((entry) => typeof entry === "string" ? [entry] : []);
}
function hxDecodeCheckReport(value) {
  if (!isDynamicRecord(value) || value.format !== 1 || typeof value.machine !== "string")
    return null;
  const items = (Array.isArray(value.items) ? value.items : []).flatMap((item) => {
    if (!isDynamicRecord(item) || typeof item.id !== "string")
      return [];
    const shot = text(item.shot, 300);
    return [
      {
        id: item.id.slice(0, 200),
        group: hxCheckGroup(item.id),
        outcome: outcome(item.outcome),
        detail: text(item.detail, 8000),
        ms: count(item.ms),
        ...shot ? { shot } : {}
      }
    ];
  });
  const times = {};
  if (isDynamicRecord(value.times)) {
    for (const [name, ms] of Object.entries(value.times))
      if (typeof ms === "number")
        times[name] = ms;
  }
  return {
    format: 1,
    machine: value.machine.slice(0, 80),
    platform: value.platform === "mac" || value.platform === "windows" ? value.platform : null,
    system: text(value.system, 400),
    startedAt: count(value.startedAt),
    finishedAt: count(value.finishedAt),
    items,
    times,
    verified: strings(value.verified),
    untestable: strings(value.untestable)
  };
}
function hxCheckVerdict(reports, expected) {
  const missing = expected.filter((machine) => !reports.some((report) => report.machine === machine));
  let failed = 0;
  let review = 0;
  const verified = { mac: [], windows: [] };
  const untestable = { mac: [], windows: [] };
  for (const report of reports) {
    const counts = hxCheckCounts(report.items);
    failed += counts.failed;
    review += counts.review;
  }
  for (const platform of ["mac", "windows"]) {
    const machines = reports.filter((report) => report.platform === platform);
    const keys = new Set(machines.flatMap((report) => [...report.verified, ...report.untestable]));
    for (const report of machines) {
      for (const item of report.items) {
        const match = /^setting\.([^.]+)\./u.exec(item.id);
        if (match?.[1])
          keys.add(match[1]);
      }
    }
    for (const key of [...keys].sort()) {
      const tested = machines.filter((report) => !report.untestable.includes(key));
      if (tested.length === 0)
        untestable[platform].push(key);
      else if (tested.every((report) => report.verified.includes(key)))
        verified[platform].push(key);
    }
  }
  const green = missing.length === 0 && failed === 0 && reports.length > 0;
  return { green, clean: green && review === 0, failed, review, missing, verified, untestable };
}
function hxCheckOverview(reports, expected) {
  const verdict = hxCheckVerdict(reports, expected);
  const ordered = [...reports].sort((left, right) => left.machine.localeCompare(right.machine));
  const headline = verdict.clean ? "全部通过，没有要人看的项" : verdict.green ? `没有失败，有 ${verdict.review} 项待看` : verdict.missing.length > 0 ? `有机器没有交回结果：${verdict.missing.join("、")}` : `有 ${verdict.failed} 项失败`;
  const lines = [`# HXBot 电脑操控：真系统检查`, "", `**结论：${headline}。**`, ""];
  if (ordered.length > 0) {
    lines.push(`| 组 | ${ordered.map((report) => report.machine).join(" | ")} |`, `|---|${ordered.map(() => "---").join("|")}|`);
    for (const [group, title] of HX_CHECK_GROUPS) {
      const cells = ordered.map((report) => {
        const own = hxCheckCounts(report.items.filter((item) => item.group === group));
        const total = HX_CHECK_OUTCOMES.reduce((sum, name) => sum + own[name], 0);
        if (total === 0)
          return "—";
        const parts = [`${own.passed}/${total}`];
        if (own.failed > 0)
          parts.push(`**失败 ${own.failed}**`);
        if (own.review > 0)
          parts.push(`待看 ${own.review}`);
        if (own.unavailable > 0)
          parts.push(`测不了 ${own.unavailable}`);
        return parts.join("，");
      });
      if (cells.some((value) => value !== "—"))
        lines.push(`| ${title} | ${cells.join(" | ")} |`);
    }
    lines.push("", "每格是“通过的项数 / 这一组的项数”。", "");
  }
  lines.push("## 可以标成“已验证”的设置", "");
  for (const [platform, name] of [
    ["mac", "macOS"],
    ["windows", "Windows"]
  ]) {
    const keys = verdict.verified[platform];
    lines.push(`- **${name}：**${keys.length > 0 ? keys.map((key) => `\`${key}\``).join("、") : "没有。"}`);
    if (verdict.untestable[platform].length > 0) {
      lines.push(`  - 没有一台机器测得了，仍要在真机上自检：${verdict.untestable[platform].map((key) => `\`${key}\``).join("、")}`);
    }
  }
  lines.push("", "规则：在这个系统的每一台测到它的机器上，读、原样写回、真改、改回全部通过，并且至少有一台机器测到了它。", "");
  for (const report of ordered)
    lines.push(hxCheckSummary(report));
  return `${lines.join(`
`)}
`;
}

// src/backend/hx-computer/realcheck-system.ts
var MAC_SETTINGS_PROCESS = "System Settings";
var NO_ASSISTIVE_ACCESS = /-25211|-1719|not allowed assistive access|assistive/iu;
var NOT_AUTHORIZED = /-1743|not authori[sz]ed to send apple events/iu;
function numbers(text) {
  return text.split(/[\s,]+/u).map((part) => Number(part)).filter((value) => Number.isInteger(value) && value > 0);
}
function macSystem(run) {
  const osascript = (script, timeoutMs = 15000) => run("/usr/bin/osascript", ["-e", script], { timeoutMs });
  return {
    async processIds(name) {
      const result = await run("/usr/bin/pgrep", ["-x", name], { timeoutMs: 1e4 });
      return result.code === 0 ? numbers(result.stdout) : [];
    },
    async stop(ids) {
      if (ids.length > 0)
        await run("/bin/kill", ids.map(String), { timeoutMs: 1e4 });
    },
    async settingsWindow() {
      const result = await osascript(`tell application "System Events" to tell process "${MAC_SETTINGS_PROCESS}" to get name of every window`);
      if (hxRunOk(result)) {
        const texts = result.stdout.trim().split(", ").filter((part) => part.length > 0);
        return { open: texts.length > 0, texts, raw: texts, blocked: false };
      }
      const blocked = NO_ASSISTIVE_ACCESS.test(result.stderr) || NOT_AUTHORIZED.test(result.stderr);
      const running = (await this.processIds(MAC_SETTINGS_PROCESS)).length > 0;
      return { open: running, texts: [], raw: [], blocked };
    },
    async closeSettings() {
      await run("/usr/bin/pkill", ["-x", MAC_SETTINGS_PROCESS], { timeoutMs: 1e4 });
    },
    async folderWindows() {
      const result = await osascript('tell application "Finder" to count windows');
      const value = Number(result.stdout.trim());
      return hxRunOk(result) && Number.isInteger(value) ? value : null;
    },
    async closeFolders() {
      await osascript('tell application "Finder" to close every window');
    },
    async screenshot(file) {
      return hxRunOk(await run("/usr/sbin/screencapture", ["-x", "-t", "jpg", file], { timeoutMs: 20000 }));
    },
    async describe() {
      const version = await run("/usr/bin/sw_vers", ["-productVersion"], { timeoutMs: 1e4 });
      const session = await run("/bin/launchctl", ["managername"], { timeoutMs: 1e4 });
      const manager = session.stdout.trim();
      return {
        system: `macOS ${version.stdout.trim() || "?"}`,
        desktop: manager === "Aqua",
        detail: `launchctl managername: ${manager || session.stderr.trim() || "no answer"}`
      };
    },
    async automation() {
      const result = await osascript('tell application "System Events" to get name of first process');
      if (hxRunOk(result))
        return { allowed: true, detail: `System Events answered: ${result.stdout.trim()}` };
      return {
        allowed: false,
        detail: NOT_AUTHORIZED.test(result.stderr) ? "This machine does not let scripts talk to System Events." : `System Events did not answer: ${result.stderr.trim().slice(0, 300)}`
      };
    },
    async accessibility() {
      const result = await osascript('tell application "System Events" to tell process "Finder" to count windows');
      if (hxRunOk(result))
        return { allowed: true, detail: `Finder has ${result.stdout.trim()} windows.` };
      return {
        allowed: false,
        detail: NO_ASSISTIVE_ACCESS.test(result.stderr) ? "This machine does not let scripts read the windows of other apps." : `The windows of Finder could not be read: ${result.stderr.trim().slice(0, 300)}`
      };
    }
  };
}
var WIN_SHOT = [
  "$hxStep = 'screenshot'; $hxShot = $false; try {",
  "Add-Type -AssemblyName System.Windows.Forms; Add-Type -AssemblyName System.Drawing;",
  "$hxArea = [System.Windows.Forms.SystemInformation]::VirtualScreen;",
  "$hxPicture = New-Object System.Drawing.Bitmap $hxArea.Width, $hxArea.Height;",
  "$hxDraw = [System.Drawing.Graphics]::FromImage($hxPicture);",
  "$hxDraw.CopyFromScreen($hxArea.Left, $hxArea.Top, 0, 0, $hxPicture.Size);",
  "$hxPicture.Save($env:HX_SHOT, [System.Drawing.Imaging.ImageFormat]::Jpeg);",
  "$hxDraw.Dispose(); $hxPicture.Dispose(); $hxShot = $true",
  "} catch { $hxShot = $false };",
  "if ($hxShot) { 'saved' } else { 'no' }"
].join(" ");
var WIN_MAX_ELEMENTS = 220;
var WIN_SETTINGS_WINDOW = [
  "$hxStep = 'settings-window';",
  "$hxNames = @(); $hxOpen = $false;",
  "$hxProcess = Get-Process -Name SystemSettings -ErrorAction SilentlyContinue | Select-Object -First 1;",
  "if ($hxProcess) { $hxOpen = $true; try {",
  "Add-Type -AssemblyName UIAutomationClient; Add-Type -AssemblyName UIAutomationTypes;",
  "$hxRoot = [System.Windows.Automation.AutomationElement]::RootElement;",
  "$hxOwn = New-Object System.Windows.Automation.PropertyCondition([System.Windows.Automation.AutomationElement]::ProcessIdProperty, $hxProcess.Id);",
  "foreach ($hxElement in $hxRoot.FindAll([System.Windows.Automation.TreeScope]::Descendants, $hxOwn)) {",
  "$hxName = [string]$hxElement.Current.Name;",
  "if ($hxName) { $hxNames += ($hxElement.Current.ControlType.ProgrammaticName -replace 'ControlType.', '') + '|' + $hxElement.Current.AutomationId + '|' + $hxName };",
  `if ($hxNames.Count -ge ${WIN_MAX_ELEMENTS}) { break } }`,
  "} catch { } };",
  "@{ open = $hxOpen; names = $hxNames } | ConvertTo-Json -Compress"
].join(" ");
function elementName(raw) {
  const first = raw.indexOf("|");
  const second = first < 0 ? -1 : raw.indexOf("|", first + 1);
  return (second < 0 ? raw : raw.slice(second + 1)).trim();
}
function jsonRecord(text) {
  let parsed;
  try {
    parsed = JSON.parse(text.replace(/^\uFEFF/u, "").trim());
  } catch {
    parsed = null;
  }
  return isDynamicRecord(parsed) ? parsed : null;
}
function windowsSystem(run) {
  const powershell = (script, env, timeoutMs = 30000) => {
    const command = hxPowerShell(script, env);
    return run(command.command, command.args, { timeoutMs, ...command.env ? { env: command.env } : {} });
  };
  return {
    async processIds(name) {
      const result = await powershell("$hxStep = 'pids'; @(Get-Process -Name $env:HX_NAME -ErrorAction SilentlyContinue | ForEach-Object { $_.Id }) -join ','", { HX_NAME: name });
      return hxRunOk(result) ? numbers(result.stdout) : [];
    },
    async stop(ids) {
      if (ids.length === 0)
        return;
      await powershell("$hxStep = 'stop'; $env:HX_IDS.Split(',') | ForEach-Object { Stop-Process -Id ([int]$_) -Force -ErrorAction SilentlyContinue }", { HX_IDS: ids.join(",") });
    },
    async settingsWindow() {
      const closed = { open: false, texts: [], raw: [], blocked: false };
      const result = await powershell(WIN_SETTINGS_WINDOW, undefined, 60000);
      if (!hxRunOk(result))
        return closed;
      const parsed = jsonRecord(result.stdout);
      if (!parsed)
        return closed;
      const list = Array.isArray(parsed.names) ? parsed.names : [parsed.names];
      const raw = list.flatMap((entry) => typeof entry === "string" && entry.trim() ? [entry.trim()] : []);
      const texts = raw.map(elementName).filter((name) => name.length > 0);
      return { open: parsed.open === true, texts, raw, blocked: false };
    },
    async closeSettings() {
      await powershell("$hxStep = 'close-settings'; Stop-Process -Name SystemSettings -Force -ErrorAction SilentlyContinue");
    },
    async folderWindows() {
      const result = await powershell("$hxStep = 'folder-windows'; @((New-Object -ComObject Shell.Application).Windows()).Count");
      const value = Number(result.stdout.trim());
      return hxRunOk(result) && Number.isInteger(value) ? value : null;
    },
    async closeFolders() {
      await powershell("$hxStep = 'close-folders'; @((New-Object -ComObject Shell.Application).Windows()) | ForEach-Object { $_.Quit() }");
    },
    async screenshot(file) {
      const result = await powershell(WIN_SHOT, { HX_SHOT: file });
      return hxRunOk(result) && result.stdout.trim() === "saved";
    },
    async describe() {
      const result = await powershell("$hxStep = 'describe'; $hxOs = Get-CimInstance Win32_OperatingSystem; $hxOs.Caption + ' ' + $hxOs.Version + ' | interactive=' + [Environment]::UserInteractive + ' | session=' + (Get-Process -Id $PID).SessionId + ' | culture=' + (Get-Culture).Name + ' | ui=' + (Get-UICulture).Name", undefined, 60000);
      const text = result.stdout.trim();
      const [system = "Windows ?"] = text.split(" | ");
      return {
        system: system.trim() || "Windows ?",
        desktop: /interactive=True/u.test(text),
        detail: text || result.stderr.trim().slice(0, 300) || "no answer"
      };
    },
    async automation() {
      return { allowed: true, detail: "Windows needs no permission for this." };
    },
    async accessibility() {
      return { allowed: true, detail: "Windows needs no permission for this." };
    }
  };
}
function hxRealSystem(platform, run) {
  return platform === "mac" ? macSystem(run) : windowsSystem(run);
}

// src/backend/hx-computer/selftest.ts
import { mkdir as mkdir2, readdir as readdir2, writeFile as writeFile2 } from "node:fs/promises";
import { arch, release, type } from "node:os";
import { join as join3 } from "node:path";
var MAC_EXTENSIONS = "/System/Library/ExtensionKit/Extensions";
var NOT_ALLOWED2 = /-1743|not authori[sz]ed to send apple events/iu;
var HX_MAC_OWN_PANES = "com.apple.systempreferences.";
var DETAIL_LIMIT = 8000;
function stamp(time) {
  return new Date(time).toISOString().replace(/[-:]/gu, "").replace(/\.\d+Z$/u, "Z");
}
async function systemText(host) {
  const base = `${type()} ${release()} ${arch()}`;
  if (host.catalog.platform === "mac") {
    const result = await host.run("/usr/bin/sw_vers", ["-productVersion"], { timeoutMs: 5000 });
    return hxRunOk(result) ? `macOS ${result.stdout.trim()} (${base})` : base;
  }
  if (host.catalog.platform === "windows") {
    const command = hxPowerShell("[string][Environment]::OSVersion.Version");
    const result = await host.run(command.command, command.args, { timeoutMs: 1e4 });
    return hxRunOk(result) ? `Windows ${result.stdout.trim()} (${base})` : base;
  }
  return base;
}
async function hxMacPanes(run, folder = MAC_EXTENSIONS) {
  const names = (await readdir2(folder)).filter((name) => name.endsWith(".appex")).sort();
  const here = new Set;
  for (const name of names) {
    const id = await hxMacBundleId(run, join3(folder, name));
    if (id)
      here.add(id);
  }
  return here;
}
async function hxSelfTest(host) {
  const startedAt = host.now();
  const items = [];
  const check = async (id, body) => {
    const began = host.now();
    let result;
    try {
      result = await body();
    } catch (error) {
      result = { outcome: "failed", detail: error instanceof Error ? error.message : "The check stopped." };
    }
    items.push({
      id,
      outcome: result.outcome,
      detail: result.detail.slice(0, DETAIL_LIMIT),
      ms: Math.max(0, host.now() - began)
    });
  };
  const platform = host.catalog.platform;
  const system = await systemText(host);
  if (platform === null) {
    items.push({ id: "platform", outcome: "skipped", detail: "The catalog works on macOS and Windows.", ms: 0 });
  } else {
    await check("catalog.apps", async () => {
      await host.catalog.rebuild();
      const status = await host.catalog.status();
      return status.apps > 0 ? { outcome: "passed", detail: `${status.apps} apps, ${status.pages} pages, ${status.settings} settings` } : { outcome: "failed", detail: "No app was found on this computer." };
    });
    await check("catalog.known-app", async () => {
      const name = platform === "mac" ? "Finder" : "Notepad";
      const found = await host.actions.find({ query: name, kinds: ["app"], limit: 3 });
      return found.status === "found" ? { outcome: "passed", detail: found.results.map((result) => result.title).join(", ") } : { outcome: "failed", detail: `${name} was not found among the apps.` };
    });
    await check("search.page", async () => {
      const found = await host.actions.find({ query: "蓝牙", kinds: ["page"], limit: 3 });
      return found.status === "found" && found.results[0]?.id === "page:bluetooth" ? { outcome: "passed", detail: found.results[0].title } : { outcome: "failed", detail: "Searching 蓝牙 did not give the Bluetooth page first." };
    });
    await check("open.page", async () => {
      const opened = await host.actions.open({ id: "page:about" });
      return opened.status === "opened" ? { outcome: "passed", detail: "The About page of the system settings was opened." } : { outcome: "failed", detail: "reason" in opened ? opened.reason : opened.status };
    });
    for (const seed of host.catalog.settingSeeds())
      await checkSetting(host, seed, check);
    if (platform === "mac") {
      await check("mac.settings-pages", async () => {
        const here = await hxMacPanes(host.run, host.macExtensions ?? MAC_EXTENSIONS);
        const wanted = host.catalog.pageSeeds().map((seed) => seed.address.slice(seed.address.indexOf(":") + 1));
        const own = wanted.filter((id) => id.startsWith(HX_MAC_OWN_PANES));
        const missing = wanted.filter((id) => !id.startsWith(HX_MAC_OWN_PANES) && !here.has(id));
        const found = wanted.length - own.length - missing.length;
        const detail = [
          `${found} of ${wanted.length} page addresses are settings panes of this Mac`,
          `not checked, part of System Settings itself: ${own.join(" ") || "none"}`,
          ...missing.length > 0 ? [`not among the panes of this Mac: ${missing.join(" ")}`] : [],
          `panes of this Mac: ${[...here].sort().join(" ") || "none could be read"}`
        ].join("; ");
        return { outcome: missing.length === 0 ? "passed" : "skipped", detail };
      });
    }
  }
  const finishedAt = host.now();
  const report = {
    platform,
    system,
    startedAt,
    finishedAt,
    items,
    passed: items.filter((item) => item.outcome === "passed").length,
    failed: items.filter((item) => item.outcome === "failed").length,
    skipped: items.filter((item) => item.outcome === "skipped").length,
    file: ""
  };
  report.file = await save(host, report);
  return report;
}
async function checkSetting(host, seed, check) {
  const run = (command) => host.run(command.command, command.args, { timeoutMs: 20000, ...command.env ? { env: command.env } : {} });
  const read = { value: null };
  await check(`setting.${seed.key}.read`, async () => {
    const result = await run(seed.read);
    if (NOT_ALLOWED2.test(result.stderr)) {
      return { outcome: "skipped", detail: "macOS has not allowed HXBot to control System Events yet." };
    }
    if (!hxRunOk(result)) {
      return {
        outcome: "failed",
        detail: `code ${result.code ?? "none"}: ${result.stderr.trim() || result.stdout.trim()}`
      };
    }
    read.value = seed.parse(result.stdout);
    return read.value === null ? { outcome: "skipped", detail: `No value right now: ${result.stdout.trim().slice(0, 200)}` } : { outcome: "passed", detail: read.value };
  });
  const before = read.value;
  if (before === null)
    return;
  await check(`setting.${seed.key}.write-same`, async () => {
    const written = await run(seed.write(before));
    if (NOT_ALLOWED2.test(written.stderr)) {
      return { outcome: "skipped", detail: "macOS has not allowed HXBot to control System Events yet." };
    }
    if (!hxRunOk(written)) {
      await host.catalog.disable(`setting:${seed.key}`);
      return {
        outcome: "failed",
        detail: `code ${written.code ?? "none"}: ${written.stderr.trim() || written.stdout.trim()}`
      };
    }
    const again = await run(seed.read);
    const after = hxRunOk(again) ? seed.parse(again.stdout) : null;
    const same = after !== null && (after === before || Math.abs(Number(after) - Number(before)) <= 1);
    if (same)
      await host.catalog.markChecked(`setting:${seed.key}`);
    else
      await host.catalog.disable(`setting:${seed.key}`);
    return same ? { outcome: "passed", detail: `${before} written, ${after} read back` } : { outcome: "failed", detail: `${before} written, ${after ?? "nothing"} read back` };
  });
}
async function save(host, report) {
  const name = `HXBot-self-test-${stamp(report.startedAt)}.json`;
  const data = host.dataFolder();
  const folders = [join3(host.home, "Downloads"), ...data ? [join3(data, "hx-computer")] : []];
  for (const folder of folders) {
    const file = join3(folder, name);
    try {
      await mkdir2(folder, { recursive: true });
      await writeFile2(file, `${JSON.stringify({ ...report, file }, null, 1)}
`, { mode: 384 });
      return file;
    } catch {}
  }
  return "";
}

// ../hx-agent/node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array, separator = "|") {
  return array.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}

class Cached {
  constructor(getter) {
    this._getter = getter;
    this._value = undefined;
  }
  get value() {
    const getter = this._getter;
    if (getter !== undefined) {
      this._value = getter();
      this._getter = undefined;
    }
    return this._value;
  }
}
function cached(getter) {
  return new Cached(getter);
}
function nullish(input) {
  return input === null || input === undefined;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function rawShape(def) {
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  return desc?.get ? desc.get.raw : desc?.value;
}
function sourceShape(schema) {
  return rawShape(schema._zod.def) ?? schema._zod.def.shape;
}
function deferProp(target, key, getter) {
  Object.defineProperty(target, key, {
    get() {
      const value = getter();
      assignProp(this, key, value);
      return value;
    },
    enumerable: true,
    configurable: true
  });
}
function putProp(target, key, value) {
  if (key in target)
    assignProp(target, key, value);
  else
    target[key] = value;
}
function mirrorShape(target, source, keys, wrap) {
  const raw = sourceShape(source);
  for (const key of keys) {
    const desc = Object.getOwnPropertyDescriptor(raw, key);
    if (!desc.enumerable)
      continue;
    if (desc.get) {
      deferProp(target, key, () => {
        const value = source._zod.def.shape[key];
        return wrap ? wrap(value, key) : value;
      });
    } else
      putProp(target, key, wrap ? wrap(desc.value, key) : desc.value);
  }
}
function mirrorProps(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    const desc = Object.getOwnPropertyDescriptor(source, key);
    if (!desc.enumerable)
      continue;
    if (desc.get)
      deferProp(target, key, () => source[key]);
    else
      putProp(target, key, desc.value);
  }
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === undefined)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== undefined) {
    if (params?.error !== undefined)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-340282346638528860000000000000000000000, 340282346638528860000000000000000000000],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const newShape = {};
  mirrorShape(newShape, schema, maskedKeys(schema, mask));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function maskedKeys(schema, mask) {
  const raw = sourceShape(schema);
  const keys = [];
  for (const key of Reflect.ownKeys(mask)) {
    if (!Object.getOwnPropertyDescriptor(raw, key)?.enumerable) {
      throw new Error(`Unrecognized key: "${String(key)}"`);
    }
    if (mask[key])
      keys.push(key);
  }
  return keys;
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const omitted = new Set(maskedKeys(schema, mask));
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)).filter((key) => !omitted.has(key)));
  return clone(schema, mergeDefs(currDef, { shape: newShape, checks: [] }));
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = sourceShape(schema);
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function extended(schema, shape) {
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)));
  mirrorProps(newShape, shape);
  return newShape;
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  return clone(schema, mergeDefs(schema._zod.def, { shape: extended(schema, shape) }));
}
function merge(a, b) {
  if (!b?._zod?.def) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const newShape = {};
  mirrorShape(newShape, a, Reflect.ownKeys(sourceShape(a)));
  mirrorShape(newShape, b, Reflect.ownKeys(sourceShape(b)));
  const def = mergeDefs(a._zod.def, {
    shape: newShape,
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class, schema, mask, name = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
  }
  const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), Class && ((value, key) => selected && !selected.has(key) ? value : new Class({ type: "optional", innerType: value })));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape, checks: [] }));
}
function required(Class, schema, mask) {
  const selected = mask ? new Set(maskedKeys(schema, mask)) : undefined;
  const newShape = {};
  mirrorShape(newShape, schema, Reflect.ownKeys(sourceShape(schema)), (value, key) => selected && !selected.has(key) ? value : new Class({ type: "nonoptional", innerType: value }));
  return clone(schema, mergeDefs(schema._zod.def, { shape: newShape }));
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex;i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a;
    (_a = iss).path ?? (_a.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function sizeCaps(defChecks) {
  const caps = [];
  for (const ch of defChecks ?? []) {
    const d = ch._zod.def;
    if (!/_(length|size)$|_equals$/.test(d.check))
      break;
    const max = d.maximum ?? d.length ?? d.size;
    if (max >= 0)
      caps.push([max, ch]);
  }
  return caps;
}
function attachSchema(issues, start, inst) {
  var _a;
  for (let i = start;i < issues.length; i++) {
    (_a = issues[i]).schema ?? (_a.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config) {
  var _a;
  const traits = iss.inst?._zod?.traits;
  if (traits?.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a = iss).schema ?? (_a.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
  const full = {};
  for (const k of Object.keys(iss)) {
    if (k === "inst" || k === "schema" || k === "continue" || k === "input" || k === "__proto__")
      continue;
    full[k] = iss[k];
  }
  full.path ?? (full.path = []);
  full.message = message;
  if (ctx?.reportInput) {
    full.input = iss.input;
  }
  return full;
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  const units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0;i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function members(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide(inst, key, value) {
  return own(inst, key, value, false);
}
function derived(computes, table) {
  for (const key in computes) {
    const compute = computes[key];
    Object.defineProperty(table, key, {
      configurable: true,
      enumerable: true,
      get() {
        return own(this, key, compute(this));
      },
      set(value) {
        own(this, key, value);
      }
    });
  }
  return table;
}
function defineBound(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn : own(this, key, fn.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? undefined : proto;
}
var installing;
var broke = false;
var breaker = {
  configurable: true,
  get() {
    broke = true;
    return;
  }
};
function defineLazyInternal(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = undefined;
    return;
  }
  installing = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker);
      const outer = broke;
      broke = false;
      try {
        const value = compute(this);
        if (broke)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke = broke || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke = broke || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  const proto = claim(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: undefined };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
var CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  const fn = () => value;
  fn[CONSTANT_CATCH] = true;
  return fn;
}

// ../hx-agent/node_modules/zod/v4/core/core.js
var _a;
var _zodDesc = { value: undefined, enumerable: false };
var _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  const E = _E;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition;
      }
      try {
        return new Definition;
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition;
}
function $constructor(name, initializer, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _;
    this.traits = new Set;
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && new WeakSet;
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = undefined;
      }
    } else if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer(inst, def);
    if (initialized) {
      const own = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up = own;
      while (up && up !== ctorProto)
        up = Object.getPrototypeOf(up);
      const target = up ?? own;
      if (!initialized.has(target)) {
        initialized.add(target);
        members(target, protoMembers);
      }
    }
    const proto = _.prototype;
    for (const k in proto) {
      if (!Object.prototype.hasOwnProperty.call(proto, k))
        continue;
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;

  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    const inst = params?.Parent ? newError(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn of deferred) {
        fn();
      }
      inst._zod.deferred = undefined;
    }
    const pp = globalThis.__zod_globalConfig?.postProcessor;
    if (pp)
      pp(inst);
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}

class $ZodEncodeError extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
}
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
// ../hx-agent/node_modules/zod/v4/core/errors.js
function _getMessage() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
  return internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
var _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: true,
  configurable: true
};
var _issuesDesc = { value: undefined, enumerable: false };
var _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  _issuesDesc.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc);
  _issuesDesc.value = undefined;
  Object.defineProperty(inst, "message", _messageDesc);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString.has(proto)) {
    _installedToString.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, undefined, {
  Parent: Error
});
function node(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError(error, mapper = (issue) => issue.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error.issues) {
    if (sub.path.length > 0) {
      node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error, mapper = (issue) => issue.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error, path = []) => {
    for (const issue of error.issues) {
      if (issue.code === "invalid_union" && issue.errors.length) {
        issue.errors.map((issues) => processError({ issues }, [...path, ...issue.path]));
      } else if (issue.code === "invalid_key") {
        processError({ issues: issue.issues }, [...path, ...issue.path]);
      } else if (issue.code === "invalid_element") {
        processError({ issues: issue.issues }, [...path, ...issue.path]);
      } else {
        const fullpath = [...path, ...issue.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el)) {
              Object.defineProperty(curr, el, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node = curr[el];
            if (terminal) {
              node._errors.push(mapper(issue));
            }
            curr = node;
            i++;
          }
        }
      }
    }
  };
  processError(error);
  return fieldErrors;
}

// ../hx-agent/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse = (_Err) => {
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError;
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _parseAsync = (_Err) => {
  const fn = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
function failure(Err, issues, ctx) {
  let error;
  return {
    success: false,
    get error() {
      if (!error) {
        error = new Err(issues.map((iss) => finalizeIssue(iss, ctx, config())));
        issues = undefined;
        ctx = undefined;
      }
      return error;
    },
    set error(e) {
      error = e;
      issues = undefined;
      ctx = undefined;
    }
  };
}
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? failure(_Err, result.issues, ctx) : { success: true, data: result.value };
};
var COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
var COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
var validate = (schema, value, _ctx) => {
  const validator = schema._zod.bag.validator;
  if (validator !== undefined) {
    if (validator(value) !== COMPILE_INVALID)
      return true;
    if (validator.definite === true && _ctx === undefined)
      return false;
  }
  return validateFallback(schema, value, _ctx);
};
function validateFallback(schema, value, _ctx) {
  const ctx = _ctx ? { ..._ctx, async: false, abortEarly: true } : { async: false, abortEarly: true };
  const fallbackRun = schema._zod.bag.fallbackRun;
  let result;
  if (fallbackRun) {
    ctx[COMPILE_FALLBACK] = true;
    result = fallbackRun({ value, issues: [] }, ctx);
  } else {
    result = schema._zod.run({ value, issues: [] }, ctx);
  }
  if (result instanceof Promise) {
    throw new $ZodAsyncError;
  }
  return result.issues.length === 0;
}
var validateAsync = async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true, abortEarly: true } : { async: true, abortEarly: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length === 0;
};
var _encode = (_Err) => {
  const parse = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decode = (_Err) => {
  const parse = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    return parse(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _encodeAsync = (_Err) => {
  const parseAsync = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decodeAsync = (_Err) => {
  const parseAsync = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};
// ../hx-agent/node_modules/zod/v4/core/regexes.js
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version) => {
  if (!version)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji = `^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var anyString = /^[\s\S]{0,}$/;
var number = /^-?\d+(?:\.\d+)?$/;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;

// ../hx-agent/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a = inst._zod).onattach ?? (_a.onattach = []);
});
var _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== undefined;
};
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? def.value !== BigInt(0) && payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a;
  $ZodCheck.init(inst, def);
  (_a = inst._zod.def).when ?? (_a.when = _whenHasLength);
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a, _b;
  $ZodCheck.init(inst, def);
  if (def.pattern)
    (_a = inst._zod).check ?? (_a.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {});
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// ../hx-agent/node_modules/zod/v4/core/doc.js
class Doc {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  indented(fn) {
    this.indent += 1;
    try {
      fn(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split(`
`).filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = this?.content ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join(`
`)}
};`);
    return factory(...Object.values(this.closed));
  }
}

// ../hx-agent/node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 6,
  patch: 7
};

// ../hx-agent/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError;
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return checkResult.then((checkResult) => inst._zod.parse(checkResult, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary) => {
            return handleCanaryResult(canary, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError;
        return result.then((result) => runChecks(result, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
});
var toStandardResult = (r, ctx) => r.issues.length ? { issues: r.issues.map((iss) => finalizeIssue(iss, ctx, config())) } : { value: r.value };
async function validateAsync2(inst, value) {
  const ctx = { async: true };
  return toStandardResult(await inst._zod.run({ value, issues: [] }, ctx), ctx);
}
function standardProps(inst) {
  return {
    validate: (value) => {
      const ctx = { async: false };
      try {
        const r = inst._zod.run({ value, issues: [] }, ctx);
        if (!(r instanceof Promise))
          return toStandardResult(r, ctx);
      } catch (_) {}
      return validateAsync2(inst, value);
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = def.pattern ?? anyString;
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_) {}
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === undefined)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var URL_BAD_FORMAT = 1;
var URL_UNPARSEABLE = 2;
function canParseURL(input) {
  try {
    if (typeof URL !== "undefined" && typeof URL.canParse === "function")
      return URL.canParse(input);
    new URL(input);
    return true;
  } catch {
    return false;
  }
}
function validateURL(trimmed, def) {
  if (!("normalize" in def) && !("hostname" in def) && !("protocol" in def)) {
    return canParseURL(trimmed) || URL_UNPARSEABLE;
  }
  return parseURLObject(trimmed, def);
}
function parseURLObject(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT;
  }
  try {
    if (typeof URL !== "undefined") {
      const URLStatic = URL;
      if (typeof URLStatic.parse === "function")
        return URLStatic.parse(trimmed) ?? URL_UNPARSEABLE;
    }
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url, hostname) {
  hostname.lastIndex = 0;
  return hostname.test(url.hostname);
}
function urlProtocolOk(url, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url.protocol.endsWith(":") ? url.protocol.slice(0, -1) : url.protocol);
}
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url = validateURL(trimmed, def);
      if (url === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url === true) {
        payload.value = stripTabAndNewline(trimmed);
        return;
      }
      if (def.hostname && !urlHostnameOk(url, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk(url, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url.href : stripTabAndNewline(trimmed);
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== undefined && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === undefined ? nanoid : nanoidOfLength(def.length));
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
});
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  if (!ipv6Alphabet.test(value))
    return false;
  return canParseURL(`http://[${value}]`);
}
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidIPv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv6(address);
}
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var base64Charset = /^[0-9a-zA-Z+/]*={0,2}$/;
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64Charset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var base64urlCharset = /^[A-Za-z0-9_-]*$/;
function isValidBase64URL(data) {
  if (!base64urlCharset.test(data))
    return false;
  const base64 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64urlCharset);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {}
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : undefined : undefined;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function capSize(inst, size) {
  const caps = sizeCaps(inst._zod.def.checks);
  if (!caps.length)
    return;
  const cap = Math.min(...caps.map((c) => c[0]));
  const parse = inst._zod.parse;
  inst._zod.parse = (payload, ctx) => {
    const n = size(payload.value);
    if (n > cap && !ctx?.skipChecks && ctx?.direction !== "backward") {
      for (const [max, ch] of sizeCaps(inst._zod.def.checks)) {
        if (n > max && ch._zod.def.when(payload)) {
          const start = payload.issues.length;
          ch._zod.check(payload);
          payload.issues[start].continue = false;
          attachSchema(payload.issues, start, inst);
          return payload;
        }
      }
    }
    return parse(payload, ctx);
  };
}
var arraySize = (input) => Array.isArray(input) ? input.length : -1;
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  const memo = globalConfig.memoizer;
  memo?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo ? memo.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    const abortEarly = ctx?.abortEarly;
    for (let i = 0;i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result) => handleArrayResult(result, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
        if (abortEarly && result.issues.length !== 0 && aborted(result))
          break;
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
  capSize(inst, arraySize);
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== undefined && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && optin === undefined) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: undefined,
        path: [key]
      });
    }
    return;
  }
  if (result.value === undefined) {
    if (isPresent || optin === "defaulted" && !isOptionalOut) {
      final.value[key] = undefined;
    }
  } else {
    final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k of allKeys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst, abortEarly) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  let seen = 0;
  for (const key in input) {
    if (abortEarly && payload.issues.length !== seen) {
      if (aborted(payload, seen))
        break;
      seen = payload.issues.length;
    }
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t === "never")
        unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  const sh = desc?.get ? desc.get.raw : def.shape ?? {};
  if (sh) {
    const get = () => {
      const newSh = { ...sh };
      Object.defineProperty(def, "shape", { value: newSh });
      get.raw = newSh;
      return newSh;
    };
    get.raw = sh;
    Object.defineProperty(def, "shape", { get });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp(propValues, key, new Set);
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== undefined)
          propValues[key].add(undefined);
      }
    }
    return propValues;
  });
  const isObject2 = isObject;
  const catchall = def.catchall;
  let value;
  const memo = globalConfig.memoizer;
  memo?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo ? memo.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    const abortEarly = ctx?.abortEarly;
    let seen = payload.issues.length;
    for (const key of value.allKeys) {
      if (abortEarly && payload.issues.length !== seen) {
        if (aborted(payload, seen))
          break;
        seen = payload.issues.length;
      }
      if (key === "__proto__")
        continue;
      const el = shape[key];
      const optin = el._zod.optin;
      const optout = el._zod.optout;
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r) => handlePropertyResult(r, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst, abortEarly === true);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const memo = globalConfig.memoizer;
  const generateFastpass = (shape) => {
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc(["payload", "ctx"], { shape, inst, memo, syms });
    const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    const prefixStr = (id, k) => `
          let ${id}_ab = false;
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${id}_ab = true;
          }
          if (${id}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    doc.write(`const input = payload.value;`);
    const ids = Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id = ids[key];
      const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
      const isPresent = `${k} in input`;
      const schema = shape[key];
      const optin = schema?._zod?.optin;
      const isOptionalIn = optin !== undefined;
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(k)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
      `);
        if (optin === "defaulted") {
          doc.write(`newResult[${k}] = ${id}.value;`);
        } else {
          doc.write(`
        if (${id}.value !== undefined || ${isPresent}) {
          newResult[${k}] = ${id}.value;
        }
      `);
        }
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject2 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval2 = allowsEval;
  const fastEnabled = jit && allowsEval2.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst, ctx?.abortEarly === true);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== undefined) ? "optional" : undefined);
  defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : undefined);
  defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results) => {
      return handleUnionResults(results, payload, inst, ctx);
    });
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left, right]) => {
        return handleIntersectionResults(payload, left, right);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0;index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = new Map;
  let unrecIssue;
  const keyIssues = new Map;
  const collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      const k = String(iss.path[0]);
      if (!keyIssues.has(k))
        keyIssues.set(k, iss);
      keys = [k];
    } else {
      return false;
    }
    for (const k of keys) {
      if (!unrecKeys.has(k))
        unrecKeys.set(k, {});
      unrecKeys.get(k)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k of bothKeys) {
      if (!aggregated.includes(k) && keyIssues.has(k))
        result.issues.push(keyIssues.get(k));
    }
  }
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ` + `${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  defineLazyInternal(inst, "pattern", (zod) => {
    const patternValues = getEnumValues(zod.def.entries).filter((k) => propertyKeyTypes.has(typeof k));
    return new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  });
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  globalConfig.memoizer?.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output) => {
        payload.value = output;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError;
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(payload, result) {
  payload.value = result.issues.length ? undefined : result.value;
  return payload;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? new Set([...values, undefined]) : undefined;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === undefined) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result) => handleOptionalResult(payload, result));
      return handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : undefined;
  });
  defineLazyInternal(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? new Set([...zod.def.innerType._zod.values, null]) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result) => handleDefaultResult(result, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === undefined) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === undefined) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== undefined)) : undefined;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result) => handleNonOptionalResult(result, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === undefined) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  });
  return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result) => handleCatchResult(payload, result, def, ctx));
    }
    return handleCatchResult(payload, result, def, ctx);
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right) => handlePipeResult(right, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left) => handlePipeResult(left, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r) => handleRefineResult(r, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      path: [...inst._zod.def.path ?? []],
      continue: !inst._zod.def.abort
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
// ../hx-agent/node_modules/zod/v4/core/memoizer.js
class $ZodCyclicError extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
}
var STATE = "~memo";
var NO_ISSUES = [];
function isRef(value) {
  return value !== null && typeof value === "object";
}
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive = /* @__PURE__ */ new WeakMap;
var NONE = 0;
var ASSUMED = 1;
var PROVEN = 2;
function isRecursive(inst, stack, resolve) {
  const cached = recursive.get(inst);
  if (cached !== undefined)
    return cached ? PROVEN : NONE;
  if (stack.has(inst))
    return PROVEN;
  stack.add(inst);
  let result = NONE;
  const check = (child) => {
    if (result !== PROVEN && child?._zod) {
      const answer = isRecursive(child, stack, resolve);
      if (answer > result)
        result = answer;
    }
  };
  const shape = (sh, spread) => {
    let answer = NONE;
    for (const key of Reflect.ownKeys(sh)) {
      const desc = Object.getOwnPropertyDescriptor(sh, key);
      if (spread && !desc.enumerable)
        continue;
      const child = desc.get ? ASSUMED : desc.value?._zod ? isRecursive(desc.value, stack, resolve) : NONE;
      if (child > answer)
        answer = child;
    }
    return answer;
  };
  const merge = (answer) => {
    if (answer > result)
      result = answer;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      const raw = rawShape(def);
      merge(raw ? shape(raw, true) : ASSUMED);
      check(def.catchall);
      break;
    }
    case "array":
      check(def.element);
      break;
    case "tuple":
      for (const el of def.items)
        check(el);
      check(def.rest);
      break;
    case "record":
    case "map":
      check(def.keyType);
      check(def.valueType);
      break;
    case "set":
      check(def.valueType);
      break;
    case "union":
      for (const el of def.options)
        check(el);
      break;
    case "intersection":
      check(def.left);
      check(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check(def.innerType);
      break;
    case "pipe":
      check(def.in);
      check(def.out);
      break;
    case "function":
      check(def.input);
      check(def.output);
      break;
    case "lazy": {
      const inner = def._cachedInner ?? (resolve ? inst._zod.innerType : undefined);
      merge(inner ? isRecursive(inner, stack, false) : ASSUMED);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check(value);
        else if (Array.isArray(value))
          for (const el of value)
            check(el);
      }
    }
  }
  stack.delete(inst);
  return settle(inst, result);
}
function settle(inst, answer) {
  if (answer !== ASSUMED)
    recursive.set(inst, answer === PROVEN);
  return answer;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = new WeakMap;
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
var handoff;
var open = [];
var memo = {
  alloc(_inst, payload, empty) {
    const bucket = handoff;
    if (!bucket)
      return empty;
    handoff = undefined;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty;
  },
  guard(inst) {
    var _a;
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError;
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a;
    let isRecursiveInst;
    let rechecked = false;
    let lastCtx;
    let lastBucket;
    (_a = inst._zod).deferred ?? (_a.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === undefined) {
          const walked = isRecursive(inst, new Set, false);
          if (walked === NONE) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
          if (walked === PROVEN || rechecked)
            isRecursiveInst = true;
          else
            rechecked = true;
        }
        const input = payload.value;
        if (!isRef(input))
          return base(payload, ctx);
        let state = ctx[STATE];
        if (!state) {
          state = { buckets: new WeakMap, backEdges: undefined };
          ctx[STATE] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = new WeakSet);
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff = bucket;
        const depth = open.length;
        const result = base(payload, ctx);
        handoff = undefined;
        const entry = open.length > depth ? open.pop() : undefined;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  const backEdges = ctx[STATE]?.backEdges;
  return backEdges !== undefined && isRef(value) && backEdges.has(value);
}
// ../hx-agent/node_modules/zod/v4/locales/en.js
var error = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    nan: "NaN"
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue) => {
    switch (issue.code) {
      case "invalid_type": {
        const expected = getTypeName(issue.expected);
        const receivedType = parsedType(issue.input);
        const received = getTypeName(receivedType, issue.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue.values, "|")}`;
      case "too_big": {
        const adj = issue.exact ? "exactly " : issue.inclusive ? "<=" : "<";
        const sizing = getSizing(issue.origin);
        if (sizing)
          return `Too big: expected ${issue.origin ?? "value"} to have ${adj}${issue.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue.origin ?? "value"} to be ${adj}${issue.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue.exact ? "exactly " : issue.inclusive ? ">=" : ">";
        const sizing = getSizing(issue.origin);
        if (sizing) {
          return `Too small: expected ${issue.origin} to have ${adj}${issue.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue.origin} to be ${adj}${issue.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue.keys.length > 1 ? "s" : ""}: ${joinValues(issue.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue.origin}`;
      case "invalid_union":
        if (issue.options && Array.isArray(issue.options) && issue.options.length > 0) {
          const opts = issue.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error()
  };
}
// ../hx-agent/node_modules/zod/v4/core/registries.js
var _a2;
class $ZodRegistry {
  constructor() {
    this._map = new WeakMap;
    this._idmap = new Map;
  }
  add(schema, ..._meta) {
    const meta = _meta[0];
    this._map.set(schema, meta);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.set(meta.id, schema);
    }
    return this;
  }
  clear() {
    this._map = new WeakMap;
    this._idmap = new Map;
    return this;
  }
  remove(schema) {
    const meta = this._map.get(schema);
    if (meta && typeof meta === "object" && "id" in meta) {
      this._idmap.delete(meta.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : undefined;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
}
function registry() {
  return new $ZodRegistry;
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;
// ../hx-agent/node_modules/zod/v4/core/api.js
function snapshotChecks(def) {
  if (def.checks)
    def.checks = [...def.checks];
  return def;
}
function _string(Class, params) {
  return new Class(snapshotChecks({ type: "string", ...normalizeParams(params) }));
}
function _email(Class, params) {
  return new Class({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _guid(Class, params) {
  return new Class({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuid(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _uuidv4(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
function _uuidv6(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
function _uuidv7(Class, params) {
  return new Class({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
function _url(Class, params) {
  return new Class({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _emoji2(Class, params) {
  return new Class({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _nanoid(Class, params) {
  return new Class({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid(Class, params) {
  return new Class({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cuid2(Class, params) {
  return new Class({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ulid(Class, params) {
  return new Class({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _xid(Class, params) {
  return new Class({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ksuid(Class, params) {
  return new Class({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv4(Class, params) {
  return new Class({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _ipv6(Class, params) {
  return new Class({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv4(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _cidrv6(Class, params) {
  return new Class({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64(Class, params) {
  return new Class({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _base64url(Class, params) {
  return new Class({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _e164(Class, params) {
  return new Class({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _jwt(Class, params) {
  return new Class({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
function _isoDateTime(Class, params) {
  return new Class({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDate(Class, params) {
  return new Class({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _isoTime(Class, params) {
  return new Class({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
function _isoDuration(Class, params) {
  return new Class({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
function _number(Class, params) {
  return new Class(snapshotChecks({ type: "number", checks: [], ...normalizeParams(params) }));
}
function _int(Class, params) {
  return new Class({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
function _unknown(Class) {
  return new Class({
    type: "unknown"
  });
}
function _never(Class, params) {
  return new Class({
    type: "never",
    ...normalizeParams(params)
  });
}
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
function _normalize(form) {
  return _overwrite((input) => input.normalize(form));
}
function _trim() {
  return _overwrite((input) => input.trim());
}
function _toLowerCase() {
  return _overwrite((input) => input.toLowerCase());
}
function _toUpperCase() {
  return _overwrite((input) => input.toUpperCase());
}
function _slugify() {
  return _overwrite((input) => slugify(input));
}
function _array(Class, element, params) {
  return new Class({
    type: "array",
    element,
    ...normalizeParams(params)
  });
}
function _refine(Class, fn, _params) {
  const schema = new Class({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
function _superRefine(fn, params) {
  const ch = _check((payload) => {
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, ch._zod.def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}
// ../hx-agent/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {}),
    io: params?.io ?? "output",
    counter: 0,
    seen: new Map,
    sharedDefsExtractedFor: undefined,
    sharedEmitDoneFor: undefined,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? undefined
  };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === undefined || result === "throw")
    throw new Error(message);
  Object.assign(json, result);
  return true;
}
function processSchema(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = undefined;
  ctx.sharedEmitDoneFor = undefined;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      processSchema(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta = ctx.metadataRegistry.get(schema);
  if (meta)
    assignProps(result.schema, meta);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a = result.schema).default ?? (_a.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = new Map;
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id) => id);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema = seen.schema;
    for (const key in schema) {
      delete schema[key];
    }
    schema.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== undefined)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS = new Set(["type", "properties", "required", "additionalProperties"]);
var UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  const extra = member.additionalProperties;
  if (extra === undefined || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects(members) {
  const objects = [];
  for (const member of members) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required = new Set;
  for (const object of objects) {
    for (const key in object.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = other.properties?.[key] ?? undeclaredConstraint(other);
        if (part === null || part === undefined)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (const key of object.required ?? [])
      required.add(key);
  }
  const folded = { type: "object", properties };
  if (required.size)
    folded.required = [...required];
  if (objects.every((object) => object.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object of objects) {
      const constraint = undeclaredConstraint(object);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union = unions[0];
    const keyword = UNION_KEYS.find((k) => Array.isArray(union[k]));
    if (Object.keys(union).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union);
    const branches = union[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps(json, folded);
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema = seen.def ?? seen.schema;
    const _cached = { ...schema };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema.allOf = schema.allOf ?? [];
        schema.allOf.push(refSchema);
      } else {
        assignProps(schema, refSchema);
      }
      assignProps(schema, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = new Map;
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {}
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== undefined && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {} else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: new Set };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  processSchema(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
// ../hx-agent/node_modules/zod/v4/core/json-schema-processors.js
var narrowMin = (agg, key, value) => {
  if (agg[key] === undefined || value > agg[key])
    agg[key] = value;
};
var narrowMax = (agg, key, value) => {
  if (agg[key] === undefined || value < agg[key])
    agg[key] = value;
};
var narrowBoth = (agg, value) => {
  narrowMin(agg, "minimum", value);
  narrowMax(agg, "maximum", value);
};
var addDivisor = (agg, value) => {
  agg.multipleOf ?? (agg.multipleOf = []);
  if (!agg.multipleOf.includes(value))
    agg.multipleOf.push(value);
};
var addPattern = (agg, pattern) => {
  agg.patterns ?? (agg.patterns = new Set);
  agg.patterns.add(pattern);
};
var intersectMime = (agg, mime) => {
  agg.mime = agg.mime ? agg.mime.filter((m) => mime.includes(m)) : [...mime];
};
var setFormat = (agg, format) => {
  agg.format = format;
  if (format.includes("int"))
    agg.isInt = true;
};
var minContributor = (agg, def) => narrowMin(agg, "minimum", def.minimum);
var maxContributor = (agg, def) => narrowMax(agg, "maximum", def.maximum);
var formatContributor = (ranges) => (agg, def) => {
  setFormat(agg, def.format);
  const [minimum, maximum] = ranges[def.format];
  narrowMin(agg, "minimum", minimum);
  narrowMax(agg, "maximum", maximum);
};
var contributors = {
  greater_than: (agg, def) => narrowMin(agg, def.inclusive ? "minimum" : "exclusiveMinimum", def.value),
  less_than: (agg, def) => narrowMax(agg, def.inclusive ? "maximum" : "exclusiveMaximum", def.value),
  multiple_of: (agg, def) => addDivisor(agg, def.value),
  number_format: formatContributor(NUMBER_FORMAT_RANGES),
  bigint_format: formatContributor(BIGINT_FORMAT_RANGES),
  min_length: minContributor,
  max_length: maxContributor,
  length_equals: (agg, def) => narrowBoth(agg, def.length),
  min_size: minContributor,
  max_size: maxContributor,
  size_equals: (agg, def) => narrowBoth(agg, def.size),
  string_format: (agg, def) => {
    setFormat(agg, def.format);
    if (def.pattern)
      addPattern(agg, def.pattern);
    if (def.format === "base64" || def.format === "base64url")
      agg.contentEncoding = def.format;
    if (def.local || def.precision === -1)
      agg.laxFormat = true;
  },
  mime_type: (agg, def) => intersectMime(agg, def.mime)
};
function aggregateChecks(schema) {
  const agg = {};
  const def = schema._zod.def;
  const list = schema._zod.traits.has("$ZodCheck") ? [schema, ...def.checks ?? []] : def.checks ?? [];
  for (const ch of list)
    contributors[ch._zod.def.check]?.(agg, ch._zod.def);
  const bag = schema._zod.bag;
  if (bag.minimum !== undefined)
    narrowMin(agg, "minimum", bag.minimum);
  if (bag.exclusiveMinimum !== undefined)
    narrowMin(agg, "exclusiveMinimum", bag.exclusiveMinimum);
  if (bag.maximum !== undefined)
    narrowMax(agg, "maximum", bag.maximum);
  if (bag.exclusiveMaximum !== undefined)
    narrowMax(agg, "exclusiveMaximum", bag.exclusiveMaximum);
  if (bag.multipleOf !== undefined)
    addDivisor(agg, bag.multipleOf);
  if (bag.format !== undefined) {
    agg.format ?? (agg.format = bag.format);
    if (bag.format.includes("int"))
      agg.isInt = true;
  }
  if (bag.mime)
    intersectMime(agg, bag.mime);
  for (const pattern of bag.patterns ?? [])
    addPattern(agg, pattern);
  return agg;
}
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
};
var exactPatterns = new Map([
  [base64Charset, base64],
  [base64urlCharset, base64url]
]);
var exactPattern = (p) => exactPatterns.get(p) ?? p;
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format) {
    json.format = formatMap[format] ?? format;
    if (json.format === "")
      delete json.format;
    if (format === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns].map(exactPattern);
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const { minimum, maximum, multipleOf, exclusiveMaximum, exclusiveMinimum, isInt } = aggregateChecks(schema);
  json.type = isInt ? "integer" : "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json.maximum = maximum;
  }
  if (multipleOf) {
    const divisors = new Set;
    for (const divisor of multipleOf) {
      if (Number.isFinite(divisor) && divisor !== 0)
        divisors.add(Math.abs(divisor));
      else
        handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${divisor} cannot be represented in JSON Schema`);
    }
    const [first, ...rest] = divisors;
    if (first !== undefined)
      json.multipleOf = first;
    if (rest.length)
      json.allOf = [...json.allOf ?? [], ...rest.map((m) => ({ multipleOf: m }))];
  }
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = aggregateChecks(schema);
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = processSchema(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp(json.properties, key, processSchema(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const requiredKeys = [];
  for (const key of Object.keys(shape)) {
    const field = def.shape[key];
    if (ctx.io === "input" ? inputOptin(field) === undefined : field._zod.optout === undefined) {
      requiredKeys.push(key);
    }
  }
  if (requiredKeys.length > 0) {
    json.required = requiredKeys;
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = processSchema(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => processSchema(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = processSchema(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = processSchema(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => ("allOf" in val) && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
var pendingRecords = new WeakMap;
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json.default = value;
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json._prefault = value;
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(undefined);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  processSchema(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  processSchema(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
// ../hx-agent/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos.has(proto))
    return;
  _installedErrorProtos.add(proto);
  _lazyMethod(proto, "format", (self) => (mapper) => formatError(self, mapper));
  _lazyMethod(proto, "flatten", (self) => (mapper) => flattenError(self, mapper));
  _lazyMethod(proto, "addIssue", (self) => (issue) => {
    self.issues.push(issue);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self) => (issues) => {
    self.issues.push(...issues);
    self.message = JSON.stringify(self.issues, jsonStringifyReplacer, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, undefined, {
  Parent: Error
});

// ../hx-agent/node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// ../hx-agent/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
  if (!globalConfig.localeError)
    config(en_default());
}
function _ensureDefaultMemoizer() {
  if (!globalConfig.memoizer)
    config({ memoizer: memoizer() });
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  _ensureDefaultLocale();
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta) {
    reg.add(this, meta);
    return this;
  },
  refine(check, params) {
    return this.check(refine(check, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    const cl = this.clone();
    globalRegistry.add(cl, { description });
    return cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    const cl = this.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  },
  isOptional() {
    return this.safeParse(undefined).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  get "~standard"() {
    return hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  },
  parse: function _parse(data, params) {
    return parse2(this, data, params, { callee: _parse });
  },
  parseAsync: async function _parseAsync(data, params) {
    return await parseAsync(this, data, params, { callee: _parseAsync });
  },
  safeParse(data, params) {
    return safeParse(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync(this, data, params);
  },
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    own(this, "spa", value);
  },
  validate(data, params) {
    return validate(this, data, params);
  },
  validateAsync(data, params) {
    return validateAsync(this, data, params);
  },
  encode: function _encode(data, params) {
    return encode(this, data, params, { callee: _encode });
  },
  decode: function _decode(data, params) {
    return decode(this, data, params, { callee: _decode });
  },
  encodeAsync: async function _encodeAsync(data, params) {
    return await encodeAsync(this, data, params, { callee: _encodeAsync });
  },
  decodeAsync: async function _decodeAsync(data, params) {
    return await decodeAsync(this, data, params, { callee: _decodeAsync });
  },
  safeEncode(data, params) {
    return safeEncode(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  get description() {
    return globalRegistry.get(this)?.description;
  },
  get _def() {
    return this._zod.def;
  }
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
}, /* @__PURE__ */ derived({
  format: (inst) => aggregateChecks(inst).format ?? null,
  minLength: (inst) => aggregateChecks(inst).minimum ?? null,
  maxLength: (inst) => aggregateChecks(inst).maximum ?? null
}, {
  regex(...args) {
    return this.check(_regex(...args));
  },
  includes(...args) {
    return this.check(_includes(...args));
  },
  startsWith(...args) {
    return this.check(_startsWith(...args));
  },
  endsWith(...args) {
    return this.check(_endsWith(...args));
  },
  min(...args) {
    return this.check(_minLength(...args));
  },
  max(...args) {
    return this.check(_maxLength(...args));
  },
  length(...args) {
    return this.check(_length(...args));
  },
  nonempty(...args) {
    return this.check(_minLength(1, ...args));
  },
  lowercase(params) {
    return this.check(_lowercase(params));
  },
  uppercase(params) {
    return this.check(_uppercase(params));
  },
  trim() {
    return this.check(_trim());
  },
  normalize(...args) {
    return this.check(_normalize(...args));
  },
  toLowerCase() {
    return this.check(_toLowerCase());
  },
  toUpperCase() {
    return this.check(_toUpperCase());
  },
  slugify() {
    return this.check(_slugify());
  }
}));
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(_email(ZodEmail, params));
  },
  url(params) {
    return this.check(_url(ZodURL, params));
  },
  jwt(params) {
    return this.check(_jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(_emoji2(ZodEmoji, params));
  },
  guid(params) {
    return this.check(_guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(_uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(_uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(_uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(_uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(_nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(_cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(_cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(_ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(_base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(_base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(_xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(_ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(_ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(_ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(_cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(_cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(_e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(_isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(_isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(_isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(_isoDuration(ZodISODuration, params));
  }
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  inst.isFinite = true;
}, /* @__PURE__ */ derived({
  minValue: (inst) => {
    const { minimum, exclusiveMinimum } = aggregateChecks(inst);
    return Math.max(minimum ?? Number.NEGATIVE_INFINITY, exclusiveMinimum ?? Number.NEGATIVE_INFINITY);
  },
  maxValue: (inst) => {
    const { maximum, exclusiveMaximum } = aggregateChecks(inst);
    return Math.min(maximum ?? Number.POSITIVE_INFINITY, exclusiveMaximum ?? Number.POSITIVE_INFINITY);
  },
  isInt: (inst) => {
    const { isInt, multipleOf } = aggregateChecks(inst);
    return !!isInt || !!multipleOf?.some(Number.isSafeInteger);
  },
  format: (inst) => aggregateChecks(inst).format ?? null
}, {
  gt(value, params) {
    return this.check(_gt(value, params));
  },
  gte(value, params) {
    return this.check(_gte(value, params));
  },
  min(value, params) {
    return this.check(_gte(value, params));
  },
  lt(value, params) {
    return this.check(_lt(value, params));
  },
  lte(value, params) {
    return this.check(_lte(value, params));
  },
  max(value, params) {
    return this.check(_lte(value, params));
  },
  int(params) {
    return this.check(int(params));
  },
  safe(params) {
    return this.check(int(params));
  },
  positive(params) {
    return this.check(_gt(0, params));
  },
  nonnegative(params) {
    return this.check(_gte(0, params));
  },
  negative(params) {
    return this.check(_lt(0, params));
  },
  nonpositive(params) {
    return this.check(_lte(0, params));
  },
  multipleOf(value, params) {
    return this.check(_multipleOf(value, params));
  },
  step(value, params) {
    return this.check(_multipleOf(value, params));
  },
  finite() {
    return this;
  }
}));
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength(n, params));
  },
  nonempty(params) {
    return this.check(_minLength(1, params));
  },
  max(n, params) {
    return this.check(_maxLength(n, params));
  },
  length(n, params) {
    return this.check(_length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  installLazyProp(inst, "shape", (self) => self._zod.def.shape, false);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone(mergeDefs(this._zod.def, { catchall }));
  },
  passthrough() {
    return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  loose() {
    return this.clone(mergeDefs(this._zod.def, { catchall: unknown() }));
  },
  strict() {
    return this.clone(mergeDefs(this._zod.def, { catchall: never() }));
  },
  strip() {
    return this.clone(mergeDefs(this._zod.def, { catchall: undefined }));
  },
  extend(incoming) {
    return extend(this, incoming);
  },
  safeExtend(incoming) {
    return safeExtend(this, incoming);
  },
  merge(other) {
    return merge(this, other);
  },
  pick(mask) {
    return pick(this, mask);
  },
  omit(mask) {
    return omit(this, mask);
  },
  partial(...args) {
    return partial(ZodOptional, this, args[0]);
  },
  exactPartial(...args) {
    return partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return required(ZodNonOptional, this, args[0]);
  }
});
function strictObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: never(),
    ...normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = [...inst._zod.values];
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue2) => {
      if (typeof issue2 === "string") {
        payload.issues.push(issue(issue2, payload.value, def));
      } else {
        const _issue = issue2;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output) => {
        payload.value = output;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...normalizeParams(params)
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : constantCatch(catchValue)
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
  });
}
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
// src/backend/hx-computer/tools.ts
var COMPUTER_FIND_TOOL = "computer_find";
var COMPUTER_OPEN_TOOL = "computer_open";
var COMPUTER_SET_TOOL = "computer_set";
var HX_COMPUTER_TOOL_NAMES = new Set([
  COMPUTER_FIND_TOOL,
  COMPUTER_OPEN_TOOL,
  COMPUTER_SET_TOOL
]);
var id = string2().min(1).max(600).describe("An id from a result.");
var query = string2().min(1).max(200).describe('A name in any language, such as "蓝牙" or "dark mode".');
var FIND_SHAPE = {
  query,
  kinds: array(_enum(["app", "page", "setting"])).min(1).max(3).optional().describe("page is a system settings page."),
  limit: number2().int().min(1).max(20).optional()
};
var OPEN_SHAPE = {
  id: id.optional(),
  query: query.optional(),
  path: string2().min(1).max(1024).optional().describe("Full path of a folder or a document."),
  url: string2().min(1).max(2000).optional().describe("An http or https address.")
};
var SET_SHAPE = {
  id: id.optional(),
  query: query.optional(),
  value: string2().max(1024).optional().describe("on, off, a whole number or an option. Omit to read.")
};
function answer(value, success = true) {
  return { success, contentItems: [{ type: "inputText", text: JSON.stringify(value) }] };
}
function refusal(reason) {
  return answer({ status: "refused", reason }, false);
}
var FAILED_STATUSES = new Set(["failed", "invalid", "refused", "unsupported"]);
var REFUSALS = {
  off: "Computer Use is off for this agent. The user turns it on in the agent's settings.",
  task: "A task runs without Computer Use: only your own chat uses the screen of this computer. Say so, so that the user can continue this step in your own chat."
};
async function hxComputerToolCall(actions, allowed, params, record = () => {}) {
  if (allowed !== "yes")
    return refusal(REFUSALS[allowed]);
  try {
    if (params.tool === COMPUTER_FIND_TOOL) {
      const input = strictObject(FIND_SHAPE).safeParse(params.arguments);
      if (!input.success)
        return answer({ status: "invalid", reason: "Give query, and optionally kinds and limit." }, false);
      const { kinds, limit } = input.data;
      const result = await actions.find({
        query: input.data.query,
        ...kinds ? { kinds } : {},
        ...limit === undefined ? {} : { limit }
      });
      return answer(result, !FAILED_STATUSES.has(result.status));
    }
    if (params.tool === COMPUTER_OPEN_TOOL) {
      const input = strictObject(OPEN_SHAPE).safeParse(params.arguments);
      if (!input.success)
        return answer({ status: "invalid", reason: "Give exactly one of id, query, path and url." }, false);
      const { id: entryId, query: words, path, url } = input.data;
      const result = await actions.open({
        ...entryId === undefined ? {} : { id: entryId },
        ...words === undefined ? {} : { query: words },
        ...path === undefined ? {} : { path },
        ...url === undefined ? {} : { url }
      });
      if (result.status === "opened") {
        record(`computer_open ${"title" in result.what ? result.what.title : result.what.target}`.slice(0, 300));
      }
      return answer(result, !FAILED_STATUSES.has(result.status));
    }
    if (params.tool === COMPUTER_SET_TOOL) {
      const input = strictObject(SET_SHAPE).safeParse(params.arguments);
      if (!input.success)
        return answer({ status: "invalid", reason: "Give id or query, and optionally value." }, false);
      const { id: entryId, query: words, value } = input.data;
      const result = await actions.set({
        ...entryId === undefined ? {} : { id: entryId },
        ...words === undefined ? {} : { query: words },
        ...value === undefined ? {} : { value }
      });
      if (result.status === "changed") {
        record(`computer_set ${result.setting.title}: ${result.previous} → ${result.value}`.slice(0, 300));
      }
      return answer(result, !FAILED_STATUSES.has(result.status));
    }
    return answer({ status: "invalid", reason: "This is not a computer tool." }, false);
  } catch (error) {
    return answer({ status: "failed", reason: error instanceof Error ? error.message.slice(0, 300) : "It did not work." }, false);
  }
}

// src/backend/hx-computer/realcheck.ts
var passed = (detail, shot) => ({ outcome: "passed", detail, ...shot ? { shot } : {} });
var failed = (detail, shot) => ({ outcome: "failed", detail, ...shot ? { shot } : {} });
var review = (detail, shot) => ({ outcome: "review", detail, ...shot ? { shot } : {} });
var unavailable = (detail, shot) => ({
  outcome: "unavailable",
  detail,
  ...shot ? { shot } : {}
});
var DEFAULT_BUDGET_MS = 35 * 60 * 1000;
var DETAIL_LIMIT2 = 6000;
var APPEAR_MS = 1e4;
var PAGE_WAIT_MS = 8000;
var FIRST_PAGE_WAIT_MS = 30000;
var PAGE_STEP_MS = 600;
var PAGE_SETTLE_MS = 700;
var SLOW_READ_MS = 3000;
var READ_BACK_WAITS_MS2 = [0, 400, 1200];
var EFFECT_WAIT_MS = 3000;
var BASELINE_MIN_PAGES = 5;
var NOT_ALLOWED3 = /-1743|not authori[sz]ed to send apple events/iu;
var HAN2 = /\p{Script=Han}/u;
function clip(text, limit) {
  const flat = text.replace(/\s+/gu, " ").trim();
  return flat.length > limit ? `${flat.slice(0, limit)}…` : flat;
}
function output(result, limit = 300) {
  const text = clip(result.stdout, limit) || clip(result.stderr, limit);
  return `退出码 ${result.code ?? "无"}${result.timedOut ? "（超时）" : ""}${text ? `：${text}` : "，没有输出"}`;
}
function slug(text) {
  return text.toLowerCase().replace(/[^\da-z]+/gu, "-").replace(/^-|-$/gu, "");
}
function sameValue2(seed, left, right) {
  if (left === null)
    return false;
  if (seed.values.type === "number")
    return Math.abs(Number(left) - Number(right)) <= hxSeedTolerance(seed);
  return left === right;
}
function hxRealOtherValue(values, current) {
  if (values.type === "switch")
    return current === "on" ? "off" : "on";
  if (values.type === "number") {
    const now = Number(current);
    if (!Number.isFinite(now))
      return null;
    const step = Math.max(1, Math.round((values.max - values.min) / 10));
    return String(now + step <= values.max ? now + step : now - step);
  }
  if (values.type === "choice") {
    const at = values.options.indexOf(current);
    return values.options[(at + 1) % values.options.length] ?? null;
  }
  return null;
}
function countNames(texts) {
  const counts = new Map;
  for (const text of texts)
    counts.set(text, (counts.get(text) ?? 0) + 1);
  return counts;
}
function sameTexts(left, right) {
  return left.length === right.length && left.every((text, index) => text === right[index]);
}
function hxRealBaseline(pages) {
  const baseline = new Map;
  if (pages.length < BASELINE_MIN_PAGES)
    return baseline;
  const [first, ...rest] = pages.map(countNames);
  if (!first)
    return baseline;
  for (const [name, count] of first) {
    let least = count;
    for (const other of rest)
      least = Math.min(least, other.get(name) ?? 0);
    if (least > 0)
      baseline.set(name, least);
  }
  return baseline;
}
function hxRealSpecific(texts, baseline) {
  const specific = [];
  for (const [name, count] of countNames(texts))
    if (count > (baseline.get(name) ?? 0))
      specific.push(name);
  return specific;
}
async function hxRealCheck(host) {
  const { platform } = host;
  const startedAt = host.now();
  const budgetMs = host.budgetMs ?? DEFAULT_BUDGET_MS;
  const items = [];
  const times = new Map;
  const counter = { calls: 0 };
  const run = (command, args, options) => {
    counter.calls += 1;
    return host.run(command, args, options);
  };
  const system = host.system ?? hxRealSystem(platform, run);
  const exec = (command, timeoutMs = 30000) => run(command.command, command.args, { timeoutMs, ...command.env ? { env: command.env } : {} });
  const outOfTime = () => host.now() - startedAt >= budgetMs;
  const time = (name, ms) => {
    times.set(name, [...times.get(name) ?? [], Math.max(0, ms)]);
  };
  const record = (id, verdict, ms) => {
    items.push({
      id,
      group: hxCheckGroup(id),
      outcome: verdict.outcome,
      detail: verdict.detail.slice(0, DETAIL_LIMIT2),
      ms: Math.max(0, ms),
      ...verdict.shot ? { shot: verdict.shot } : {}
    });
    host.log?.(`${verdict.outcome.padEnd(11)} ${id}`);
  };
  const skip = (id, detail) => record(id, { outcome: "skipped", detail }, 0);
  const check = async (id, body) => {
    if (outOfTime()) {
      skip(id, "这次检查的时间用完了，这一项没有做。");
      return "skipped";
    }
    const began = host.now();
    let verdict;
    try {
      verdict = await body();
    } catch (error) {
      verdict = failed(`检查程序在这一项上停下了：${error instanceof Error ? error.message : "原因不明"}`);
    }
    record(id, verdict, host.now() - began);
    return verdict.outcome;
  };
  const until = async (timeoutMs, stepMs, probe) => {
    const began = host.now();
    for (let round = 0;round < 400; round += 1) {
      const value = await probe();
      const ms = host.now() - began;
      if (value !== null)
        return { value, ms };
      if (ms >= timeoutMs)
        break;
      await host.wait(stepMs);
    }
    return { value: null, ms: host.now() - began };
  };
  const tmp = join4(host.out, "tmp");
  const shots = join4(host.out, "screenshots");
  await mkdir3(tmp, { recursive: true });
  if (host.screenshots)
    await mkdir3(shots, { recursive: true });
  const shot = async (name) => {
    if (!host.screenshots)
      return;
    const file = `${name}.jpg`;
    try {
      return await system.screenshot(join4(shots, file)) ? file : undefined;
    } catch {
      return;
    }
  };
  const catalogHost = {
    platform,
    run,
    home: host.home,
    chineseFirst: false,
    verified: false,
    now: host.now
  };
  const catalog = new HxCatalog({ ...catalogHost, dataFolder: () => join4(host.out, "data") });
  const actions = new HxComputerActions(catalog, run, host.wait);
  const pages = [];
  const chineseNames = [];
  const chineseApps = [];
  const selfTest = { report: null };
  const about = { system: platform === "mac" ? "macOS" : "Windows", desktop: false, detail: "" };
  const environment = { automation: true, accessibility: true };
  await check("env.system", async () => {
    const described = await system.describe();
    about.system = `${described.system} (${type2()} ${release2()} ${arch2()})`;
    about.desktop = described.desktop;
    about.detail = described.detail;
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    return passed(`${about.system}；Node ${process.version}；语言 ${locale}；${described.detail}`);
  });
  await check("env.desktop", async () => {
    if (about.desktop)
      return passed(`有桌面会话。${about.detail}`);
    return platform === "mac" ? failed(`没有桌面会话，打开应用和窗口的检查都会失败。${about.detail}`) : review(`系统没有说这是交互式会话，以后面“打开”各项的结果为准。${about.detail}`);
  });
  if (platform === "mac") {
    await check("env.automation", async () => {
      const answer = await system.automation();
      environment.automation = answer.allowed;
      return answer.allowed ? passed(answer.detail) : failed(`这台机器不让脚本控制“系统事件”，经过它的设置都测不了。${answer.detail}`);
    });
    await check("env.accessibility", async () => {
      const answer = await system.accessibility();
      environment.accessibility = answer.allowed;
      return answer.allowed ? passed(answer.detail) : review(`读不到别的应用的窗口标题，设置页只能看截图。${answer.detail}`);
    });
  }
  const first = { entries: [], builtAt: null };
  const present = new Map;
  await check("catalog.scan", async () => {
    const began = host.now();
    await catalog.rebuild();
    const ms = host.now() - began;
    time("catalog.scan", ms);
    const status = await catalog.status();
    first.entries = await catalog.entries();
    first.builtAt = status.builtAt;
    const detail = `${status.apps} 个应用，${status.pages} 个设置页，${status.settings} 项设置；用时 ${ms} 毫秒`;
    if (status.apps === 0)
      return failed(`没有读到任何应用。${detail}`);
    return status.apps < 20 ? review(`应用少于 20 个，看一下是不是漏了。${detail}`) : passed(detail);
  });
  await check("catalog.known", async () => {
    const here = [];
    const missing = [];
    const optional = [];
    for (const app of HX_REAL_APPS[platform]) {
      const entry = hxRealAppEntry(first.entries, app.marks);
      if (entry) {
        present.set(app, entry);
        here.push(`${app.query}（${entry.title}）`);
      } else if (app.required)
        missing.push(app.query);
      else
        optional.push(app.query);
    }
    const detail = `找到：${here.join("、") || "无"}${optional.length > 0 ? `；这台机器没有（不要求）：${optional.join("、")}` : ""}`;
    return missing.length > 0 ? failed(`系统自带的应用没有找到：${missing.join("、")}。${detail}`) : passed(detail);
  });
  if (platform === "mac") {
    await check("catalog.chinese", async () => {
      const chinese = new HxCatalog({
        ...catalogHost,
        chineseFirst: true,
        dataFolder: () => join4(host.out, "data-zh")
      });
      await chinese.rebuild();
      const list = (await chinese.entries()).filter((entry) => entry.kind === "app");
      chineseApps.push(...list);
      for (const entry of list)
        if (HAN2.test(entry.title))
          chineseNames.push(entry.title);
      const right = [];
      const other = [];
      const notRead = [];
      for (const [mark, name] of HX_REAL_MAC_CHINESE) {
        const entry = hxRealAppEntry(list, [mark]);
        if (!entry)
          continue;
        if (entry.title === name)
          right.push(name);
        else if (HAN2.test(entry.title))
          other.push(`${name} 实际是 ${entry.title}`);
        else
          notRead.push(`${name}（得到的是 ${entry.title}）`);
      }
      const detail = `${list.length} 个应用里有 ${chineseNames.length} 个取到了中文名；核对的几个：对的 ${right.join("、") || "无"}`;
      if (notRead.length > 0)
        return failed(`没有取到中文名：${notRead.join("、")}。${detail}`);
      return other.length > 0 ? review(`中文名和预期不同：${other.join("、")}。${detail}`) : passed(detail);
    });
  }
  await check("catalog.saved", async () => {
    const again = new HxCatalog({ ...catalogHost, dataFolder: () => join4(host.out, "data") });
    const began = host.now();
    const list = await again.entries();
    const ms = host.now() - began;
    time("catalog.load", ms);
    const status = await again.status();
    const before = new Set(first.entries.map((entry) => entry.id));
    const same = list.length === first.entries.length && list.every((entry) => before.has(entry.id));
    if (status.builtAt !== first.builtAt)
      return failed("存盘的清单没有被用上：又扫描了一次。");
    return same ? passed(`从存盘读入 ${list.length} 个条目，用时 ${ms} 毫秒，没有再扫描。`) : failed(`从存盘读入的条目和扫描时不同：${list.length} 个对 ${first.entries.length} 个。`);
  });
  await check("catalog.rescan", async () => {
    const began = host.now();
    await catalog.rebuild();
    const ms = host.now() - began;
    time("catalog.rescan", ms);
    const list = await catalog.entries();
    const before = new Set(first.entries.map((entry) => entry.id));
    const after = new Set(list.map((entry) => entry.id));
    const added = [...after].filter((id) => !before.has(id));
    const removed = [...before].filter((id) => !after.has(id));
    return added.length + removed.length === 0 ? passed(`再扫描一次，${list.length} 个条目和第一次相同；用时 ${ms} 毫秒。`) : review(`两次扫描不同。多出：${clip(added.join(" "), 600) || "无"}；少了：${clip(removed.join(" "), 600) || "无"}`);
  });
  await check("catalog.ids", async () => {
    const seen = new Set;
    const twice = new Set;
    for (const entry of first.entries) {
      if (seen.has(entry.id))
        twice.add(entry.id);
      seen.add(entry.id);
    }
    return twice.size === 0 ? passed(`${seen.size} 个编号，没有重复。`) : failed(`重复的编号：${clip([...twice].join(" "), 1000)}`);
  });
  for (const [index, phrase] of HX_REAL_PHRASES[platform].entries()) {
    await check(`search.${String(index + 1).padStart(2, "0")}`, async () => {
      const hits = hxSearch(first.entries, phrase.phrase, { kinds: phrase.kinds, limit: 5 });
      const sure = hxSureHit(hits);
      const top = hits.slice(0, 3).map((hit) => `${hit.entry.id}（${hit.entry.title}，${Math.round(hit.score)} 分）`).join("；");
      const got = `认定：${sure ? sure.id : "没有认定"}；前三名：${top || "无"}`;
      if (phrase.expected === "ask") {
        return sure === null && hits.length >= 2 ? passed(`“${phrase.phrase}”交回了 ${hits.length} 个候选，没有替模型选。`) : failed(`“${phrase.phrase}”应该交回候选。${got}`);
      }
      const wanted = [];
      for (const way of hxRealWays(phrase.expected)) {
        if ("id" in way)
          wanted.push(way.id);
        else {
          const entry = hxRealAppEntry(first.entries, [way.app]);
          if (entry)
            wanted.push(entry.id);
        }
      }
      if (wanted.length === 0)
        return unavailable(`“${phrase.phrase}”要找的应用不在这台机器上。`);
      if (sure) {
        return wanted.includes(sure.id) ? passed(`“${phrase.phrase}” → ${sure.id}`) : failed(`“${phrase.phrase}”应得 ${wanted.join(" 或 ")}。${got}`);
      }
      const best = hits[0]?.score ?? 0;
      const tied = hits.filter((hit) => hit.score === best).map((hit) => hit.entry.id);
      return wanted.length > 1 && tied.length > 1 && tied.every((id) => wanted.includes(id)) ? passed(`“${phrase.phrase}”交回了同分的 ${tied.join("、")}，都通向同一处。`) : failed(`“${phrase.phrase}”应得 ${wanted.join(" 或 ")}。${got}`);
    });
  }
  if (platform === "mac") {
    const named = chineseApps.filter((entry) => HAN2.test(entry.title));
    const typed = named.map((entry) => ({ entry, ways: hxPinyinTyped(entry.title) }));
    const unknown = typed.filter((one) => one.ways.length === 0).map((one) => one.entry.title);
    const rank = (query, limit) => hxSearch(chineseApps, query, { kinds: ["app"], limit }).map((hit) => hit.entry.id);
    await check("search.pinyin-full", async () => {
      if (named.length === 0)
        return unavailable("这台 Mac 上没有读到应用的中文名。");
      const missed = typed.filter(({ entry, ways }) => ways[0] !== undefined && rank(ways[0], 1)[0] !== entry.id);
      const said = `${named.length} 个中文名里 ${named.length - unknown.length - missed.length} 个用全拼排第一`;
      const detail = `${said}；表里没有的字使它没有拼音的 ${unknown.length} 个：${unknown.join("、") || "无"}；没排第一的：${missed.map(({ entry, ways }) => `${entry.title}（${ways[0]}）`).join("、") || "无"}`;
      if (missed.length === 0)
        return passed(detail);
      return missed.length * 10 <= named.length ? review(detail) : failed(detail);
    });
    await check("search.pinyin-initials", async () => {
      const short = typed.filter(({ ways }) => ways[1] !== undefined);
      if (short.length === 0)
        return unavailable("这台 Mac 上没有可以用首字母找的中文名。");
      const missed = short.filter(({ entry, ways }) => !rank(ways[1] ?? "", 5).includes(entry.id));
      const detail = `${short.length} 个中文名里 ${short.length - missed.length} 个用首字母能在前五个里找到；找不到的：${missed.map(({ entry, ways }) => `${entry.title}（${ways[1]}）`).join("、") || "无"}`;
      if (missed.length === 0)
        return passed(detail);
      return missed.length * 5 <= short.length ? review(detail) : failed(detail);
    });
  }
  const running = async (names) => {
    const ids = new Map;
    for (const name of names)
      ids.set(name, new Set(await system.processIds(name)));
    return ids;
  };
  const appeared = (names, before) => until(APPEAR_MS, 500, async () => {
    for (const name of names) {
      const fresh = (await system.processIds(name)).filter((id) => !before.get(name)?.has(id));
      if (fresh.length > 0)
        return { name, ids: fresh };
    }
    return null;
  });
  const why = (result) => `回答是 ${result.status}${result.reason ? `：${result.reason}` : ""}`;
  await check("open.cost", async () => {
    const began = host.now();
    const opened = await actions.open({ id: "page:about" });
    const ms = host.now() - began;
    time("open.cost", ms);
    await system.closeSettings();
    const said = `打开一个设置页的命令用了 ${ms} 毫秒（回答 ${opened.status}）`;
    if (opened.status !== "opened")
      return failed(`${said}。${why(opened)}`);
    return ms > 1e4 ? review(`${said}，这台机器上太慢了，助手的每一次操作都会这么慢。`) : passed(said);
  });
  for (const app of HX_REAL_APPS[platform].filter((candidate) => candidate.open)) {
    await check(`open.app.${slug(app.query)}`, async () => {
      const entry = present.get(app);
      if (!entry)
        return unavailable("这台机器上没有这个应用。");
      const before = await running(app.processes);
      const began = host.now();
      const opened = await actions.open({ query: app.query });
      if (opened.status !== "opened")
        return failed(`按名称打开 ${app.query}，${why(opened)}`);
      if (!("id" in opened.what) || opened.what.id !== entry.id) {
        return failed(`按名称打开 ${app.query}，打开的却是 ${"title" in opened.what ? opened.what.title : "别的东西"}。`);
      }
      const seen = await appeared(app.processes, before);
      if (!seen.value) {
        return failed(`命令成功了，但 ${APPEAR_MS / 1000} 秒内没有出现它的进程（${app.processes.join("、")}）。`);
      }
      const ms = host.now() - began;
      time("open.app", ms);
      await system.stop(seen.value.ids);
      return passed(`进程 ${seen.value.name} 在 ${ms} 毫秒后出现；已关掉。`);
    });
  }
  await check("open.folder", async () => {
    const folder = join4(tmp, "hxbot-folder");
    await mkdir3(folder, { recursive: true });
    const before = await system.folderWindows();
    const began = host.now();
    const opened = await actions.open({ path: folder });
    if (opened.status !== "opened")
      return failed(`打开文件夹，${why(opened)}`);
    if (before === null)
      return review("命令成功了，但这台机器上数不出文件夹窗口，看截图。", await shot("open-folder"));
    const seen = await until(APPEAR_MS, 500, async () => {
      const now = await system.folderWindows();
      return now !== null && now > before ? now : null;
    });
    const picture = await shot("open-folder");
    await system.closeFolders();
    if (seen.value === null)
      return failed(`命令成功了，但 ${APPEAR_MS / 1000} 秒内没有多出文件夹窗口。`, picture);
    time("open.folder", host.now() - began);
    return passed(`文件夹窗口从 ${before} 个变成 ${seen.value} 个，用时 ${seen.ms} 毫秒。`, picture);
  });
  await check("open.document", async () => {
    const file = join4(tmp, "hxbot-note.txt");
    await writeFile3(file, `HXBot computer check
`);
    const editors = HX_REAL_TEXT_EDITORS[platform];
    const before = await running(editors);
    const opened = await actions.open({ path: file });
    if (opened.status !== "opened")
      return failed(`打开 .txt 文件，${why(opened)}`);
    const seen = await appeared(editors, before);
    const picture = await shot("open-document");
    if (!seen.value) {
      return review(`命令成功了，但没有看到 ${editors.join("、")} 的新进程；这台机器可能用别的程序开 .txt。`, picture);
    }
    await system.stop(seen.value.ids);
    return passed(`${seen.value.name} 在 ${seen.ms} 毫秒后出现；已关掉。`, picture);
  });
  await check("open.url", async () => {
    const browsers = HX_REAL_BROWSERS[platform];
    const before = await running(browsers);
    const opened = await actions.open({ url: "https://example.com/" });
    if (opened.status !== "opened")
      return failed(`打开网址，${why(opened)}`);
    const seen = await appeared(browsers, before);
    const picture = await shot("open-url");
    if (!seen.value)
      return review(`命令成功了，但没有看到浏览器的新进程（${browsers.join("、")}）。`, picture);
    for (const name of browsers) {
      await system.stop((await system.processIds(name)).filter((id) => !before.get(name)?.has(id)));
    }
    return passed(`浏览器 ${seen.value.name} 在 ${seen.ms} 毫秒后出现；已关掉。`, picture);
  });
  for (const refused of HX_REAL_REFUSED.filter((candidate) => !candidate.only || candidate.only === platform)) {
    await check(`open.refuse.${slug(refused.name)}`, async () => {
      const file = join4(tmp, refused.name);
      await writeFile3(file, `echo HXBot must not run this
`);
      if (refused.runnable)
        await chmod(file, 493);
      const before = counter.calls;
      const result = await actions.open({ path: file });
      const started = counter.calls - before;
      if (result.status !== "refused")
        return failed(`${refused.name} 应该被拒绝，${why(result)}`);
      return started === 0 ? passed(`${refused.name} 被拒绝，没有启动任何系统命令。`) : failed(`${refused.name} 被拒绝了，但期间启动了 ${started} 条系统命令。`);
    });
  }
  await check("open.refuse.scheme", async () => {
    const wrong = [];
    for (const address of HX_REAL_REFUSED_ADDRESSES) {
      const before = counter.calls;
      const result = await actions.open({ url: address });
      if (result.status !== "refused" && result.status !== "invalid" || counter.calls !== before) {
        wrong.push(`${address}（${result.status}）`);
      }
    }
    return wrong.length === 0 ? passed(`${HX_REAL_REFUSED_ADDRESSES.length} 个不是网页的地址都被拒绝，没有启动任何系统命令。`) : failed(`没有被拒绝：${wrong.join("、")}`);
  });
  await check("open.missing", async () => {
    const path = await actions.open({ path: join4(tmp, "no-such-file.txt") });
    const words = "zzqxj no such app 0417";
    const name = await actions.open({ query: words });
    if (path.status === "not-found" && name.status === "not-found") {
      return passed("不存在的路径和不存在的名称都回答“没有找到”。");
    }
    const hits = hxSearch(first.entries, words, { limit: 3 }).map((hit) => `${hit.entry.id}（${hit.entry.title}，${Math.round(hit.score)} 分）`).join("；");
    const took = name.status === "opened" && "title" in name.what ? `，打开的是 ${name.what.title}` : `（${why(name)}）`;
    return failed(`不存在的路径回答 ${path.status}，不存在的名称回答 ${name.status}${took}。前三名：${hits || "无"}`);
  });
  const original = new Map;
  const verified = [];
  const untestable = [];
  const readValue = async (seed) => {
    const result = await exec(seed.read);
    return { result, value: hxRunOk(result) ? seed.parse(result.stdout) : null };
  };
  const readBack = async (seed, wanted) => {
    let last = null;
    for (const waitMs of READ_BACK_WAITS_MS2) {
      if (waitMs > 0)
        await host.wait(waitMs);
      last = (await readValue(seed)).value;
      if (sameValue2(seed, last, wanted))
        return { ok: true, value: last };
    }
    return { ok: false, value: last };
  };
  for (const seed of catalog.settingSeeds()) {
    const id = `setting.${seed.key}`;
    const read = { value: null };
    const readOutcome = await check(`${id}.read`, async () => {
      const began = host.now();
      const { result, value } = await readValue(seed);
      const ms = host.now() - began;
      if (NOT_ALLOWED3.test(result.stderr))
        return unavailable("这台机器不让脚本控制“系统事件”。");
      if (!hxRunOk(result)) {
        const text = `${result.stdout}
${result.stderr}`;
        return HX_REAL_NO_HARDWARE[platform][seed.key]?.test(text) ? unavailable(`这台机器没有相应的硬件。${output(result)}`) : failed(`读的命令出错。${output(result)}`);
      }
      if (value === null)
        return unavailable(`命令成功，但这台机器上没有值。${output(result, 200)}`);
      read.value = value;
      time("setting.read", ms);
      return passed(`${value}（${ms} 毫秒）`);
    });
    const before = read.value;
    if (before === null) {
      if (readOutcome === "unavailable")
        untestable.push(seed.key);
      continue;
    }
    original.set(seed.key, before);
    const sameOutcome = await check(`${id}.same`, async () => {
      const written = await exec(seed.write(before));
      if (!hxRunOk(written))
        return failed(`把 ${before} 原样写回，写的命令出错。${output(written)}`);
      const after = await readBack(seed, before);
      return after.ok ? passed(`写回 ${before}，读到 ${after.value}`) : failed(`写回 ${before}，读到的却是 ${after.value ?? "没有值"}`);
    });
    const other = hxRealOtherValue(seed.values, before);
    if (sameOutcome !== "passed" || other === null) {
      if (other !== null) {
        skip(`${id}.change`, "原样写回没有通过，没有再真改。");
        skip(`${id}.restore`, "没有改过，不用改回。");
      }
      continue;
    }
    await shot(`setting-${seed.key}-before`);
    let effectOutcome = null;
    const changeOutcome = await check(`${id}.change`, async () => {
      const began = host.now();
      const written = await exec(seed.write(other));
      if (!hxRunOk(written))
        return failed(`把 ${before} 改成 ${other}，写的命令出错。${output(written)}`);
      const after = await readBack(seed, other);
      const ms = host.now() - began;
      if (!after.ok)
        return failed(`写入 ${other}，读回的却是 ${after.value ?? "没有值"}`);
      time("setting.change", ms);
      if (host.screenshots)
        await host.wait(PAGE_SETTLE_MS);
      return passed(`${before} → ${after.value}（${ms} 毫秒）`, await shot(`setting-${seed.key}-after`));
    });
    const effect = hxRealEffect(platform, seed.key);
    if (effect && changeOutcome === "passed") {
      effectOutcome = await check(`${id}.effect`, async () => {
        const last = { result: null };
        const seen = await until(EFFECT_WAIT_MS, 500, async () => {
          const result = await exec(effect.command);
          last.result = result;
          return effect.shows(result.stdout, result.code, other) ? result : null;
        });
        return seen.value ? passed(`换一条路读，也是 ${other}。${output(seen.value, 200)}`) : review(`换一条路读，没有读到 ${other}。${last.result ? output(last.result, 400) : ""}`);
      });
    } else if (effect) {
      skip(`${id}.effect`, "真改没有通过，没有再换一条路核对。");
    }
    const restoreOutcome = await check(`${id}.restore`, async () => {
      const written = await exec(seed.write(before));
      if (!hxRunOk(written))
        return failed(`改回 ${before}，写的命令出错。${output(written)}`);
      const after = await readBack(seed, before);
      return after.ok ? passed(`改回了 ${before}`) : failed(`改回 ${before}，读到的却是 ${after.value ?? "没有值"}`);
    });
    let fastOutcome = "passed";
    const fast = hxCombinedChange(platform, seed, other);
    if (fast && changeOutcome === "passed" && restoreOutcome === "passed") {
      fastOutcome = await check(`${id}.fast`, async () => {
        const began = host.now();
        const result = await exec(fast);
        const ms = host.now() - began;
        try {
          if (!hxRunOk(result))
            return failed(`一次启动做完读、写、读，命令出错。${output(result)}`);
          const values = hxCombinedValues(seed, result.stdout);
          if (!values)
            return failed(`一次启动做完读、写、读，回答不是两次读数。${output(result, 400)}`);
          if (!sameValue2(seed, values.before, before)) {
            return failed(`一次启动的第一次读数是 ${values.before}，三步做法读到的是 ${before}。`);
          }
          const settled = sameValue2(seed, values.after, other) ? { ok: true } : await readBack(seed, other);
          if (!settled.ok)
            return failed(`一次启动写入 ${other}，第二次读数是 ${values.after}，再等也没有变。`);
          time("setting.change.fast", ms);
          return passed(`${values.before} → ${values.after}（一次启动 ${ms} 毫秒）`);
        } finally {
          await exec(seed.write(before));
          await readBack(seed, before);
        }
      });
    } else if (fast) {
      skip(`${id}.fast`, "三步做法没有通过，没有再比一次启动的做法。");
    }
    if (changeOutcome === "passed" && restoreOutcome === "passed" && fastOutcome === "passed" && (effectOutcome ?? "passed") === "passed") {
      verified.push(seed.key);
    }
  }
  const paneIds = { here: null };
  if (platform === "mac") {
    await check("page.panes", async () => {
      const here = await hxMacPanes(run, host.macExtensions);
      paneIds.here = here;
      const wanted = catalog.pageSeeds().map((seed) => seed.address.slice(seed.address.indexOf(":") + 1));
      const own = wanted.filter((id) => id.startsWith(HX_MAC_OWN_PANES));
      const missing = wanted.filter((id) => !id.startsWith(HX_MAC_OWN_PANES) && !here.has(id));
      const detail = `${wanted.length} 个地址里 ${wanted.length - own.length - missing.length} 个是这台 Mac 的设置面板；属于系统设置自身、无法这样核对的 ${own.length} 个；这台 Mac 共有 ${here.size} 个面板`;
      return passed(missing.length === 0 ? detail : `这些地址不是这台 Mac 的设置面板：${missing.join(" ")}；它们是否还能打开，看各自那一项。${detail}。这台 Mac 的面板：${clip([...here].sort().join(" "), 3500)}`);
    });
  }
  const server = platform === "windows" && /server/iu.test(about.system);
  const seenPages = [];
  await system.closeSettings();
  let previousTexts = [];
  for (const seed of catalog.pageSeeds()) {
    const base = {
      key: seed.key,
      wanted: seed.en,
      window: null,
      previous: previousTexts,
      seenMs: null,
      shot: undefined
    };
    if (outOfTime()) {
      seenPages.push({ ...base, status: "out-of-time", reason: "" });
      continue;
    }
    try {
      const limit = seenPages.some((page) => page.window?.open) ? PAGE_WAIT_MS : FIRST_PAGE_WAIT_MS;
      let window = null;
      let seenMs = null;
      let reason = "";
      for (let attempt = 0;attempt < 2; attempt += 1) {
        const began = host.now();
        const opened = await actions.open({ id: `page:${seed.key}` });
        if (opened.status !== "opened") {
          reason = why(opened);
          break;
        }
        time("open.page.command", host.now() - began);
        let settled = false;
        for (let round = 0;round < 60; round += 1) {
          const asked = host.now();
          window = await system.settingsWindow();
          time("page.read", host.now() - asked);
          const elapsed = host.now() - began;
          if (window.blocked)
            break;
          const shown = hxRealPageShown(window.texts, seed.en);
          const moved = window.open && window.texts.length > 0 && !sameTexts(window.texts, previousTexts);
          if (shown || moved) {
            seenMs ??= elapsed;
            if (shown && platform === "mac" || settled || host.now() - asked >= SLOW_READ_MS)
              break;
            settled = true;
            await host.wait(PAGE_SETTLE_MS);
            continue;
          }
          if (elapsed >= limit)
            break;
          await host.wait(PAGE_STEP_MS);
        }
        if (window?.open && window.texts.length > 0)
          break;
      }
      if (reason) {
        seenPages.push({ ...base, status: "not-opened", reason });
        continue;
      }
      const picture = await shot(`page-${seed.key}`);
      seenPages.push({ ...base, status: "seen", reason: "", window, seenMs, shot: picture });
      if (window?.open && window.texts.length > 0)
        previousTexts = window.texts;
    } catch (error) {
      seenPages.push({
        ...base,
        status: "not-opened",
        reason: `检查程序在这一页上停下了：${error instanceof Error ? error.message : "原因不明"}`
      });
    }
  }
  await system.closeSettings();
  const baseline = platform === "windows" ? hxRealBaseline(seenPages.flatMap((page) => page.window?.open && page.window.texts.length > 0 ? [page.window.texts] : [])) : new Map;
  for (const page of seenPages) {
    const id = `page.${page.key}`;
    const note = HX_REAL_PAGE_NOTES[platform][page.key] ?? {};
    const window = page.window;
    pages.push({ key: page.key, wanted: page.wanted, opened: page.status === "seen", seen: window?.raw ?? [] });
    if (page.status === "out-of-time") {
      skip(id, "这次检查的时间用完了，这一页没有开。");
      continue;
    }
    if (page.status === "not-opened" || !window) {
      record(id, failed(`打开“${page.wanted}”，${page.reason || "没有结果"}`), 0);
      continue;
    }
    const ms = page.seenMs ?? 0;
    if (window.blocked) {
      record(id, review(`读不到窗口标题，看截图是不是“${page.wanted}”。`, page.shot), ms);
      continue;
    }
    if (!window.open || window.texts.length === 0) {
      record(id, failed(`打开“${page.wanted}”的命令成功了，但设置窗口没有出现。`, page.shot), ms);
      continue;
    }
    const specific = hxRealSpecific(window.texts, baseline);
    const names = [page.wanted, ...note.titles ?? []];
    const showing = `窗口显示：${clip(specific.slice(0, 14).join(" / "), 700) || "没有这一页独有的文字"}`;
    if (names.some((name) => hxRealPageShown(specific, name))) {
      if (page.seenMs !== null)
        time("open.page", page.seenMs);
      record(id, passed(`${showing}（${ms} 毫秒）`, page.shot), ms);
      continue;
    }
    const still = sameTexts(window.texts, page.previous);
    const absent = paneIds.here !== null && !paneIds.here.has(paneOf(catalog, page.key)) && !ownPane(catalog, page.key);
    if (note.hardware) {
      record(id, unavailable(`“${page.wanted}”要有相应的硬件才有，这台机器没有显示它。${showing}`), ms);
    } else if (note.desktopOnly && server) {
      record(id, unavailable(`Windows Server 没有“${page.wanted}”这一页；桌面版的 Windows 有。${showing}`), ms);
    } else if (absent) {
      record(id, unavailable(`这台 Mac 没有“${page.wanted}”的设置面板，它在这个系统版本里不在这里。${showing}`, page.shot), ms);
    } else if (still) {
      record(id, failed(`打开“${page.wanted}”后窗口没有动，地址可能无效。${showing}`, page.shot), ms);
    } else {
      record(id, review(`要的是“${page.wanted}”，自动核对拿不准。${showing}`, page.shot), ms);
    }
  }
  const gateFolder = join4(host.out, "data-gate");
  const gateCatalog = new HxCatalog({ ...catalogHost, dataFolder: () => gateFolder });
  const gateActions = new HxComputerActions(gateCatalog, run, host.wait);
  const call = async (tool, args, allowed = "yes") => {
    const result = await hxComputerToolCall(gateActions, allowed, { tool, arguments: args });
    const item = result.contentItems[0];
    let parsed = null;
    try {
      parsed = JSON.parse(item?.type === "inputText" ? item.text : "null");
    } catch {
      parsed = null;
    }
    const answer = isDynamicRecord(parsed) ? parsed : {};
    const text = (name) => {
      const value = answer[name];
      return typeof value === "string" ? value : "";
    };
    const inner = (name, field) => {
      const value = answer[name];
      const found = isDynamicRecord(value) ? value[field] : "";
      return typeof found === "string" || typeof found === "boolean" ? found : "";
    };
    return { success: result.success, status: text("status"), text, inner, answer };
  };
  const seeds = catalog.settingSeeds();
  const plain = (seed) => seed.values.type === "switch";
  const ownValue = (seed) => {
    const value = original.get(seed.key);
    return value !== undefined && hxNormalizeValue(seed.values, value) !== null;
  };
  const useable = seeds.filter((seed) => verified.includes(seed.key));
  const gateSeed = useable.find((seed) => plain(seed) && ownValue(seed)) ?? useable.find(plain) ?? useable.find(ownValue) ?? useable[0] ?? null;
  const NO_SETTING = "这台机器上没有一项设置通过了读、写、改回，这一项做不了。";
  const gate = {
    value: null,
    other: null,
    direct: false
  };
  if (gateSeed) {
    const id = `setting:${gateSeed.key}`;
    await check("gate.before", async () => {
      const current = await call("computer_set", { id });
      if (current.status !== "value")
        return failed(`读 ${id}，回答是 ${current.status}：${current.text("reason")}`);
      const value = current.text("value");
      const other = hxRealOtherValue(gateSeed.values, value);
      if (other === null)
        return failed(`${id} 没有别的值可以改。`);
      gate.value = value;
      gate.other = other;
      const attempt = await call("computer_set", { id, value: other });
      const after = (await readValue(gateSeed)).value;
      await system.closeSettings();
      if (attempt.status !== "page") {
        if (after !== value)
          await exec(gateSeed.write(value));
        return failed(`这台电脑还没有自检过，${id} 却没有走设置页：回答是 ${attempt.status}。`);
      }
      return after === value ? passed(`自检之前改 ${id}：没有直接改，打开了设置页，值仍是 ${value}。`) : failed(`回答说打开了设置页，但值从 ${value} 变成了 ${after ?? "没有值"}。`);
    });
  } else {
    skip("gate.before", NO_SETTING);
  }
  await check("gate.selftest", async () => {
    const report = await hxSelfTest({
      catalog: gateCatalog,
      actions: gateActions,
      run,
      home: join4(host.out, "home"),
      dataFolder: () => gateFolder,
      now: host.now,
      ...host.macExtensions ? { macExtensions: host.macExtensions } : {}
    });
    selfTest.report = report;
    await system.closeSettings();
    const counts = `自检 ${report.passed} 项通过、${report.failed} 项失败、${report.skipped} 项跳过`;
    if (report.items.length === 0)
      return failed("自检没有产生任何结果。");
    if (!gateSeed)
      return passed(`${counts}。`);
    const state = await gateCatalog.directState(`setting:${gateSeed.key}`);
    gate.direct = state === "direct";
    return gate.direct ? passed(`${counts}；${gateSeed.key} 现在记为“核对过”，可以直接改。`) : failed(`${counts}；但 ${gateSeed.key} 的状态是 ${state}，不是可以直接改。`);
  });
  await check("gate.selftest-items", async () => {
    const report = selfTest.report;
    if (!report)
      return failed("自检没有运行。");
    const wrong = report.items.filter((item) => item.outcome === "failed" && item.id !== "mac.settings-pages");
    return wrong.length === 0 ? passed(`自检的 ${report.items.length} 项里没有失败的（设置面板标识一项见 page.panes）。`) : failed(`自检里失败的项：${wrong.map((item) => `${item.id}（${clip(item.detail, 200)}）`).join("；")}`);
  });
  if (gateSeed && gate.value !== null && gate.other !== null && gate.direct) {
    const id = `setting:${gateSeed.key}`;
    const value = gate.value;
    const other = gate.other;
    const putBack = async () => {
      if ((await readValue(gateSeed)).value !== value)
        await exec(gateSeed.write(value));
    };
    await check("gate.after", async () => {
      try {
        const began = host.now();
        const attempt = await call("computer_set", { id, value: other });
        time("tool.set", host.now() - began);
        if (attempt.status !== "changed")
          return failed(`自检之后改 ${id}，回答是 ${attempt.status}：${attempt.text("reason")}`);
        if (attempt.text("previous") !== value || !sameValue2(gateSeed, attempt.text("value"), other)) {
          return failed(`回答里的原值是 ${attempt.text("previous")}、新值是 ${attempt.text("value")}，应是 ${value} 和 ${other}。`);
        }
        if (hxNormalizeValue(gateSeed.values, value) === null) {
          await exec(gateSeed.write(value));
          return passed(`自检之后直接改成功：${value} → ${other}，回答里带着原值；原值不是工具收的值，由检查写回。`);
        }
        const back = await call("computer_set", { id, value });
        return back.status === "changed" && (await readValue(gateSeed)).value === value ? passed(`自检之后直接改成功：${value} → ${other} → ${value}，回答里带着原值。`) : failed(`改回 ${value}，回答是 ${back.status}。`);
      } finally {
        await putBack();
      }
    });
    await check("tool.set.query", async () => {
      try {
        const words = `把${gateSeed.zh}打开`;
        const attempt = await call("computer_set", { query: words, value: other });
        if (attempt.status !== "changed")
          return failed(`用“${words}”改，回答是 ${attempt.status}：${attempt.text("reason")}`);
        return attempt.inner("setting", "id") === id ? passed(`用“${words}”找对了 ${id}，并改成了 ${other}；已改回。`) : failed(`用“${words}”改到的是 ${String(attempt.inner("setting", "id"))}，不是 ${id}。`);
      } finally {
        await putBack();
      }
    });
    await check("tool.set.invalid", async () => {
      const attempt = await call("computer_set", { id, value: "紫色" });
      const after = (await readValue(gateSeed)).value;
      if (after !== value)
        await exec(gateSeed.write(value));
      return attempt.status === "invalid-value" && attempt.text("expected") !== "" && after === value ? passed(`给了不合法的值：回答“值不对”，并说明要的是 ${attempt.text("expected")}；值没有变。`) : failed(`给了不合法的值，回答是 ${attempt.status}，值是 ${after ?? "没有值"}。`);
    });
    await check("tool.find", async () => {
      const found = await call("computer_find", { query: gateSeed.zh, kinds: ["setting"] });
      const results = Array.isArray(found.answer.results) ? found.answer.results : [];
      const settings = results.flatMap((result) => isDynamicRecord(result) ? [result] : []);
      const top = settings[0];
      if (found.status !== "found" || !top)
        return failed(`查“${gateSeed.zh}”，回答是 ${found.status}。`);
      if (!settings.every((result) => typeof result.direct === "boolean"))
        return failed("结果里有设置没有标明能不能直接改。");
      return top.id === id && top.direct === true ? passed(`查“${gateSeed.zh}”：第一名是 ${id}，标着可以直接改；${settings.length} 个结果都标明了能不能直接改。`) : failed(`查“${gateSeed.zh}”：第一名是 ${String(top.id)}，direct 是 ${String(top.direct)}。`);
    });
  } else {
    const reason = gateSeed ? "闸门前两步没有通过，这一项没有做。" : NO_SETTING;
    for (const id of ["gate.after", "tool.set.query", "tool.set.invalid", "tool.find"])
      skip(id, reason);
  }
  await check("tool.set.security", async () => {
    const attempt = await call("computer_set", { id: "page:privacy", value: "on" });
    const picture = await shot("tool-security-page");
    await system.closeSettings();
    return attempt.status === "page" && attempt.inner("page", "security") === true ? passed("对安全相关的页面调用 computer_set：只打开了页面，回答里标明是安全页面。", picture) : failed(`对安全相关的页面调用 computer_set，回答是 ${attempt.status}。`, picture);
  });
  await check("tool.refuse", async () => {
    const before = counter.calls;
    const off = await call("computer_open", { id: "page:about" }, "off");
    const task = await call("computer_open", { id: "page:about" }, "task");
    const both = await call("computer_open", { id: "page:about", url: "https://example.com/" });
    const quiet = counter.calls === before;
    return off.status === "refused" && task.status === "refused" && both.status === "invalid" && !off.success && quiet ? passed("助手没开 Computer Use、在任务里、参数给错这三种情况都被挡住，没有启动任何系统命令。") : failed(`三种情况的回答是 ${off.status}、${task.status}、${both.status}；期间启动了 ${counter.calls - before} 条系统命令。`);
  });
  for (const probe of HX_REAL_PROBES[platform]) {
    await check(`probe.${probe.id}`, async () => {
      const began = host.now();
      const result = await exec(probe.command, probe.timeoutMs ?? 30000);
      const ms = host.now() - began;
      const detail = `${ms} 毫秒，${output(result, 3000)}`;
      return hxRunOk(result) && result.stdout.trim() !== "" ? passed(detail) : unavailable(detail);
    });
  }
  const putRight = [];
  const stillWrong = [];
  for (const seed of catalog.settingSeeds()) {
    const before = original.get(seed.key);
    if (before === undefined)
      continue;
    try {
      const now = (await readValue(seed)).value;
      if (sameValue2(seed, now, before))
        continue;
      await exec(seed.write(before));
      const after = await readBack(seed, before);
      const said = `${seed.key}（开始时 ${before}，后来是 ${now ?? "没有值"}`;
      if (after.ok)
        putRight.push(`${said}，已写回）`);
      else
        stillWrong.push(`${said}，写不回，现在是 ${after.value ?? "没有值"}）`);
    } catch {
      stillWrong.push(`${seed.key}（没能核对）`);
    }
  }
  record("final.restored", stillWrong.length > 0 ? failed(`结束时写不回开始时的值：${stillWrong.join("、")}${putRight.length > 0 ? `。另外已写回：${putRight.join("、")}` : ""}`) : putRight.length > 0 ? review(`这些设置中途被别的改动带着变了，已写回开始时的值：${putRight.join("、")}`) : passed(`${original.size} 项读到过值的设置，结束时都是开始时的值。`), 0);
  try {
    await system.closeSettings();
    await system.closeFolders();
    await rm(tmp, { recursive: true, force: true });
    record("final.cleanup", passed("关掉了设置窗口和文件夹窗口，删掉了临时文件。"), 0);
  } catch (error) {
    record("final.cleanup", review(`收尾时出错：${error instanceof Error ? error.message : "原因不明"}`), 0);
  }
  const report = {
    format: 1,
    machine: host.machine,
    platform,
    system: about.system,
    startedAt,
    finishedAt: host.now(),
    items,
    times: Object.fromEntries([...times].map(([name, values]) => [name, hxMedian(values)])),
    verified,
    untestable
  };
  return { report, pages, selfTest: selfTest.report, chineseNames };
}
function paneOf(catalog, key) {
  const address = catalog.pageSeeds().find((seed) => seed.key === key)?.address ?? "";
  return address.slice(address.indexOf(":") + 1);
}
function ownPane(catalog, key) {
  return paneOf(catalog, key).startsWith(HX_MAC_OWN_PANES);
}

// scripts/hx-computer-check.ts
var ATTENTION_LIMIT = 60;
function options(argv) {
  const read = {
    out: "hxbot-check",
    machine: `${process.platform}-${process.arch}`,
    screenshots: true,
    budgetMinutes: 0,
    merge: "",
    expected: []
  };
  for (let index = 0;index < argv.length; index += 1) {
    const name = argv[index];
    const value = argv[index + 1] ?? "";
    if (name === "--no-screenshots")
      read.screenshots = false;
    else if (name === "--out")
      read.out = value;
    else if (name === "--machine")
      read.machine = value;
    else if (name === "--budget-minutes")
      read.budgetMinutes = Math.max(0, Number(value) || 0);
    else if (name === "--merge")
      read.merge = value;
    else if (name === "--expected") {
      read.expected = value.split(",").map((part) => part.trim()).filter((part) => part.length > 0);
    } else
      continue;
    if (name !== "--no-screenshots")
      index += 1;
  }
  return read;
}
async function json(file) {
  let parsed;
  try {
    parsed = JSON.parse(await readFile3(file, "utf8"));
  } catch {
    parsed = null;
  }
  return parsed;
}
async function reportsIn(folder) {
  const reports = [];
  for (const name of (await readdir3(folder)).sort()) {
    const report = hxDecodeCheckReport(await json(join5(folder, name, "report.json")));
    if (report)
      reports.push(report);
  }
  return reports;
}
async function merge2(folder, expected) {
  const reports = await reportsIn(folder);
  const machines = expected.length > 0 ? expected : reports.map((report) => report.machine);
  const overview = hxCheckOverview(reports, machines);
  const verdict = hxCheckVerdict(reports, machines);
  await writeFile4(join5(folder, "overview.md"), overview);
  await writeFile4(join5(folder, "verdict.json"), `${JSON.stringify(verdict, null, 1)}
`);
  process.stdout.write(overview);
  return verdict.green ? 0 : 1;
}
async function check(read) {
  const platform = process.platform === "darwin" ? "mac" : process.platform === "win32" ? "windows" : null;
  if (platform === null) {
    process.stderr.write(`这个检查只在 macOS 和 Windows 上运行；它会修改系统设置，只应在 GitHub 的机器上运行。
`);
    return 2;
  }
  const out = resolve(read.out);
  await mkdir4(out, { recursive: true });
  const result = await hxRealCheck({
    platform,
    machine: read.machine,
    run: hxRun,
    home: homedir(),
    out,
    screenshots: read.screenshots,
    ...read.budgetMinutes > 0 ? { budgetMs: read.budgetMinutes * 60000 } : {},
    now: () => Date.now(),
    wait: (ms) => new Promise((done) => {
      setTimeout(done, ms);
    }),
    log: (line) => {
      process.stdout.write(`${line}
`);
    }
  });
  const summary = hxCheckSummary(result.report);
  await writeFile4(join5(out, "report.json"), `${JSON.stringify(result.report, null, 1)}
`);
  await writeFile4(join5(out, "summary.md"), summary);
  await writeFile4(join5(out, "pages.json"), `${JSON.stringify(result.pages, null, 1)}
`);
  await writeFile4(join5(out, "selftest.json"), `${JSON.stringify(result.selfTest, null, 1)}
`);
  if (result.chineseNames.length > 0) {
    await writeFile4(join5(out, "chinese-names.json"), `${JSON.stringify(result.chineseNames, null, 1)}
`);
  }
  const doubtful = result.report.items.filter((item) => item.outcome === "failed" || item.outcome === "review");
  const pictures = doubtful.flatMap((item) => item.shot ? [item.shot] : []).slice(0, ATTENTION_LIMIT);
  if (pictures.length > 0) {
    await mkdir4(join5(out, "attention"), { recursive: true });
    for (const picture of pictures) {
      await copyFile(join5(out, "screenshots", picture), join5(out, "attention", picture)).catch(() => {});
    }
  }
  process.stdout.write(`
${summary}`);
  return hxCheckCounts(result.report.items).failed > 0 ? 1 : 0;
}
var read = options(process.argv.slice(2));
var code = await (read.merge ? merge2(resolve(read.merge), read.expected) : check(read)).catch((error) => {
  process.stderr.write(`检查程序自己出错了：${error instanceof Error ? error.stack ?? error.message : "原因不明"}
`);
  return 3;
});
await new Promise((done) => {
  process.stdout.write("", () => {
    done();
  });
});
process.exit(code);
