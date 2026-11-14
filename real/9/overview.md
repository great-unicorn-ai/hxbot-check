# HXBot 真实模型与真机检查

| 机器 | 模型 | 通过 | 失败 | 提醒 | 跳过 |
|---|---|---|---|---|---|
| macos-15 | — | 11 | 0 | 0 | 2 |
| macos-26 | — | 11 | 0 | 0 | 2 |
| ubuntu-latest | — | 0 | 0 | 0 | 2 |
| windows-2025 | — | 6 | 0 | 0 | 4 |

## macos-15

模型：没有可用的模型　用时 17 秒　通过 11，失败 0，提醒 0，跳过 2

| | 项 | 结果 |
|---|---|---|
| ✅ | I1 装进“应用程序”文件夹：读回版本和签名，隔离标记保留 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":null} |
| ✅ | I2 已经装了时先问（confirm），不动原来的 | {"status":"confirm","reason":"HXInstallCheck 1.0 is installed. Ask the user in the chat whether to replace it with 2.0; after a yes, call again with replace: true.","installed":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"incoming":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/var/folders/2s/vty41 |
| ✅ | I3 同意替换后装上新版本，旧版进废纸篓，不留临时文件 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"1.0"}}；废纸篓里有旧版：true；“应用程序”文件夹里的临时文件：无 |
| ✅ | I4 从磁盘映像装，装好后卸下 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"3.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"2.0"}}；映像还挂着：false |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/2s/vty41l455yv698g4xkgfv7z00000gn/T/hxc-1754.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 1775, window 29) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:813" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…, 1 update" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] me |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [foreground, checked]；cmd+s [keyboard]；文件： HXBot-66531539HXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 

## macos-26

模型：没有可用的模型　用时 30 秒　通过 11，失败 0，提醒 0，跳过 2

| | 项 | 结果 |
|---|---|---|
| ✅ | I1 装进“应用程序”文件夹：读回版本和签名，隔离标记保留 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":null} |
| ✅ | I2 已经装了时先问（confirm），不动原来的 | {"status":"confirm","reason":"HXInstallCheck 1.0 is installed. Ask the user in the chat whether to replace it with 2.0; after a yes, call again with replace: true.","installed":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"1.0","path":"/Applications/HXInstallCheck.app"},"incoming":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/var/folders/h5/t85nd |
| ✅ | I3 同意替换后装上新版本，旧版进废纸篓，不留临时文件 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"2.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"1.0"}}；废纸篓里有旧版：true；“应用程序”文件夹里的临时文件：无 |
| ✅ | I4 从磁盘映像装，装好后卸下 | {"status":"installed","app":{"name":"HXInstallCheck","id":"org.example.hxinstall","version":"3.0","path":"/Applications/HXInstallCheck.app"},"signature":{"authority":"ad-hoc","team":"","notarized":false},"replaced":{"version":"2.0"}}；映像还挂着：false |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on /var/folders/h5/t85nd63d71x27_8gl5gw3l_w0000gn/T/hxc-3930.sock  |
| ✅ | S2 Mac 的授权（辅助功能、屏幕录制） | {"accessibility":true,"direct_capture_error":null,"direct_capture_status":"not_checked","screen_recording":true,"screen_recording_capturable":null,"source":{"attribution":"host","direct_runtime":false,"disclaim_env":false,"embedded":true,"executable":"/Users/runner/work/_temp/driver/cua-driver","host_bundle_id":"","note":"Embedded mode: these booleans reflect the HOST app's TCC grant (the driver i |
| ✅ | S3 打开 TextEdit，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | TextEdit — hxbot-check.txt (pid 3952, window 35) [0] window "hxbot-check.txt" [1] field "HXBot check" [2] button [3] button [4] button [5] menu "_NS:833" [6] menu "Apple" [7] menu [8] menu "About This Mac" [9] menu "System Information" [10] menu "System Settings…" [11] menu "App Store" [12] menu "Recent Items" [13] menu [14] menu "Installer" [15] menu "Show “Installer” in Finder" [16] menu "System |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；HXBot check: 15 characters [foreground, checked]；cmd+s [keyboard]；文件： HXBot-c3bf264fHXBot check  |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |

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

模型：没有可用的模型　用时 5 秒　通过 6，失败 0，提醒 0，跳过 4

| | 项 | 结果 |
|---|---|---|
| ⏭️ | I1 安装应用（computer_install） | 这台机器是 win32，安装应用只在 Mac 上检查 |
| ⏭️ | M1 有可用的真实模型 | 没有配模型（仓库 Secret HX_CHECK_MODEL_URL、HX_CHECK_MODEL_KEY、HX_CHECK_MODEL）；GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK ；GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK  |
| ✅ | S1 电脑操控驱动启动并答复（serve --socket） | Cua Driver daemon listening on \\.\pipe\hxbot-check-613918de-06ed-4775-8b35-1b999de5098c  |
| ⏭️ | S2 授权 | Windows 不需要额外授权 |
| ✅ | S3 打开 Notepad，找到它的窗口 |  |
| ✅ | S4 读出窗口提纲，有可输入的文字框 | notepad.exe — hxbot-check.txt - Notepad (pid 7724, window 328018) [0] field "Text Editor" = "HXBot check" [1] titlebar "hxbot-check.txt - Notepad" [2] menu "System" [3] button "Minimize" [4] button "Maximize" [5] button "Close" [6] menu "File" [7] menu "Edit" [8] menu "Format" [9] menu "View" [10] menu "Help" The driver did not read the whole window. |
| ✅ | S5 固定步骤：在文字框里输入并保存，文件里有这段文字 | done；Text Editor: 15 characters [foreground, checked]；ctrl+s [keyboard]；文件：HXBot check HXBot-f4ad4543 |
| ✅ | S6 “删除”这类步骤先停下来问（status confirm），不执行 | "Delete" sends, pays, buys, deletes or publishes. Ask the user in the chat first; after a yes, repeat the step with confirmed true. |
| ✅ | S7 按停止键后，下一步不再执行 | stopped |
| ⏭️ | S8 真实模型：列计划、一步步输入并保存 | 没有可用的模型 |

试过的模型：
- GitHub Models openai/gpt-4.1-mini：GitHub Models openai/gpt-4.1-mini: 200 text/plain: not JSON: OK 
- GitHub Models openai/gpt-4.1-mini (great-unicorn-ai)：GitHub Models openai/gpt-4.1-mini (great-unicorn-ai): 200 text/plain: not JSON: OK 
