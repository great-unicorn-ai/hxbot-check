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

