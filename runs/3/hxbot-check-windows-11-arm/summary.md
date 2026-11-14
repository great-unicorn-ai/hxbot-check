## windows-11-arm：有失败

系统：Microsoft Windows 11 Enterprise 10.0.26200 (Windows_NT 10.0.26200 arm64)。用时 5488 秒。

| 组 | 通过 | 失败 | 待看 | 测不了 | 跳过 |
|---|---:|---:|---:|---:|---:|
| 环境 | 2 | 0 | 0 | 0 | 0 |
| 目录 | 5 | 0 | 0 | 0 | 0 |
| 检索 | 28 | 0 | 0 | 0 | 0 |
| 打开应用、文件、网址 | 17 | 0 | 0 | 0 | 0 |
| 逐页打开系统设置 | 13 | 0 | 0 | 1 | 43 |
| 读写设置 | 88 | 1 | 0 | 0 | 0 |
| 闸门 | 0 | 0 | 0 | 0 | 4 |
| 工具整条路 | 0 | 0 | 0 | 0 | 5 |
| 为新增设置做的探测 | 0 | 0 | 0 | 0 | 21 |
| 收尾 | 2 | 0 | 0 | 0 | 0 |
| **合计** | **155** | **1** | **0** | **1** | **73** |

### 失败（1 项）

| 编号 | 看到了什么 |
|---|---|
| `setting.brightness.read` | 读的命令出错。退出码 无（超时），没有输出 |

### 测不了（1 项）

| 编号 | 看到了什么 |
|---|---|
| `page.touchpad` | “Touchpad”要有相应的硬件才有，这台机器没有显示它。窗口显示：Bluetooth & devices / Mouse / Primary mouse button / Left / Mouse pointer speed / Enhance pointer precision / Scrolling / Roll the mouse wheel to scroll / Multiple lines at a time / Lines to scroll at a time / Scroll inactive windows when hovering over them / Scrolling direction / Down motion scrolls down / Related settings |

### 用时（中位数，毫秒）

| 做什么 | 毫秒 |
|---|---:|
| `catalog.scan` | 26431 |
| `catalog.load` | 2 |
| `catalog.rescan` | 24091 |
| `open.cost` | 3511 |
| `open.app` | 23494 |
| `open.folder` | 68663 |
| `setting.read` | 22516 |
| `setting.change` | 45316 |
| `setting.change.fast` | 22796 |
| `open.page.command` | 441 |
| `page.read` | 22974 |
| `open.page` | 23448 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`app-dark-mode`、`system-dark-mode`、`transparency`、`clipboard-history`、`taskbar-alignment`、`task-view-button`、`clock-seconds`、`accent-title-bars`、`accent-start-taskbar`、`notifications`、`game-mode`、`storage-sense`、`screen-off-minutes`、`sleep-minutes`

