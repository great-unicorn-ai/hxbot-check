# HXBot 电脑操控：真系统检查

**结论：全部通过，没有要人看的项。**

| 组 | macos-15 | macos-26 | windows-11-arm | windows-2022 | windows-2025 |
|---|---|---|---|---|---|
| 环境 | 4/4 | 4/4 | 2/2 | 2/2 | 2/2 |
| 目录 | 6/6 | 6/6 | 5/5 | 5/5 | 5/5 |
| 检索 | 38/38 | 38/38 | 28/28 | 28/28 | 28/28 |
| 打开应用、文件、网址 | 18/18 | 18/18 | 17/17 | 17/17 | 17/17 |
| 逐页打开系统设置 | 39/41，测不了 2 | 39/41，测不了 2 | 13/57，测不了 1 | 50/57，测不了 7 | 49/57，测不了 8 |
| 读写设置 | 91/91 | 91/91 | 88/89，测不了 1 | 88/89，测不了 1 | 88/89，测不了 1 |
| 闸门 | 4/4 | 4/4 | 0/4 | 4/4 | 4/4 |
| 工具整条路 | 5/5 | 5/5 | 0/5 | 5/5 | 5/5 |
| 为新增设置做的探测 | 15/27，测不了 12 | 15/27，测不了 12 | 0/21 | 19/21，测不了 2 | 19/21，测不了 2 |
| 收尾 | 2/2 | 2/2 | 2/2 | 2/2 | 2/2 |

每格是“通过的项数 / 这一组的项数”。

## 可以标成“已验证”的设置

- **macOS：**`alert-volume`、`dark-mode`、`dock-autohide`、`dock-indicators`、`dock-launch-animation`、`dock-magnification`、`dock-magnification-size`、`dock-minimize-effect`、`dock-minimize-into-app`、`dock-position`、`dock-recents`、`dock-size`、`input-volume`、`menu-bar-autohide`、`mute`、`volume`
- **Windows：**`accent-start-taskbar`、`accent-title-bars`、`app-dark-mode`、`clipboard-history`、`clock-seconds`、`dark-mode`、`game-mode`、`notifications`、`screen-off-minutes`、`sleep-minutes`、`storage-sense`、`system-dark-mode`、`task-view-button`、`taskbar-alignment`、`transparency`
  - 没有一台机器测得了，仍要在真机上自检：`brightness`

规则：在这个系统的每一台测到它的机器上，读、原样写回、真改、改回全部通过，并且至少有一台机器测到了它。

## macos-15：全部通过

系统：macOS 15.8.2 (Darwin 24.6.0 arm64)。用时 149 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 38 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 18 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 39 | 0 | 0 | 2 | 0 |
| 读写设置 | 91 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 15 | 0 | 0 | 12 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **222** | **0** | **0** | **14** | **0** |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `page.wallet` | “Wallet & Apple Pay”要有相应的硬件才有，这台机器没有显示它。窗口显示：Game Center |
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 812 |
| `catalog.load` | 0 |
| `catalog.rescan` | 707 |
| `open.cost` | 213 |
| `open.app` | 201 |
| `open.folder` | 1516 |
| `setting.read` | 87 |
| `setting.change` | 183 |
| `setting.change.fast` | 108 |
| `open.page.command` | 36 |
| `page.read` | 190 |
| `open.page` | 1196 |
| `tool.set` | 189 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`、`dock-indicators`、`dock-minimize-into-app`、`dock-launch-animation`、`dock-magnification-size`


## macos-26：全部通过

系统：macOS 26.7.2 (Darwin 25.6.0 arm64)。用时 204 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 4 | 0 | 0 | 0 | 0 |
| 目录 | 6 | 0 | 0 | 0 | 0 |
| 检索 | 38 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 18 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 39 | 0 | 0 | 2 | 0 |
| 读写设置 | 91 | 0 | 0 | 0 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 15 | 0 | 0 | 12 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **222** | **0** | **0** | **14** | **0** |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `page.screen-saver` | 这台 Mac 没有“Screen Saver”的设置面板，它在这个系统版本里不在这里。窗口显示：Wallpaper |
| `page.trackpad` | “Trackpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Mouse |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 723 |
| `catalog.load` | 1 |
| `catalog.rescan` | 479 |
| `open.cost` | 146 |
| `open.app` | 217 |
| `open.folder` | 2760 |
| `setting.read` | 125 |
| `setting.change` | 244 |
| `setting.change.fast` | 138 |
| `open.page.command` | 67 |
| `page.read` | 214 |
| `open.page` | 1458 |
| `tool.set` | 292 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`、`dock-indicators`、`dock-minimize-into-app`、`dock-launch-animation`、`dock-magnification-size`


