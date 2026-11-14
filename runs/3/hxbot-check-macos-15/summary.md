## macos-15：全部通过

系统：macOS 15.8.2 (Darwin 24.6.0 arm64)。用时 142 秒。

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
| `catalog.scan` | 861 |
| `catalog.load` | 2 |
| `catalog.rescan` | 555 |
| `open.cost` | 108 |
| `open.app` | 100 |
| `open.folder` | 974 |
| `setting.read` | 80 |
| `setting.change` | 171 |
| `setting.change.fast` | 93 |
| `open.page.command` | 38 |
| `page.read` | 195 |
| `open.page` | 1287 |
| `tool.set` | 200 |

### 这台机器上读、原样写回、真改、改回都通过的设置

`dark-mode`、`volume`、`mute`、`alert-volume`、`input-volume`、`dock-autohide`、`dock-magnification`、`dock-recents`、`menu-bar-autohide`、`dock-position`、`dock-minimize-effect`、`dock-size`、`dock-indicators`、`dock-minimize-into-app`、`dock-launch-animation`、`dock-magnification-size`

