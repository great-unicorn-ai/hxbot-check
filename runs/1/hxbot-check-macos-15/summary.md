## macos-15：有失败

系统：macOS 15.8.2 (Darwin 24.6.0 arm64)。用时 147 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 35 | 1 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 38 | 3 | 0 | 2 | 0 |
| 读写设置 | 56 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 11 | 0 | 0 | 16 | 0 |
| 收尾 | 1 | 1 | 0 | 0 | 0 |
| **合计** | **177** | **5** | **0** | **18** | **0** |

### 失败（5 项）

| 编号 | 看到了什么 |
|---|---|
| `search.14` | “关于本机”应得 page:about。认定：没有认定；前三名：page:about（About，100 分）；app:/System/Library/CoreServices/Applications/About This Mac.app（About This Mac，100 分） |
| `page.panes` | 这台 Mac 没有这些面板标识：com.apple.Passwords-Settings.extension。42 个地址里 39 个是这台 Mac 的设置面板；属于系统设置自身、无法这样核对的 2 个；这台 Mac 共有 196 个面板。这台 Mac 的面板：com.apple.Accessibility-Settings.extension com.apple.AccessibilitySettingsWidgetExtension com.apple.AccountsUISettings.AppIntents com.apple.AirDrop-Handoff-Settings.extension com.apple.Appearance-Settings.extension com.apple.AppleAccountIntents com.apple.AppleMediaServ… |
| `page.vpn` | 打开“VPN”后窗口没有动，地址可能无效。窗口显示：Network |
| `page.general` | 打开“General”的命令成功了，但设置窗口没有出现。 |
| `final.restored` | 结束时和开始时不一样的设置：dock-size（应是 32，已再改回） |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `page.wallet` | “Wallet & Apple Pay”要有相应的硬件才有，这台机器没有显示它。窗口显示：Game Center |
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 651 |
| `catalog.load` | 1 |
| `catalog.rescan` | 537 |
| `open.app` | 133 |
| `open.folder` | 910 |
| `open.page.command` | 38 |
| `page.read` | 151 |
| `open.page` | 1198 |
| `setting.read` | 107 |
| `setting.change` | 211 |
| `tool.set` | 471 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`

