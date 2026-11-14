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

