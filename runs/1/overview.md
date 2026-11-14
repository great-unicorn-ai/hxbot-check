# HXBot 电脑操控：真系统检查

**结论：有 87 项失败。**

| 组 | macos-15 | macos-26 | windows-11-arm | windows-2022 | windows-2025 |
|---|---|---|---|---|---|
| 环境 | 4/4 | 4/4 | 2/2 | 2/2 | 2/2 |
| 目录 | 6/6 | 6/6 | 5/5 | 5/5 | 5/5 |
| 检索 | 35/36，**失败 1** | 35/36，**失败 1** | 28/28 | 25/28，**失败 3** | 28/28 |
| 打开应用、文件、网址 | 17/17 | 16/17，**失败 1** | 10/16，**失败 6** | 16/16 | 16/16 |
| 逐页打开系统设置 | 38/43，**失败 3**，测不了 2 | 37/43，**失败 4**，待看 1，测不了 1 | 0/57，**失败 57** | 49/57，**失败 3**，待看 1，测不了 4 | 49/57，**失败 4**，测不了 4 |
| 读写设置 | 56/56 | 56/56 | 3/10 | 25/26，测不了 1 | 25/26，测不了 1 |
| 闸门 | 4/4 | 4/4 | 0/4 | 3/4，**失败 1** | 4/4 |
| 工具整条路 | 5/5 | 5/5 | 0/5 | 5/5 | 5/5 |
| 为新增设置做的探测 | 11/27，测不了 16 | 11/27，测不了 16 | 0/20 | 16/20，测不了 4 | 17/20，测不了 3 |
| 收尾 | 1/2，**失败 1** | 1/2，**失败 1** | 1/2，**失败 1** | 2/2 | 2/2 |

每格是“通过的项数 / 这一组的项数”。

## 可以标成“已验证”的设置

- **macOS：**`alert-volume`、`dark-mode`、`dock-autohide`、`dock-magnification`、`dock-minimize-effect`、`dock-position`、`dock-recents`、`dock-size`、`input-volume`、`menu-bar-autohide`、`mute`、`volume`
- **Windows：**没有。

规则：在这个系统的每一台测到它的机器上，读、原样写回、真改、改回全部通过，并且至少有一台机器测到了它。

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


## macos-26：有失败

系统：macOS 26.7.2 (Darwin 25.6.0 arm64)。用时 178 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 35 | 1 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 16 | 1 | 0 | 0 | 0 |
| 逐页打开系统设置 | 37 | 4 | 1 | 1 | 0 |
| 读写设置 | 56 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 11 | 0 | 0 | 16 | 0 |
| 收尾 | 1 | 1 | 0 | 0 | 0 |
| **合计** | **175** | **7** | **1** | **17** | **0** |

### 失败（7 项）

| 编号 | 看到了什么 |
|---|---|
| `search.14` | “关于本机”应得 page:about。认定：没有认定；前三名：page:about（About，100 分）；app:/System/Library/CoreServices/Applications/About This Mac.app（About This Mac，100 分） |
| `open.missing` | 不存在的路径回答 not-found，不存在的名称回答 opened。 |
| `page.panes` | 这台 Mac 没有这些面板标识：com.apple.ScreenSaver-Settings.extension com.apple.Passwords-Settings.extension。42 个地址里 38 个是这台 Mac 的设置面板；属于系统设置自身、无法这样核对的 2 个；这台 Mac 共有 241 个面板。这台 Mac 的面板：com.apple.Accessibility-Settings.extension com.apple.AccessibilitySettingsWidgetExtension com.apple.AccountsUISettings.AppIntents com.apple.AirDrop-Handoff-Settings.extension com.apple.Appearance-Settings.extension com.apple.App… |
| `page.vpn` | 打开“VPN”后窗口没有动，地址可能无效。窗口显示：Network |
| `page.general` | 打开“General”的命令成功了，但设置窗口没有出现。 |
| `page.screen-saver` | 打开“Screen Saver”后窗口没有动，地址可能无效。窗口显示：Wallpaper |
| `final.restored` | 结束时和开始时不一样的设置：dock-size（应是 32，已再改回） |

### 待看（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.airdrop` | 要的是“AirDrop & Handoff”，自动核对拿不准。窗口显示：AirDrop & Continuity |