## windows-11-arm：全部通过

系统：Microsoft Windows 11 Enterprise 10.0.26200 (Windows_NT 10.0.26200 arm64)。用时 5479 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 13 | 0 | 0 | 1 | 43 |
| 读写设置 | 88 | 0 | 0 | 1 | 0 |
| 闸门 | 0 | 0 | 0 | 0 | 4 |
| 工具整条路 | 0 | 0 | 0 | 0 | 5 |
| 为新增设置做的探测 | 0 | 0 | 0 | 0 | 21 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **155** | **0** | **0** | **2** | **73** |

### 测不了（2 项）

| 编号 | 看到了什么 |
|---|---|
| `setting.brightness.read` | 命令成功，但这台机器上没有值。退出码 0：none |
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Bluetooth & devices / Mouse / Primary mouse button / Left / Mouse pointer speed / Enhance pointer precision / Scrolling / Roll the mouse wheel to scroll / Multiple lines at a time / Lines to scroll at a time / Scroll inactive windows when hovering over them / Scrolling direction / Down motion scrolls down / Related settings |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 28916 |
| `catalog.load` | 3 |
| `catalog.rescan` | 24200 |
| `open.cost` | 3572 |
| `open.app` | 23332 |
| `open.folder` | 68208 |
| `setting.read` | 22391 |
| `setting.change` | 45235 |
| `setting.change.fast` | 22720 |
| `open.page.command` | 417 |
| `page.read` | 22957 |
| `open.page` | 23387 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`、`taskbar-alignment`、`task-view-button`、`clock-seconds`、`accent-title-bars`、`accent-start-taskbar`、`notifications`、`game-mode`、`storage-sense`、`screen-off-minutes`、`sleep-minutes`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


## windows-2022：全部通过

系统：Microsoft Windows Server 2022 Datacenter 10.0.20348 (Windows_NT 10.0.20348 x64)。用时 319 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 50 | 0 | 0 | 7 | 0 |
| 读写设置 | 88 | 0 | 0 | 1 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 19 | 0 | 0 | 2 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **220** | **0** | **0** | **10** | **0** |

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
| `catalog.scan` | 2173 |
| `catalog.load` | 3 |
| `catalog.rescan` | 520 |
| `open.cost` | 1404 |
| `open.app` | 690 |
| `open.folder` | 2345 |
| `setting.read` | 253 |
| `setting.change` | 692 |
| `setting.change.fast` | 460 |
| `open.page.command` | 143 |
| `page.read` | 522 |
| `open.page` | 783 |
| `tool.set` | 575 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`、`taskbar-alignment`、`task-view-button`、`clock-seconds`、`accent-title-bars`、`accent-start-taskbar`、`notifications`、`game-mode`、`storage-sense`、`screen-off-minutes`、`sleep-minutes`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


## windows-2025：全部通过

系统：Microsoft Windows Server 2025 Datacenter 10.0.26100 (Windows_NT 10.0.26100 x64)。用时 350 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 49 | 0 | 0 | 8 | 0 |
| 读写设置 | 88 | 0 | 0 | 1 | 0 |
| 闸门 | 4 | 0 | 0 | 0 | 0 |
| 工具整条路 | 5 | 0 | 0 | 0 | 0 |
| 为新增设置做的探测 | 19 | 0 | 0 | 2 | 0 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **219** | **0** | **0** | **11** | **0** |

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
| `catalog.scan` | 2050 |
| `catalog.load` | 2 |
| `catalog.rescan` | 619 |
| `open.cost` | 1562 |
| `open.app` | 679 |
| `open.folder` | 4523 |
| `setting.read` | 295 |
| `setting.change` | 823 |
| `setting.change.fast` | 549 |
| `open.page.command` | 251 |
| `page.read` | 603 |
| `open.page` | 972 |
| `tool.set` | 669 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`、`taskbar-alignment`、`task-view-button`、`clock-seconds`、`accent-title-bars`、`accent-start-taskbar`、`notifications`、`game-mode`、`storage-sense`、`screen-off-minutes`、`sleep-minutes`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`


