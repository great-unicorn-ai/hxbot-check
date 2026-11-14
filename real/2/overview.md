# HXBot 真实模型与真机检查

| 机器 | 模型 | 通过 | 失败 | 提醒 | 跳过 |
|---|---|---|---|---|---|
| macos-15 | — | 7 | 1 | 0 | 1 |
| ubuntu-latest | — | 0 | 1 | 0 | 1 |
| windows-2025 | — | 5 | 2 | 0 | 2 |

## macos-15

模型：没有可用的模型　用时 13 秒　通过 7，失败 1，提醒 0，跳过 1

| | 项 | 结果 |
|---|---|---|
| ❌ | M1 有可用的真实模型 | OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope；OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free mo |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-1131.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 1167, window 29) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:813" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…, 1 update" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] me |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；文件： HXBot-4ec5a34aHXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |

试过的模型：
- OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope
- OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode 
- OpenCode nemotron-3.5-lightning-free：OpenCode nemotron-3.5-lightning-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Op
- OpenCode flint-40b-free：OpenCode flint-40b-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode Go to 
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4o-mini：GitHub Models openai/gpt-4o-mini: 200 text/plain: not JSON: OK 

## ubuntu-latest

模型：没有可用的模型　用时 1 秒　通过 0，失败 1，提醒 0，跳过 1

| | 项 | 结果 |
|---|---|---|
| ❌ | M1 有可用的真实模型 | OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope；OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free mo |
| ⏭️ | T1 协作全流程 | 没有可用的模型 |

试过的模型：
- OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope
- OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode 
- OpenCode nemotron-3.5-lightning-free：OpenCode nemotron-3.5-lightning-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Op
- OpenCode flint-40b-free：OpenCode flint-40b-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode Go to 
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4o-mini：GitHub Models openai/gpt-4o-mini: 200 text/plain: not JSON: OK 

## windows-2025

模型：没有可用的模型　用时 7 秒　通过 5，失败 2，提醒 0，跳过 2

| | 项 | 结果 |
|---|---|---|
| ❌ | M1 有可用的真实模型 | OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope；OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free mo |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-bce282b8-dfe4-4d17-ad47-192e93314268  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 8284, window 131468) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ❌ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；文件：HXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |

试过的模型：
- OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope
- OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode 
- OpenCode nemotron-3.5-lightning-free：OpenCode nemotron-3.5-lightning-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Op
- OpenCode flint-40b-free：OpenCode flint-40b-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to OpenCode Go to 
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4o-mini：GitHub Models openai/gpt-4o-mini: 200 text/plain: not JSON: OK 
