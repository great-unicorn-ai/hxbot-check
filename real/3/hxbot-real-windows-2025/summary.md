## windows-2025

模型：没有可用的模型　用时 8 秒　通过 5，失败 2，提醒 0，跳过 2

| | 项 | 结果 |
|---|---|---|
| ❌ | M1 有可用的真实模型 | OpenCode nemotron-3.5-super-vl-free：OpenCode nemotron-3.5-super-vl-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free models work in OpenCode (https://opencode.ai); subscribe to Ope；OpenCode mimo-v2.6-flash-free：OpenCode mimo-v2.6-flash-free: 429 {"type":"error","error":{"type":"FreeUsageLimitError","message":"Free usage limit reached. Free mo |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-f5e072d9-fd2e-4bf7-900d-1dc68ecd2b05  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 2092, window 131414) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ❌ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；Text Editor: 15 characters [foreground, checked]；ctrl+s [keyboard]；文件：HXBot check  |
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
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
