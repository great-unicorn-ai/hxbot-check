## windows-2025

模型：没有可用的模型　用时 38 秒　通过 24，失败 0，提醒 0，跳过 4

| | 项 | 结果 |
|---|---|---|
| ✅ | A1 列出正在运行的应用 | Windows Explorer、Notepad、Windows Terminal Host |
| ✅ | A2 打开文件后把记事本切到前台 | {"status":"done","action":"front","app":"Notepad","route":"direct","tried":[]} |
| ✅ | A3 窗口放到左半边 | {"status":"done","action":"window","app":"Notepad","route":"direct","tried":[],"detail":"left: 0, 0, 512, 720"} |
| ✅ | A4 Windows 的菜单交给逐步操作（use-steps） | {"status":"use-steps","reason":"Menus of Windows apps go through the controls: Use computer_look on the app's window and computer_do (a menu or a click step); a screenshot with capture_screen is the last way.","tried":[{"route":"command","why":"Windows has no script interface for another app's menus"}]} |
| ✅ | A5 隐藏（Windows：最小化） | {"status":"done","action":"hide","app":"Notepad","route":"direct","tried":[]} |
| ✅ | A6 正常退出并核对已经退出 | {"status":"done","action":"quit","app":"Notepad","route":"direct","tried":[],"detail":"quit normally"} |
| ✅ | A7 在 HXBot 里运行一段 PowerShell 脚本，读回输出 | {"status":"ran","language":"powershell","output":"Microsoft Windows NT 10.0.26100.0","truncated":false} |
| ✅ | A8 有没保存的改动时退出：应用自己问（waiting），强制退出没同意先问，同意后退出 | {"status":"done","action":"quit","app":"Notepad","route":"direct","tried":[],"detail":"quit normally"}；{"status":"confirm","reason":"Force quit loses what Notepad has not saved. Ask the user in the chat first; after a yes, call again with force and conf；{"status":"done","action":"quit","app":"Notepad","route":"direct","tried":[],"detail":"quit normally"} |
| ✅ | A9 读默认浏览器 | {"status":"default","kind":"browser","target":"web pages","app":"MSEdgeHTM","route":"direct"} |
| ✅ | A10 改默认浏览器：打开“默认应用”页（status page） | {"status":"page","reason":"Windows lets only the user change default apps, so HXBot opened Settings › Apps › Default apps (now: MSEdgeHTM). Find Microsoft Edge there with computer_look and set it for web pages with computer_do, or tell the user what to click."} |
| ⏭️ | I1 安装应用（computer_install） | 这台机器是 win32，安装应用只在 Mac 上检查 |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 8468; target 6968 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 6968; after the move 8468; a second later 8468 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 2; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | Idle  |
| ✅ | Q5 停助手的进程树：它打开的记事本留下，后台的 ping 和 PowerShell 停下 | shell gone true; ping 9596 gone true; notepad 6136 kept true; 0.4 s; children conhost.exe:5436 notepad.exe:6136 PING.EXE:9596;  |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1794744438947" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | BelowNormal |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-f1beae21-056e-48c4-b20c-2aa82485600b  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 8468, window 262512) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；Text Editor: 15 characters [foreground, checked]；ctrl+s [keyboard]；文件：HXBot check HXBot-e371f8cf |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-c160c154" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
