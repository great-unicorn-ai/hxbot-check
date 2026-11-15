## macos-26

模型：没有可用的模型　用时 186 秒　通过 26，失败 0，提醒 2，跳过 3

| | 项 | 结果 |
|---|---|---|
| ✅ | A1 列出正在运行的应用 | Finder、TextEdit |
| ✅ | A2 打开文件后把文本编辑切到前台 | {"status":"done","action":"front","app":"TextEdit","route":"direct","tried":[]} |
| ✅ | A3 窗口放到左半边 | {"status":"done","action":"window","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"macOS has no system interface that places another app's window"}],"detail":"left: 2, 33, 512, 674"} |
| ✅ | A4 读菜单、点“编辑 › 全选”；“删除”这类菜单命令先问 | {"status":"menus","app":"TextEdit","menus":[{"menu":"TextEdit","items":["About TextEdit","Settings…","Services","Hide TextEdit","Hide Others","Show All","Quit TextEdit","Quit and Keep Windows"]},{"menu":"File","items":["New","Open…","Open Recent","Close","Close All","Save","Save As…","Duplicate","Re；{"status":"done","action":"menu","app":"TextEdit","route":"controls","tried":[],"detail":"Edit › Se |
| ✅ | A5 隐藏（Windows：最小化） | {"status":"done","action":"hide","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"the app is still shown"}]} |
| ✅ | A6 正常退出并核对已经退出 | {"status":"done","action":"quit","app":"TextEdit","route":"command","tried":[{"route":"direct","why":"the app did not take the quit request"}],"detail":"quit normally"} |
| ✅ | A7 在 HXBot 里运行一段 JXA 脚本，读回输出 | {"status":"ran","language":"jxa","output":"Version 26.7.2 (Build 25G332)","truncated":false} |
| ⚠️ | A8 有没保存的改动时退出：应用自己问，强制退出先问 | 改不了文件内容（needs-permission；GitHub 的机器上没有人点“自动化”授权框）：{"status":"needs-permission","reason":"macOS did not answer in time: it most likely asks the user whether HXBot may control that app. Tell the user to click OK (Allow) in that dialog, then run the script again."}；打开自动化页 0 次 |
| ✅ | A9 读默认浏览器 | {"status":"default","kind":"browser","target":"web pages (http, https)","app":"com.apple.Safari","route":"direct"} |
| ⚠️ | A10 把 .md 文件的默认应用改成文本编辑，读回核对 | {"status":"confirm-dialog","reason":"macOS asks the user to confirm in a dialog before TextEdit opens .md files (it is still com.apple.dt.Xcode; macOS answered 0). Tell the user to click \"Use TextEdit\" in that dialog, or click it with computer_look and computer_do, then call again without app to read it."} |
| ✅ | I1 装进“应用程序”文件夹：读回版本和签名，隔离标记保留 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":null} |
| ✅ | I2 已经装了时先问（confirm），不动原来的 | {"status":"confirm","reason":"HXInstallCheck 1.0 is installed. Ask the user in the chat whether to replace it with 2.0; after a yes, call again with replace: true.","installed":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"incoming":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/var/folders/h5/t85nd |
| ✅ | I3 同意替换后装上新版本，旧版进废纸篓，不留临时文件 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"1.0"}}；废纸篓里有旧版：true；“应用程序”文件夹里的临时文件：无 |
| ✅ | I4 从磁盘映像装，装好后卸下 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"3.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"2.0"}}；映像还挂着：false |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | Q1 读得到最前面的应用 | front 5295; target 5295 |
| ✅ | Q2 用户切走以后，HXBot 看得出来，也不把目标应用拉回前台 | target 5295; after the move 386; a second later 386 |
| ✅ | Q3 修饰键卡在“按下”时，松开以后没有按下的修饰键 | press ok; held before 131072; held after 0 |
| ✅ | Q4 后台读目录的命令以最低优先级运行 | 19  |
| ⏭️ | Q5 停助手的进程时留下它打开的应用 | Mac 上用 open 打开的应用不在助手的进程组里 |
| ✅ | Q6 用户的剪贴板在检查前后不变 | "hxbot-quiet-1794743467050" |
| ✅ | Q7 助手的进程和它启动的命令以“低于正常”的优先级运行 | 10 |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/hxc-1355.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 1412, window 33) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:833" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] menu "System |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [foreground, checked]；cmd+s [keyboard]；文件： HXBot-662558f2HXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |
| ✅ | S9 驱动输入文字以后，剪贴板还是用户原来的内容 | "hxbot-clip-9ec5734d" |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