### 测不了（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 602 |
| `catalog.load` | 1 |
| `catalog.rescan` | 566 |
| `open.app` | 140 |
| `open.folder` | 2750 |
| `open.page.command` | 50 |
| `page.read` | 162 |
| `open.page` | 1143 |
| `setting.read` | 141 |
| `setting.change` | 345 |
| `tool.set` | 668 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`


## windows-11-arm：有失败

系统：Microsoft Windows 11 Enterprise 10.0.26200 (Windows_NT 10.0.26200 arm64)。用时 1938 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 10 | 6 | 0 | 0 | 0 |
| 逐页打开系统设置 | 0 | 57 | 0 | 0 | 0 |
| 读写设置 | 3 | 0 | 0 | 0 | 7 |
| 闸门 | 0 | 0 | 0 | 0 | 4 |
| 工具整条路 | 0 | 0 | 0 | 0 | 5 |
| 为新增设置做的探测 | 0 | 0 | 0 | 0 | 20 |
| 收尾 | 1 | 1 | 0 | 0 | 0 |
| **合计** | **49** | **64** | **0** | **0** | **36** |

### 失败（64 项）

| 编号 | 看到了什么 |
|---|---|
| `open.app.notepad` | 按名称打开 Notepad，回答是 failed：Opening it did not answer in time |
| `open.app.paint` | 按名称打开 Paint，回答是 failed：Opening it did not answer in time |
| `open.app.calculator` | 按名称打开 Calculator，回答是 failed：Opening it did not answer in time |
| `open.folder` | 打开文件夹，回答是 failed：Opening it did not answer in time |
| `open.document` | 打开 .txt 文件，回答是 failed：Opening it did not answer in time |
| `open.url` | 打开网址，回答是 failed：Opening it did not answer in time |
| `page.display` | 打开“Display”，回答是 failed：Opening it did not answer in time |
| `page.night-light` | 打开“Night light”，回答是 failed：Opening it did not answer in time |
| `page.sound` | 打开“Sound”，回答是 failed：Opening it did not answer in time |
| `page.notifications` | 打开“Notifications”，回答是 failed：Opening it did not answer in time |
| `page.focus` | 打开“Focus”，回答是 failed：Opening it did not answer in time |
| `page.power` | 打开“Power & sleep”，回答是 failed：Opening it did not answer in time |
| `page.storage` | 打开“Storage”，回答是 failed：Opening it did not answer in time |
| `page.multitasking` | 打开“Multitasking”，回答是 failed：Opening it did not answer in time |
| `page.clipboard` | 打开“Clipboard”，回答是 failed：Opening it did not answer in time |
| `page.about` | 打开“About”，回答是 failed：Opening it did not answer in time |
| `page.bluetooth` | 打开“Bluetooth & devices”，回答是 failed：Opening it did not answer in time |
| `page.printers` | 打开“Printers & scanners”，回答是 failed：Opening it did not answer in time |
| `page.mouse` | 打开“Mouse”，回答是 failed：Opening it did not answer in time |
| `page.touchpad` | 打开“Touchpad”，回答是 failed：Opening it did not answer in time |
| `page.typing` | 打开“Typing”，回答是 failed：Opening it did not answer in time |
| `page.network` | 打开“Network & internet”，回答是 failed：Opening it did not answer in time |
| `page.wifi` | 打开“Wi-Fi”，回答是 failed：Opening it did not answer in time |
| `page.ethernet` | 打开“Ethernet”，回答是 failed：Opening it did not answer in time |
| `page.vpn` | 打开“VPN”，回答是 failed：Opening it did not answer in time |
| `page.proxy` | 打开“Proxy”，回答是 failed：Opening it did not answer in time |
| `page.airplane` | 打开“Airplane mode”，回答是 failed：Opening it did not answer in time |
| `page.hotspot` | 打开“Mobile hotspot”，回答是 failed：Opening it did not answer in time |
| `page.personalization` | 打开“Personalization”，回答是 failed：Opening it did not answer in time |
| `page.background` | 打开“Background”，回答是 failed：Opening it did not answer in time |
| `page.colors` | 打开“Colors”，回答是 failed：Opening it did not answer in time |
| `page.lock-screen` | 打开“Lock screen”，回答是 failed：Opening it did not answer in time |
| `page.themes` | 打开“Themes”，回答是 failed：Opening it did not answer in time |
| `page.fonts` | 打开“Fonts”，回答是 failed：Opening it did not answer in time |
| `page.taskbar` | 打开“Taskbar”，回答是 failed：Opening it did not answer in time |
| `page.start` | 打开“Start”，回答是 failed：Opening it did not answer in time |
| `page.apps` | 打开“Installed apps”，回答是 failed：Opening it did not answer in time |
| `page.default-apps` | 打开“Default apps”，回答是 failed：Opening it did not answer in time |
| `page.startup-apps` | 打开“Startup apps”，回答是 failed：Opening it did not answer in time |
| `page.your-info` | 打开“Your info”，回答是 failed：Opening it did not answer in time |
| `page.email-accounts` | 打开“Email & accounts”，回答是 failed：Opening it did not answer in time |
| `page.sign-in` | 打开“Sign-in options”，回答是 failed：Opening it did not answer in time |
| `page.other-users` | 打开“Other users”，回答是 failed：Opening it did not answer in time |
| `page.date-time` | 打开“Date & time”，回答是 failed：Opening it did not answer in time |
| `page.language` | 打开“Language & region”，回答是 failed：Opening it did not answer in time |
| `page.speech` | 打开“Speech”，回答是 failed：Opening it did not answer in time |
| `page.game-bar` | 打开“Game Bar”，回答是 failed：Opening it did not answer in time |
| `page.accessibility` | 打开“Accessibility”，回答是 failed：Opening it did not answer in time |
| `page.text-size` | 打开“Text size”，回答是 failed：Opening it did not answer in time |
| `page.mouse-pointer` | 打开“Mouse pointer and touch”，回答是 failed：Opening it did not answer in time |
| `page.narrator` | 打开“Narrator”，回答是 failed：Opening it did not answer in time |
| `page.magnifier` | 打开“Magnifier”，回答是 failed：Opening it did not answer in time |
| `page.privacy` | 打开“Privacy & security”，回答是 failed：Opening it did not answer in time |
| `page.location` | 打开“Location”，回答是 failed：Opening it did not answer in time |
| `page.camera` | 打开“Camera”，回答是 failed：Opening it did not answer in time |
| `page.microphone` | 打开“Microphone access”，回答是 failed：Opening it did not answer in time |
| `page.windows-security` | 打开“Windows Security”，回答是 failed：Opening it did not answer in time |
| `page.windows-update` | 打开“Windows Update”，回答是 failed：Opening it did not answer in time |
| `page.backup` | 打开“Windows Backup”，回答是 failed：Opening it did not answer in time |
| `page.troubleshoot` | 打开“Troubleshoot”，回答是 failed：Opening it did not answer in time |
| `page.recovery` | 打开“Recovery”，回答是 failed：Opening it did not answer in time |
| `page.activation` | 打开“Activation”，回答是 failed：Opening it did not answer in time |
| `page.developers` | 打开“For developers”，回答是 failed：Opening it did not answer in time |
| `final.restored` | 结束时和开始时不一样的设置：dark-mode（应是 off，已再改回） |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 28830 |
| `catalog.load` | 2 |
| `catalog.rescan` | 24430 |
| `setting.read` | 22394 |
| `setting.change` | 45388 |

### 这台机器上读、原样写回、真改、改回都通过的设置

没有。


## windows-2022：有失败

系统：Microsoft Windows Server 2022 Datacenter 10.0.20348 (Windows_NT 10.0.20348 x64)。用时 295 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 25 | 3 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 16 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 49 | 3 | 1 | 4 | 0 |
| 读写设置 | 25 | 0 | 0 | 1 | 0 |
| 闸门 | 3 | 1 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 16 | 0 | 0 | 4 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **148** | **7** | **1** | **9** | **0** |

### 失败（7 项）

| 编号 | 看到了什么 |
|---|---|
| `search.24` | “设置”应得应用 Settings。认定：没有认定；前三名：app:Microsoft.AutoGenerated.{0423BC28-B989-92D0-56C0-F931E344705B}（Settings，100 分）；app:windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel（Settings，100 分） |
| `search.25` | “打开设置”应得应用 Settings。认定：没有认定；前三名：app:Microsoft.AutoGenerated.{0423BC28-B989-92D0-56C0-F931E344705B}（Settings，98 分）；app:windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel（Settings，98 分） |
| `search.26` | “系统设置”应得应用 Settings。认定：没有认定；前三名：app:Microsoft.AutoGenerated.{0423BC28-B989-92D0-56C0-F931E344705B}（Settings，100 分）；app:windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel（Settings，100 分） |
| `page.clipboard` | 打开“Clipboard”后窗口没有动，地址可能无效。窗口显示：Home / Search box, Find a setting / System / Display / Sound / Notifications & actions / Focus assist / Power & sleep / Storage / Tablet / Multitasking / Projecting to this PC / Remote Desktop / About |
| `page.game-bar` | 打开“Game Bar”后窗口没有动，地址可能无效。窗口显示：Home / Search box, Find a setting / Time & Language / Date & time / Region / Language / Speech / Choose the primary language you speak, manage voices for your device and apps, and set up your microphone. / Speech language / Choose the language you speak with your device / English (United States) / Recognize non-native accents for this language / Microphone / Set up y… |
| `page.backup` | 打开“Windows Backup”后窗口没有动，地址可能无效。窗口显示：Home / Search box, Find a setting / Update & Security / Windows Update / Delivery Optimization / Windows Security / Troubleshoot / Recovery / Activation / For developers / *Some settings are managed by your organization / (View policies) / Updates available / Last checked: Yesterday, ‏‎12:23 AM |
| `gate.after` | 改回 system only，回答是 invalid-value。 |

### 待看（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.accessibility` | 要的是“Accessibility”，自动核对拿不准。窗口显示：Home / Search box, Find a setting / Ease of Access / Vision / Display / Mouse pointer / Text cursor / Magnifier / Color filters / High contrast / Narrator / Hearing / Audio / Closed captions |

