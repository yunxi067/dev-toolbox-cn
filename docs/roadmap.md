# 路线图

## v0.1.x：整理与发布

- [x] 创建 README Doctor。
- [x] 创建 Windows Dev Doctor。
- [x] 创建 Dev Toolbox CN 总入口。
- [ ] 完成 npm 登录并发布 scoped npm 包。
- [ ] 补充两个工具的演示 GIF 或短视频。

## v0.2.x：增强已有工具

### README Doctor

- [ ] 支持本地 README 文件路径。
- [ ] 支持中文 README section 检测。
- [ ] 支持 `--format markdown`。
- [ ] 支持 `--profile cli|web|library|ai`。
- [ ] 输出 README 改进模板。

### Windows Dev Doctor

- [ ] 检查 WSL 安装与版本。
- [ ] 检查 PowerShell 执行策略。
- [ ] 检查 pnpm/yarn。
- [ ] 检查 Maven/Gradle。
- [ ] 检查 pip/npm 镜像源。
- [ ] 支持 `--privacy` 隐私模式，隐藏用户名路径。

## v0.3.x：新增工具

- [ ] Log Squeezer：压缩长日志，输出关键信息和下一步建议。
- [ ] Project Snapshot：生成项目结构、依赖、入口文件和测试命令快照。
- [ ] Commit Guard：检查提交信息和 staged diff。

## 长期方向

- 保持 CLI 优先。
- 每个工具独立维护、独立 Release。
- 总入口仓库只做导航、路线图和维护规范。
- 避免把工具箱做成难维护的大平台。

