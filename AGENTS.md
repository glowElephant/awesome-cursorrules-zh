# AGENTS.md

## 项目定位

Awesome Cursor Rules 中文版 —— Cursor AI 编辑器规则集合。提供 **132 个** `.cursorrules` 规则文件，覆盖 **32 个**技术领域，配套 VitePress 双语文档站。

- 站点：<https://awesome-cursorrules-zh.js.org/>
- 规则资产与文档站**同构**，均位于 `docs/` 下（顶层没有 `rules/`、`zh/`、`en/`）

## 权威源

| 路径 | 用途 |
|------|------|
| `docs/rules/` | 规则资产源：32 个领域目录，共 132 个 `.cursorrules` |
| `docs/zh/`、`docs/en/` | 中英文文档源文件（真实目录，非符号链接） |
| `docs/.vitepress/` | 站点配置、主题组件、站点数据 |
| `docs/public/` | 站点静态资源（字体、logo、og-image） |
| `docs/scripts/sync-site-facts.mjs` | 构建前同步站点事实数据 |
| `tests/site-ia.test.mjs` | 站点信息架构一致性测试 |

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Node.js | `>=20.0.0` | 运行时 |
| VitePress | `^1.6.4` | 静态站点生成 |
| markdownlint-cli2 | `^0.23.2` | Markdown 检查 |

## 常用命令

```bash
npm run docs:dev       # 开发服务器（内部先 sync 站点数据）
npm run docs:build     # 构建站点
npm run docs:preview   # 预览构建结果
npm run lint           # Markdown 格式检查
npm test               # 站点 IA 一致性测试
npm run check          # lint + test + docs 构建
```

## 开发边界

- 对外文档优先中文，技术术语保持英文原文
- 文档改动须**同时**覆盖 `docs/zh/` 与 `docs/en/`
- 不要绕过 `sync` 直接调用 `vitepress build`，否则站点数据会过期
- CI 仅在 `docs/**` 或 workflow 文件变更时触发

## 提交规范

使用约定式提交：`feat` / `fix` / `docs` / `style` / `refactor` / `chore` / `translate`

## 相关文档

- [CLAUDE.md](./CLAUDE.md) — Claude Code 项目配置（含完整目录结构与工作流）
- [CONTRIBUTING.md](./CONTRIBUTING.md) — 贡献指南
- [DESIGN.md](./DESIGN.md) — 设计决策