### 测不了（5 项）

| 编号 | 看到了什么 |
|---|---|
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Devices / Bluetooth & other devices / Printers & scanners / Mouse / Typing / Pen & Windows Ink / AutoPlay / USB / Select your primary button / Left / Mouse pointer speed / Roll the mouse wheel to scroll |
| `page.wifi` | “Wi-Fi”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Network status / Network / Public network / You’re connected to the Internet / You’re on a metered network. Some apps might work differently to help you save data while on this network. / Show available networks |
| `page.airplane` | “Airplane mode”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Automatic proxy setup / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatically detect settings / Use setup script / Script address / Save |
| `page.hotspot` | “Mobile hotspot”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Automatic proxy setup / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatically detect settings / Use setup script / Script address / Save |
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 3479 |
| `catalog.load` | 2 |
| `catalog.rescan` | 525 |
| `open.app` | 851 |
| `open.folder` | 4334 |
| `open.page.command` | 390 |
| `page.read` | 526 |
| `open.page` | 1066 |
| `setting.read` | 264 |
| `setting.change` | 813 |
| `tool.set` | 1078 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


## windows-2025：有失败

系统：Microsoft Windows Server 2025 Datacenter 10.0.26100 (Windows_NT 10.0.26100 x64)。用时 257 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 16 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 49 | 4 | 0 | 4 | 0 |
| 读写设置 | 25 | 0 | 0 | 1 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 17 | 0 | 0 | 3 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **153** | **4** | **0** | **8** | **0** |

