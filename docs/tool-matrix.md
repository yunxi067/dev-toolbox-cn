# 工具矩阵

| 工具 | 类型 | 输入 | 输出 | 当前版本 | 下一步 |
| --- | --- | --- | --- | --- | --- |
| README Doctor | GitHub README 体检 CLI | GitHub 仓库地址 | 文本报告 / JSON | v0.1.0 | 本地文件、中文规则、Markdown 报告 |
| Windows Dev Doctor | Windows 环境巡检 CLI | 本机环境 | 中文报告 / JSON | v0.1.0 | WSL、PowerShell、包管理器、隐私模式 |
| Log Squeezer | 候选 | 长日志 / 报错 | 摘要 / 下一步建议 | 未开始 | 先做最小 CLI |
| Project Snapshot | 候选 | 项目目录 | Markdown 项目快照 | 未开始 | 服务 AI 上下文与项目交接 |
| Commit Guard | 候选 | Git commit message / staged diff | 合规检查 / 建议 | 未开始 | 支持 Conventional Commits |

## 选型标准

一个新工具进入路线图前，需要满足：

- 能在 1 条命令里说明用途。
- 能在 1 周内做出 v0.1.0。
- 有明确输入和输出。
- 能写自动测试。
- 不依赖复杂后端服务。

