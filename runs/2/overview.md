# HXBot 电脑操控：真系统检查

**结论：有 6 项失败。**

| 组 | macos-15 | macos-26 | windows-11-arm | windows-2022 | windows-2025 |
|---|---|---|---|---|---|
| 环境 | 4/4 | 4/4 | 2/2 | 2/2 | 2/2 |
| 目录 | 6/6 | 6/6 | 5/5 | 5/5 | 5/5 |
| 检索 | 35/36，**失败 1** | 35/36，**失败 1** | 28/28 | 28/28 | 28/28 |
| 打开应用、文件、网址 | 18/18 | 17/18，**失败 1** | 17/17 | 17/17 | 17/17 |
| 逐页打开系统设置 | 38/42，**失败 1**，待看 1，测不了 2 | 37/42，**失败 2**，待看 1，测不了 2 | 5/57 | 50/57，测不了 7 | 49/57，测不了 8 |
| 读写设置 | 56/56 | 56/56 | 25/26，测不了 1 | 25/26，测不了 1 | 25/26，测不了 1 |
| 闸门 | 4/4 | 4/4 | 0/4 | 4/4 | 4/4 |
| 工具整条路 | 5/5 | 5/5 | 0/5 | 5/5 | 5/5 |
| 为新增设置做的探测 | 11/27，测不了 16 | 11/27，测不了 16 | 0/21 | 17/21，测不了 4 | 18/21，测不了 3 |
| 收尾 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 |

每格是“通过的项数 / 这一组的项数”。

## 可以标成“已验证”的设置

- **macOS：**`alert-volume`、`dark-mode`、`dock-autohide`、`dock-magnification`、`dock-minimize-effect`、`dock-position`、`dock-recents`、`dock-size`、`input-volume`、`menu-bar-autohide`、`mute`、`volume`
- **Windows：**`app-dark-mode`、`clipboard-history`、`dark-mode`、`system-dark-mode`、`transparency`
  - 没有一台机器测得了，仍要在真机上自检：`brightness`

规则：在这个系统的每一台测到它的机器上，读、原样写回、真改、改回全部通过，并且至少有一台机器测到了它。

## macos-15：有失败

系统：macOS 15.8.2 (Darwin 24.6.0 arm64)。用时 158 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 35 | 1 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 18 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 38 | 1 | 1 | 2 | 0 |
| 读写设置 | 56 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 11 | 0 | 0 | 16 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **179** | **2** | **1** | **18** | **0** |

### 失败（2 项）

| 编号 | 看到了什么 |
|---|---|
| `search.14` | “关于本机”应得 page:about 或 app:/System/Library/CoreServices/Applications/About This Mac.app。认定：没有认定；前三名：page:about（About，100 分）；app:/System/Library/CoreServices/Applications/About This Mac.app（About This Mac，100 分） |
| `page.general` | 打开“General”的命令成功了，但设置窗口没有出现。 |