### 失败（4 项）

| 编号 | 看到了什么 |
|---|---|
| `page.night-light` | 打开“Night light”后窗口没有动，地址可能无效。窗口显示：System / Display / Brightness & color / Color profile / Determine how colors appear on your screen / HDR / More about HDR / Scale & layout / Scale / Change the size of text, apps, and other items / 100% (Recommended) / Display resolution / Adjust the resolution to fit your connected display / 1024 × 768 (Recommended) |
| `page.clipboard` | 打开“Clipboard”后窗口没有动，地址可能无效。窗口显示：System / Multitasking / Snap windows / Snap windows to automatically resize and arrange them into layouts / Show more settings / Show tabs from apps when snapping or pressing Alt+Tab / 3 most recent tabs / Desktops / Title bar window shake / When I grab a window’s title bar and shake it, minimize all other windows / Give feedback |
| `page.game-bar` | 打开“Game Bar”后窗口没有动，地址可能无效。窗口显示：Time & language / Speech / Choose the primary language you speak, manage voices for your device and apps, and set up your microphone. / Speech language / Choose the language you speak with your device / English (United States) / Recognize non-native accents for this language / Voices / Choose a voice / Microsoft David / Voice speed / Listen to voice sample / Preview … |
| `page.backup` | 打开“Windows Backup”后窗口没有动，地址可能无效。窗口显示：Windows Update / You're up to date / Last checked: ‎11/‎3/‎2026, ‏‎6:29 PM / Check for updates / More options / Get the latest updates as soon as they're available / Be among the first to get the latest non-security updates, fixes, and improvements as they roll out. Learn more / Learn more / Pause updates / Pause for 1 week / Update history / Advanced options /… |

### 测不了（5 项）

| 编号 | 看到了什么 |
|---|---|
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Bluetooth & devices / Mouse / Primary mouse button / Left / Mouse pointer speed / Enhance pointer precision / Scrolling / Roll the mouse wheel to scroll / Multiple lines at a time / Lines to scroll at a time / Scroll inactive windows when hovering over them / Scrolling direction / Down motion scrolls down / Related settings |
| `page.wifi` | “Wi-Fi”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / NetworkHeroControlList / Ethernet / Authentication, IP and DNS settings, metered network / VPN / Add, connect, manage / Proxy / Proxy server for Wi-Fi and Ethernet connections / Dial-up / Set up a dial-up internet connection / Advanced network settings / View all network adapters, network reset / Vertical |
| `page.airplane` | “Airplane mode”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / Proxy / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatic proxy setup / Automatically detect settings / Use setup script / Off / Set up / Manual proxy setup / Use a proxy server / Give feedback |
| `page.hotspot` | “Mobile hotspot”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / Proxy / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatic proxy setup / Automatically detect settings / Use setup script / Off / Set up / Manual proxy setup / Use a proxy server / Give feedback |
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 3112 |
| `catalog.load` | 2 |
| `catalog.rescan` | 521 |
| `open.app` | 677 |
| `open.folder` | 7105 |
| `open.page.command` | 330 |
| `page.read` | 492 |
| `open.page` | 911 |
| `setting.read` | 260 |
| `setting.change` | 741 |
| `tool.set` | 1113 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


