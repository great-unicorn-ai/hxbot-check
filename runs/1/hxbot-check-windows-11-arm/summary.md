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