### 待看（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.panes` | 这些地址不是这台 Mac 的设置面板：com.apple.Passwords-Settings.extension；它们是否还能打开，看各自那一项。41 个地址里 38 个是这台 Mac 的设置面板；属于系统设置自身、无法这样核对的 2 个；这台 Mac 共有 196 个面板。这台 Mac 的面板：com.apple.Accessibility-Settings.extension com.apple.AccessibilitySettingsWidgetExtension com.apple.AccountsUISettings.AppIntents com.apple.AirDrop-Handoff-Settings.extension com.apple.Appearance-Settings.extension com.apple.AppleAccountIntents com.a… |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `page.wallet` | “Wallet & Apple Pay”要有相应的硬件才有，这台机器没有显示它。窗口显示：Game Center |
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 1271 |
| `catalog.load` | 1 |
| `catalog.rescan` | 736 |
| `open.cost` | 138 |
| `open.app` | 138 |
| `open.folder` | 1290 |
| `setting.read` | 93 |
| `setting.change` | 220 |
| `open.page.command` | 40 |
| `page.read` | 150 |
| `open.page` | 1322 |
| `tool.set` | 536 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`


## macos-26：有失败

系统：macOS 26.7.2 (Darwin 25.6.0 arm64)。用时 219 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 35 | 1 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 1 | 0 | 0 | 0 |
| 逐页打开系统设置 | 37 | 2 | 1 | 2 | 0 |
| 读写设置 | 56 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 11 | 0 | 0 | 16 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **177** | **4** | **1** | **18** | **0** |

### 失败（4 项）

| 编号 | 看到了什么 |
|---|---|
| `search.14` | “关于本机”应得 page:about 或 app:/System/Library/CoreServices/Applications/About This Mac.app。认定：没有认定；前三名：page:about（About，100 分）；app:/System/Library/CoreServices/Applications/About This Mac.app（About This Mac，100 分） |
| `open.missing` | 不存在的路径回答 not-found，不存在的名称回答 opened，打开的是 Apps。前三名：app:/System/Applications/Apps.app（Apps，51 分） |
| `page.general` | 打开“General”的命令成功了，但设置窗口没有出现。 |
| `page.startup-disk` | 打开“Startup Disk”后窗口没有动，地址可能无效。窗口显示：Transfer or Reset |

### 待看（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.panes` | 这些地址不是这台 Mac 的设置面板：com.apple.ScreenSaver-Settings.extension com.apple.Passwords-Settings.extension；它们是否还能打开，看各自那一项。41 个地址里 37 个是这台 Mac 的设置面板；属于系统设置自身、无法这样核对的 2 个；这台 Mac 共有 241 个面板。这台 Mac 的面板：com.apple.Accessibility-Settings.extension com.apple.AccessibilitySettingsWidgetExtension com.apple.AccountsUISettings.AppIntents com.apple.AirDrop-Handoff-Settings.extension com.apple.Appearance-Settings.exte… |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `page.screen-saver` | 这台 Mac 没有“Screen Saver”的设置面板，它在这个系统版本里不在这里。窗口显示：Wallpaper |
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 608 |
| `catalog.load` | 1 |
| `catalog.rescan` | 356 |
| `open.cost` | 121 |
| `open.app` | 154 |
| `open.folder` | 3207 |
| `setting.read` | 172 |
| `setting.change` | 318 |
| `open.page.command` | 66 |
| `page.read` | 156 |
| `open.page` | 1467 |
| `tool.set` | 1141 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`


## windows-11-arm：全部通过

系统：Microsoft Windows 11 Enterprise 10.0.26200 (Windows_NT 10.0.26200 arm64)。用时 2327 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 5 | 0 | 0 | 0 | 52 |
| 读写设置 | 25 | 0 | 0 | 1 | 0 |
| 闸门 | 0 | 0 | 0 | 0 | 4 |
| 工具整条路 | 0 | 0 | 0 | 0 | 5 |
| 为新增设置做的探测 | 0 | 0 | 0 | 0 | 21 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **84** | **0** | **0** | **1** | **82** |

### 测不了（1 项）

| 编号 | 看到了什么 |
|---|---|
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 25693 |
| `catalog.load` | 2 |
| `catalog.rescan` | 23558 |
| `open.cost` | 3643 |
| `open.app` | 22826 |
| `open.folder` | 67331 |
| `setting.read` | 21952 |
| `setting.change` | 44409 |
| `open.page.command` | 425 |
| `page.read` | 22287 |
| `open.page` | 22843 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


## windows-2022：全部通过

系统：Microsoft Windows Server 2022 Datacenter 10.0.20348 (Windows_NT 10.0.20348 x64)。用时 271 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 50 | 0 | 0 | 7 | 0 |
| 读写设置 | 25 | 0 | 0 | 1 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 17 | 0 | 0 | 4 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **155** | **0** | **0** | **12** | **0** |

### 测不了（8 项）

| 编号 | 看到了什么 |
|---|---|
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |
| `page.clipboard` | Windows Server 没有“Clipboard”这一页；桌面版的 Windows 有。窗口显示：Home / Search box, Find a setting / System / Display / Sound / Notifications & actions / Focus assist / Power & sleep / Storage / Tablet / Multitasking / Projecting to this PC / Remote Desktop / About |
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Devices / Bluetooth & other devices / Printers & scanners / Mouse / Typing / Pen & Windows Ink / AutoPlay / USB / Select your primary button / Left / Mouse pointer speed / Roll the mouse wheel to scroll |
| `page.wifi` | “Wi-Fi”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Network status / Network / Public network / You’re connected to the Internet / You’re on a metered network. Some apps might work differently to help you save data while on this network. / Show available networks |
| `page.airplane` | “Airplane mode”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Automatic proxy setup / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatically detect settings / Use setup script / Script address / Save |
| `page.hotspot` | “Mobile hotspot”要有相应的硬件才有，这台机器没有显示它。窗口显示：Home / Search box, Find a setting / Network & Internet / Status / Ethernet / Dial-up / VPN / Proxy / Automatic proxy setup / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatically detect settings / Use setup script / Script address / Save |
| `page.game-bar` | Windows Server 没有“Game Bar”这一页；桌面版的 Windows 有。窗口显示：Home / Search box, Find a setting / Time & Language / Date & time / Region / Language / Speech / Choose the primary language you speak, manage voices for your device and apps, and set up your microphone. / Speech language / Choose the language you speak with your device / English (United States) / Recognize non-native accents for this language / M… |
| `page.backup` | Windows Server 没有“Windows Backup”这一页；桌面版的 Windows 有。窗口显示：Home / Search box, Find a setting / Update & Security / Windows Update / Delivery Optimization / Windows Security / Troubleshoot / Recovery / Activation / For developers / *Some settings are managed by your organization / (View policies) / Updates available / Last checked: ‎11/‎12/‎2026, ‏‎12:23 AM |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 3514 |
| `catalog.load` | 2 |
| `catalog.rescan` | 483 |
| `open.cost` | 3504 |
| `open.app` | 639 |
| `open.folder` | 4007 |
| `setting.read` | 245 |
| `setting.change` | 745 |
| `open.page.command` | 141 |
| `page.read` | 487 |
| `open.page` | 742 |
| `tool.set` | 1016 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


## windows-2025：全部通过

系统：Microsoft Windows Server 2025 Datacenter 10.0.26100 (Windows_NT 10.0.26100 x64)。用时 283 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 49 | 0 | 0 | 8 | 0 |
| 读写设置 | 25 | 0 | 0 | 1 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 18 | 0 | 0 | 3 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **155** | **0** | **0** | **12** | **0** |

### 测不了（9 项）

| 编号 | 看到了什么 |
|---|---|
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |
| `page.night-light` | Windows Server 没有“Night light”这一页；桌面版的 Windows 有。窗口显示：System / Display / Brightness & color / Color profile / Determine how colors appear on your screen / HDR / More about HDR / Scale & layout / Scale / Change the size of text, apps, and other items / 100% (Recommended) / Display resolution / Adjust the resolution to fit your connected display / 1024 × 768 (Recommended) |
| `page.clipboard` | Windows Server 没有“Clipboard”这一页；桌面版的 Windows 有。窗口显示：System / Multitasking / Snap windows / Snap windows to automatically resize and arrange them into layouts / Show more settings / Show tabs from apps when snapping or pressing Alt+Tab / 3 most recent tabs / Desktops / Title bar window shake / When I grab a window’s title bar and shake it, minimize all other windows / Give feedback |
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Bluetooth & devices / Mouse / Primary mouse button / Left / Mouse pointer speed / Enhance pointer precision / Scrolling / Roll the mouse wheel to scroll / Multiple lines at a time / Lines to scroll at a time / Scroll inactive windows when hovering over them / Scrolling direction / Down motion scrolls down / Related settings |
| `page.wifi` | “Wi-Fi”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / NetworkHeroControlList / Ethernet / Authentication, IP and DNS settings, metered network / VPN / Add, connect, manage / Proxy / Proxy server for Wi-Fi and Ethernet connections / Dial-up / Set up a dial-up internet connection / Advanced network settings / View all network adapters, network reset / Vertical |
| `page.airplane` | “Airplane mode”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / Proxy / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatic proxy setup / Automatically detect settings / Use setup script / Off / Set up / Manual proxy setup / Use a proxy server / Give feedback |
| `page.hotspot` | “Mobile hotspot”要有相应的硬件才有，这台机器没有显示它。窗口显示：Network & internet / Proxy / Use a proxy server for Ethernet or Wi-Fi connections. These settings don’t apply to VPN connections. / Automatic proxy setup / Automatically detect settings / Use setup script / Off / Set up / Manual proxy setup / Use a proxy server / Give feedback |
| `page.game-bar` | Windows Server 没有“Game Bar”这一页；桌面版的 Windows 有。窗口显示：Time & language / Speech / Choose the primary language you speak, manage voices for your device and apps, and set up your microphone. / Speech language / Choose the language you speak with your device / English (United States) / Recognize non-native accents for this language / Voices / Choose a voice / Microsoft David / Voice speed / Listen to voi… |
| `page.backup` | Windows Server 没有“Windows Backup”这一页；桌面版的 Windows 有。窗口显示：Windows Update / You're up to date / Last checked: ‎11/‎3/‎2026, ‏‎6:29 PM / Check for updates / More options / Get the latest updates as soon as they're available / Be among the first to get the latest non-security updates, fixes, and improvements as they roll out. Learn more / Learn more / Pause updates / Pause for 1 week / Update history … |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 2019 |
| `catalog.load` | 2 |
| `catalog.rescan` | 720 |
| `open.cost` | 1718 |
| `open.app` | 1121 |
| `open.folder` | 4428 |
| `setting.read` | 306 |
| `setting.change` | 896 |
| `open.page.command` | 261 |
| `page.read` | 636 |
| `open.page` | 987 |
| `tool.set` | 1366 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


