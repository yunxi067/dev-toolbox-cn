# 发布手册

## 单个工具发布

1. 更新 `CHANGELOG.md`。
2. 确认 README 示例仍然可运行。
3. 运行测试：

```bash
npm test
npm pack --dry-run
```

4. 创建 GitHub Release：

```bash
gh release create v0.1.0 --title "Tool v0.1.0" --notes-file docs/release-notes-v0.1.0.md
```

5. npm 登录后发布：

```bash
npm login --registry https://registry.npmjs.org/
npm publish --access public --registry https://registry.npmjs.org/
```

## 工具箱主页更新

1. 更新 [README.md](../README.md) 的工具表。
2. 更新 [tool-matrix.md](./tool-matrix.md)。
3. 更新 [roadmap.md](./roadmap.md)。
4. 运行：

```bash
npm test
```

5. 同步到 GitHub。

