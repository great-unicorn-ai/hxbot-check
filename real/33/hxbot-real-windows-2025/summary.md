## windows-2025

模型：没有可用的模型　用时 202 秒　通过 37，失败 0，提醒 0，跳过 4

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
| ✅ | L0 电脑操控驱动启动并答复 | Cua Driver daemon listening on \\.\pipe\hxbot-check-8c653631-cb4a-44a6-89a1-9832c06717c9  |
| ✅ | L1 两个智能体操作两个不同的应用，后台步骤同时进行 | a done 3052 ms; b done 3018 ms; overlap 3018 ms |
| ✅ | L2 同一个应用的两次调用一个接一个 | a done; c done; together 3005 ms; from the first start to the last end 6007 ms |
| ✅ | L3 前台按键全机一个：目标窗口不在最前面的那个智能体停放，不往别的窗口发键 | in front: done  ; behind: waiting_user other_window; file unchanged true; front {"pid":1660,"windowId":66380}, a {"pid":1660,"windowId":66380,"app":"notepad.exe","title":"hxbot-lane-a.txt - Notepad"}; step - |
| ✅ | L4 等满 30 秒还轮不到：答复“忙”、谁在用、大约多久 | busy; Another agent (Zed) works in this app now. Do the parts of the work that do not need it first, then run the remaining steps again.; eta 4654; waited 30039 ms |
| ✅ | L5 你在用电脑时：前台步骤停放（等待用户），一个键也不发 | waiting_user user_active; idle when it parked 1083 ms; file unchanged true |
| ✅ | L6 你停手 5 秒、那个窗口在最前面：自动续做 | resumed 5428 ms after the user stopped; lines: b: charmap.exe parked other_window 5s \| a: notepad.exe parked user_active 5s |
| ✅ | L7 驱动自己发的按键不算你在用：连续三个前台按键不停放 | done; system idle before 6105 ms, after 624 ms (the driver's input counts in it) |
| ✅ | L8 停止键对所有道生效：在等的调用马上停下 | stopped after 1501 ms |
| ✅ | L9 直接赋值输入后读回一致（字符映射表的“复制字符”框） | done; step 1 value/verified the field shows "HXBot value 8cc0dd"; ; fields 2, chose {"index":0}; candidates [] |
| ✅ | L9b 不能直接赋值的文字区（记事本）：答复说明原因、改用按键，不动文字 | failed; This field does not take its text as a value (the driver refused it: set_value: element [0] does not implement ValuePattern or RangeValuePattern. For controls with TogglePattern (CheckBox) or SelectionItemPattern (RadioButton / ComboBoxItem |
| ✅ | L10 等一个不会出现的控件：10 秒后报“没等到”，不当成完成 | timed_out; 10180 ms; 没等到: HXBot waited 10 s and "hxbot-never-5e6611" did not show (the driver could not tell, and the name is not in the wind |
| ✅ | L11 回复“现在做”：把目标窗口切到最前面马上做 | done ; bring_to_front called |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 9060; target 5116 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 5116; after the move 9060; a second later 9060 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 2; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | Idle  |
| ✅ | Q5 停助手的进程树：它打开的记事本留下，后台的 ping 和 PowerShell 停下 | shell gone true; ping 7152 gone true; notepad 9692 kept true; 0.7 s; children conhost.exe:2016 notepad.exe:9692 PING.EXE:7152;  |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1795060311486" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | BelowNormal |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-d241881c-4ca3-402f-bd78-a13ef1e8a16c  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 9060, window 590286) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；Text Editor: 15 characters [foreground, checked]；ctrl+s [keyboard]；文件：HXBot check HXBot-512e656b |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-43f04e78" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
