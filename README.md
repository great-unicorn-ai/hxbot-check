# HXBot computer check

This branch holds an automated check of the computer-control part of HXBot. On every push,
GitHub Actions runs `hx-computer-check.mjs` on real macOS and Windows machines: it reads the list of
installed apps, opens every page of the system settings, changes each supported setting and puts it
back, and writes a report.

- `hx-computer-check.mjs`: the check, as one file that needs only Node.
- `.github/workflows/hx-computer-check.yml`: the workflow.
- Results: the Artifacts of each run, and the branch `main-results`.

The check changes system settings. Do not run it on your own computer.

这个分支是 HXBot 电脑操控部分的自动检查，只在 GitHub 的用完即毁的机器上运行，不要在自己的电脑上运行。
