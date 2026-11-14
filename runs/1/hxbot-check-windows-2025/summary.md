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

