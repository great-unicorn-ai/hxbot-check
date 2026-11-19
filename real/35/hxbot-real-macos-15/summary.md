## macos-15

模型：没有可用的模型　用时 307 秒　通过 39，失败 0，提醒 1，跳过 4

| | 项 | 结果 |
|---|---|---|
| ✅ | A1 列出正在运行的应用 | Finder、TextEdit |
| ✅ | A2 打开文件后把文本编辑切到前台 | {"status":"done","action":"front","app":"TextEdit","route":"direct","tried":[]} |
| ✅ | A3 窗口放到左半边 | {"status":"done","action":"window","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"macOS has no system interface that places another app's window"}],"detail":"left: 31, 42, 512, 666"} |
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
| ✅ | L0 电脑操控驱动启动并答复 | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-2032-ae866f.sock  |
| ✅ | L1 两个智能体操作两个不同的应用，后台步骤同时进行 | a done 3012 ms; b done 3008 ms; overlap 3008 ms |
| ✅ | L2 同一个应用的两次调用一个接一个 | a done; c done; together 3007 ms; from the first start to the last end 6010 ms |
| ✅ | L3 前台按键全机一个：目标窗口不在最前面的那个智能体停放，不往别的窗口发键 | in front: done  ; behind: waiting_user other_window; file unchanged true; front {"pid":5616,"windowId":74}, a {"pid":5616,"windowId":74,"app":"TextEdit","title":"hxbot-lane-a.txt"}; step - |
| ✅ | L4 等满 30 秒还轮不到：答复“忙”、谁在用、大约多久 | busy; Another agent (Zed) works in this app now. Do the parts of the work that do not need it first, then run the remaining steps again.; eta 3948; waited 30028 ms |
| ✅ | L5 你在用电脑时：前台步骤停放（等待用户），一个键也不发 | waiting_user user_active; idle when it parked 1588 ms; file unchanged true |
| ✅ | L6 你停手 5 秒、那个窗口在最前面：自动续做 | resumed 5127 ms after the user stopped; lines: b: Calculator parked other_window 5s \| a: TextEdit parked user_active 5s |
| ✅ | L7 驱动自己发的按键不算你在用：连续三个前台按键不停放 | done; system idle before 6110 ms, after 745 ms (the driver's input counts in it) |
| ✅ | L8 停止键对所有道生效：在等的调用马上停下 | stopped after 1502 ms |
| ✅ | L9 直接赋值输入后读回一致，保存后文件里就是这段文字 | done; step 1 value/verified the field shows "HXBot value a77f27"; ; fields 1, chose {"index":1}; candidates []; file "HXBot value a77f27" |
| ⏭️ | L9b 不能直接赋值的文字区：答复改用按键，不动文字 | TextEdit 的文字区可以直接赋值 |
| ✅ | L10 等一个不会出现的控件：10 秒后报“没等到”，不当成完成 | timed_out; 10667 ms; 没等到: HXBot waited 10 s and "hxbot-never-c0da51" did not show (the driver could not tell, and the name is not in the wind |
| ✅ | L11 回复“现在做”：把目标窗口切到最前面马上做 | done ; bring_to_front called |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 5314; target 5314 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 5314; after the move 343; a second later 343 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 131072; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | 19  |
| ⏭️ | Q5 停助手的进程时留下它打开的应用 | Mac 上用 open 打开的应用不在助手的进程组里 |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1795073323301" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | 10 |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-2032-3ca2cf.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 2118, window 30) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:813" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…, 1 update" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] me |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [background, checked]；cmd+s [keyboard]；文件： HXBot-3e90b471HXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-6781c710" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
