# HXBot 真实模型与真机检查

| 机器 | 模型 | 通过 | 失败 | 提醒 | 跳过 |
|---|---|---|---|---|---|
| macos-15 | — | 39 | 0 | 1 | 4 |
| macos-26 | — | 34 | 2 | 4 | 4 |
| ubuntu-latest | — | 0 | 0 | 0 | 2 |
| windows-2025 | — | 37 | 0 | 0 | 4 |

## macos-15

模型：没有可用的模型　用时 302 秒　通过 39，失败 0，提醒 1，跳过 4

| | 项 | 结果 |
|---|---|---|
| ✅ | A1 列出正在运行的应用 | Finder、TextEdit |
| ✅ | A2 打开文件后把文本编辑切到前台 | {"status":"done","action":"front","app":"TextEdit","route":"direct","tried":[]} |
| ✅ | A3 窗口放到左半边 | {"status":"done","action":"window","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"macOS has no system interface that places another app's window"}],"detail":"left: 44, 48, 512, 660"} |
| ✅ | A4 读菜单、点“编辑 › 全选”；“删除”这类菜单命令先问 | {"status":"menus","app":"TextEdit","menus":[{"menu":"TextEdit","items":["About TextEdit","Settings…","Services","Hide TextEdit","Hide Others","Show All","Quit TextEdit","Quit and Keep Windows"]},{"menu":"File","items":["New","Open…","Open Recent","Close","Close All","Save","Save As…","Duplicate","Re；{"status":"done","action":"menu","app":"TextEdit","route":"controls","tried":[],"detail":"Edit › Se |
| ✅ | A5 隐藏（Windows：最小化） | {"status":"done","action":"hide","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"the app is still shown"}]} |
| ✅ | A6 正常退出并核对已经退出 | {"status":"done","action":"quit","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"the app did not take the quit request"}],"detail":"quit normally"} |
| ✅ | A7 在 HXBot 里运行一段 JXA 脚本，读回输出 | {"status":"ran","language":"jxa","output":"Version 15.8.2 (Build 24H232)","truncated":false} |
| ⚠️ | A8 有没保存的改动时退出：应用自己问，强制退出先问 | 改不了文件内容（needs-permission；GitHub 的机器上没有人点“自动化”授权框）：{"status":"needs-permission","reason":"macOS did not answer in time: it most likely asks the user whether HXBot may control that app. Tell the user to click OK (Allow) in that dialog, then run the script again."}；打开自动化页 0 次 |
| ✅ | A9 读默认浏览器 | {"status":"default","kind":"browser","target":"web pages (http, https)","app":"com.apple.Safari","route":"direct"} |
| ✅ | A10 把 .md 文件的默认应用改成文本编辑，读回核对 | {"status":"default","kind":"type","target":".md files","app":"com.apple.TextEdit","route":"direct"} |
| ✅ | I1 装进“应用程序”文件夹：读回版本和签名，隔离标记保留 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":null} |
| ✅ | I2 已经装了时先问（confirm），不动原来的 | {"status":"confirm","reason":"HXInstallCheck 1.0 is installed. Ask the user in the chat whether to replace it with 2.0; after a yes, call again with replace: true.","installed":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"incoming":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/var/folders/2s/vty41 |
| ✅ | I3 同意替换后装上新版本，旧版进废纸篓，不留临时文件 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"1.0"}}；废纸篓里有旧版：true；“应用程序”文件夹里的临时文件：无 |
| ✅ | I4 从磁盘映像装，装好后卸下 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"3.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"2.0"}}；映像还挂着：false |
| ✅ | L0 电脑操控驱动启动并答复 | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-2826-6e8eb7.sock  |
| ✅ | L1 两个智能体操作两个不同的应用，后台步骤同时进行 | a done 3014 ms; b done 3009 ms; overlap 3009 ms |
| ✅ | L2 同一个应用的两次调用一个接一个 | a done; c done; together 3005 ms; from the first start to the last end 6008 ms |
| ✅ | L3 前台按键全机一个：目标窗口不在最前面的那个智能体停放，不往别的窗口发键 | in front: done  ; behind: waiting_user other_window; file unchanged true; front {"pid":6379,"windowId":76}, a {"pid":6379,"windowId":76,"app":"TextEdit","title":"hxbot-lane-a.txt"}; step - |
| ✅ | L4 等满 30 秒还轮不到：答复“忙”、谁在用、大约多久 | busy; Another agent (Zed) works in this app now. Do the parts of the work that do not need it first, then run the remaining steps again.; eta 3867; waited 30001 ms |
| ✅ | L5 你在用电脑时：前台步骤停放（等待用户），一个键也不发 | waiting_user user_active; idle when it parked 1384 ms; file unchanged true |
| ✅ | L6 你停手 5 秒、那个窗口在最前面：自动续做 | resumed 5080 ms after the user stopped; lines: b: Calculator parked other_window 5s \| a: TextEdit parked user_active 5s |
| ✅ | L7 驱动自己发的按键不算你在用：连续三个前台按键不停放 | done; system idle before 6402 ms, after 715 ms (the driver's input counts in it) |
| ✅ | L8 停止键对所有道生效：在等的调用马上停下 | stopped after 1502 ms |
| ✅ | L9 直接赋值输入后读回一致，保存后文件里就是这段文字 | done; step 1 value/verified the field shows "HXBot value 448600"; ; fields 1, chose {"index":1}; candidates []; file "HXBot value 448600" |
| ⏭️ | L9b 不能直接赋值的文字区：答复改用按键，不动文字 | TextEdit 的文字区可以直接赋值 |
| ✅ | L10 等一个不会出现的控件：10 秒后报“没等到”，不当成完成 | timed_out; 10580 ms; 没等到: HXBot waited 10 s and "hxbot-never-99a694" did not show (the driver could not tell, and the name is not in the wind |
| ✅ | L11 回复“现在做”：把目标窗口切到最前面马上做 | done ; bring_to_front called |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 5970; target 5970 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 5970; after the move 353; a second later 353 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 131072; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | 19  |
| ⏭️ | Q5 停助手的进程时留下它打开的应用 | Mac 上用 open 打开的应用不在助手的进程组里 |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1795072731242" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | 10 |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-2826-ffeb87.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 2860, window 30) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:813" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…, 1 update" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] me |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [background, checked]；cmd+s [keyboard]；文件： HXBot-6b7acf59HXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-74d65bf9" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 

## macos-26

模型：没有可用的模型　用时 411 秒　通过 34，失败 2，提醒 4，跳过 4

| | 项 | 结果 |
|---|---|---|
| ✅ | A1 列出正在运行的应用 | Finder、TextEdit |
| ✅ | A2 打开文件后把文本编辑切到前台 | {"status":"done","action":"front","app":"TextEdit","route":"direct","tried":[]} |
| ⚠️ | A3 窗口放到左半边 | {"status":"needs-permission","reason":"HXBot has no Accessibility grant, which menus and windows need. Tell the user to grant it in Settings › Computer Use, then call again."} |
| ⚠️ | A4 读菜单、点“编辑 › 全选”；“删除”这类菜单命令先问 | {"status":"needs-permission","reason":"HXBot has no Accessibility grant, which menus and windows need. Tell the user to grant it in Settings › Computer Use, then call again."}；{"status":"needs-permission","reason":"HXBot has no Accessibility grant, which menus and windows need. Tell the user to grant it in Settings › Computer Use, then call again."}；{"status":"confirm","reason":"Edit › Delete send |
| ✅ | A5 隐藏（Windows：最小化） | {"status":"done","action":"hide","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"the app is still shown"}]} |
| ❌ | A6 正常退出并核对已经退出 | {"status":"needs-permission","reason":"macOS did not answer in time: it most likely asks the user whether HXBot may control this app. Tell the user to click OK (Allow) in that dialog, then call again."} |
| ✅ | A7 在 HXBot 里运行一段 JXA 脚本，读回输出 | {"status":"ran","language":"jxa","output":"Version 26.7.2 (Build 25G332)","truncated":false} |
| ⚠️ | A8 有没保存的改动时退出：应用自己问，强制退出先问 | 改不了文件内容（needs-permission；GitHub 的机器上没有人点“自动化”授权框）：{"status":"needs-permission","reason":"macOS did not answer in time: it most likely asks the user whether HXBot may control that app. Tell the user to click OK (Allow) in that dialog, then run the script again."}；打开自动化页 0 次 |
| ✅ | A9 读默认浏览器 | {"status":"default","kind":"browser","target":"web pages (http, https)","app":"com.apple.Safari","route":"direct"} |
| ⚠️ | A10 把 .md 文件的默认应用改成文本编辑，读回核对 | {"status":"confirm-dialog","reason":"macOS asks the user to confirm in a dialog before TextEdit opens .md files (it is still com.apple.dt.Xcode; macOS answered 0). Tell the user to click \"Use TextEdit\" in that dialog, or click it with computer_look and computer_do, then call again without app to read it."} |
| ✅ | I1 装进“应用程序”文件夹：读回版本和签名，隔离标记保留 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":null} |
| ✅ | I2 已经装了时先问（confirm），不动原来的 | {"status":"confirm","reason":"HXInstallCheck 1.0 is installed. Ask the user in the chat whether to replace it with 2.0; after a yes, call again with replace: true.","installed":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"incoming":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/var/folders/h5/t85nd |
| ✅ | I3 同意替换后装上新版本，旧版进废纸篓，不留临时文件 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"1.0"}}；废纸篓里有旧版：true；“应用程序”文件夹里的临时文件：无 |
| ✅ | I4 从磁盘映像装，装好后卸下 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"3.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"2.0"}}；映像还挂着：false |
| ✅ | L0 电脑操控驱动启动并答复 | Cua Driver daemon listening on /var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/hxc-2506-d3e0ec.sock  |
| ✅ | L1 两个智能体操作两个不同的应用，后台步骤同时进行 | a done 3043 ms; b done 3030 ms; overlap 3030 ms |
| ✅ | L2 同一个应用的两次调用一个接一个 | a done; c done; together 3010 ms; from the first start to the last end 6015 ms |
| ✅ | L3 前台按键全机一个：目标窗口不在最前面的那个智能体停放，不往别的窗口发键 | in front: done  ; behind: waiting_user other_window; file unchanged true; front {"pid":9141,"windowId":61}, a {"pid":9141,"windowId":61,"app":"TextEdit","title":"hxbot-lane-a.txt"}; step - |
| ✅ | L4 等满 30 秒还轮不到：答复“忙”、谁在用、大约多久 | busy; Another agent (Zed) works in this app now. Do the parts of the work that do not need it first, then run the remaining steps again.; eta 3947; waited 30026 ms |
| ✅ | L5 你在用电脑时：前台步骤停放（等待用户），一个键也不发 | waiting_user user_active; idle when it parked 1014 ms; file unchanged true |
| ✅ | L6 你停手 5 秒、那个窗口在最前面：自动续做 | resumed 5096 ms after the user stopped; lines: b: Calculator parked other_window 5s \| a: TextEdit parked user_active 5s |
| ✅ | L7 驱动自己发的按键不算你在用：连续三个前台按键不停放 | done; system idle before 6030 ms, after 758 ms (the driver's input counts in it) |
| ✅ | L8 停止键对所有道生效：在等的调用马上停下 | stopped after 1506 ms |
| ✅ | L9 直接赋值输入后读回一致，保存后文件里就是这段文字 | done; step 1 value/verified the field shows "HXBot value 2de479"; ; fields 1, chose {"index":1}; candidates []; file "HXBot value 2de479" |
| ⏭️ | L9b 不能直接赋值的文字区：答复改用按键，不动文字 | TextEdit 的文字区可以直接赋值 |
| ✅ | L10 等一个不会出现的控件：10 秒后报“没等到”，不当成完成 | timed_out; 10595 ms; 没等到: HXBot waited 10 s and "hxbot-never-b79916" did not show (the driver could not tell, and the name is not in the wind |
| ✅ | L11 回复“现在做”：把目标窗口切到最前面马上做 | done ; bring_to_front called |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 8812; target 8812 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 8812; after the move 368; a second later 368 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 131072; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | 19  |
| ⏭️ | Q5 停助手的进程时留下它打开的应用 | Mac 上用 open 打开的应用不在助手的进程组里 |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1795072842593" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | 10 |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/hxc-2506-71f626.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 2561, window 34) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:833" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…, 1 update" [11] menu "App Store" The driver did not read the whole window. |
| ❌ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [background, checked]；cmd+s [keyboard]；文件：HXBot check ；原因排查：窗口里有这段文字 look: The Computer Use driver did not answer get_window_state in 10 s.；当时在最前面 {"pid":2561,"windowId":null}（目标 2561/34）；再拉到前面保存一次：front bring_to_front: exact window 34 for pid 2561 was not verified as the frontmost process's focused window and the front wi, save done, file has it false |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-6054cd6b" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 

## ubuntu-latest

模型：没有可用的模型　用时 0 秒　通过 0，失败 0，提醒 0，跳过 2

| | 项 | 结果 |
|---|---|---|
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ⏭️ | T1 协作全流程 | 没有可用的模型 |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 

## windows-2025

模型：没有可用的模型　用时 209 秒　通过 37，失败 0，提醒 0，跳过 4

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
| ✅ | L0 电脑操控驱动启动并答复 | Cua Driver daemon listening on \\.\pipe\hxbot-check-a0a9c4b4-57ff-4183-94ad-ff62a45839fe  |
| ✅ | L1 两个智能体操作两个不同的应用，后台步骤同时进行 | a done 3049 ms; b done 3015 ms; overlap 3015 ms |
| ✅ | L2 同一个应用的两次调用一个接一个 | a done; c done; together 3007 ms; from the first start to the last end 6013 ms |
| ✅ | L3 前台按键全机一个：目标窗口不在最前面的那个智能体停放，不往别的窗口发键 | in front: done  ; behind: waiting_user other_window; file unchanged true; front {"pid":2200,"windowId":66390}, a {"pid":2200,"windowId":66390,"app":"notepad.exe","title":"hxbot-lane-a.txt - Notepad"}; step - |
| ✅ | L4 等满 30 秒还轮不到：答复“忙”、谁在用、大约多久 | busy; Another agent (Zed) works in this app now. Do the parts of the work that do not need it first, then run the remaining steps again.; eta 4991; waited 30040 ms |
| ✅ | L5 你在用电脑时：前台步骤停放（等待用户），一个键也不发 | waiting_user user_active; idle when it parked 1054 ms; file unchanged true |
| ✅ | L6 你停手 5 秒、那个窗口在最前面：自动续做 | resumed 5434 ms after the user stopped; lines: b: charmap.exe parked other_window 5s \| a: notepad.exe parked user_active 5s |
| ✅ | L7 驱动自己发的按键不算你在用：连续三个前台按键不停放 | done; system idle before 6090 ms, after 624 ms (the driver's input counts in it) |
| ✅ | L8 停止键对所有道生效：在等的调用马上停下 | stopped after 1501 ms |
| ✅ | L9 直接赋值输入后读回一致（字符映射表的“复制字符”框） | done; step 1 value/verified the field shows "HXBot value 28ab20"; ; fields 2, chose {"index":0}; candidates [] |
| ✅ | L9b 不能直接赋值的文字区（记事本）：答复说明原因、改用按键，不动文字 | failed; This field does not take its text as a value (the driver refused it: set_value: element [0] does not implement ValuePattern or RangeValuePattern. For controls with TogglePattern (CheckBox) or SelectionItemPattern (RadioButton / ComboBoxItem |
| ✅ | L10 等一个不会出现的控件：10 秒后报“没等到”，不当成完成 | timed_out; 10166 ms; 没等到: HXBot waited 10 s and "hxbot-never-01edfa" did not show (the driver could not tell, and the name is not in the wind |
| ✅ | L11 回复“现在做”：把目标窗口切到最前面马上做 | done ; bring_to_front called |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 8240; target 7852 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 7852; after the move 8240; a second later 8240 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 2; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | Idle  |
| ✅ | Q5 停助手的进程树：它打开的记事本留下，后台的 ping 和 PowerShell 停下 | shell gone true; ping 4668 gone true; notepad 5292 kept true; 0.7 s; children conhost.exe:2072 notepad.exe:5292 PING.EXE:4668;  |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1795072624777" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | BelowNormal |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-ba3a1894-2699-4a9a-90cb-1a941bcbd234  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 8240, window 196632) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；Text Editor: 15 characters [foreground, checked]；ctrl+s [keyboard]；文件：HXBot check HXBot-9408f0af |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-22fb4484" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
