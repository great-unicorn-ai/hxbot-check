## windows-2022：全部通过

系统：Microsoft Windows Server 2022 Datacenter 10.0.20348 (Windows_NT 10.0.20348 x64)。用时 325 秒。

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
| `catalog.scan` | 1615 |
| `catalog.load` | 2 |
| `catalog.rescan` | 540 |
| `open.cost` | 1435 |
| `open.app` | 790 |
| `open.folder` | 2078 |
| `setting.read` | 261 |
| `setting.change` | 734 |
| `setting.change.fast` | 500 |
| `open.page.command` | 144 |
| `page.read` | 548 |
| `open.page` | 857 |
| `tool.set` | 583 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`、`taskbar-alignment`、`task-view-button`、`clock-seconds`、`accent-title-bars`、`accent-start-taskbar`、`notifications`、`game-mode`、`storage-sense`、`screen-off-minutes`、`sleep-minutes`

### 这台机器测不了的设置（仍要在真机上自检）

`brightness`

