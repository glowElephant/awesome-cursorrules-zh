# CLAUDE.md

> 本文件为 Claude Code CLI 提供项目配置。面向所有 AI 协作工具的通用指南见 [AGENTS.md](./AGENTS.md)。

## 项目概述

**awesome-cursorrules-zh** — Cursor AI 编辑器 `.cursorrules` 规则集合中文版。

- **132 个**规则文件，覆盖 **32 个**技术领域
- VitePress 双语文档站（中 / 英）：<https://awesome-cursorrules-zh.js.org/>
- 规则资产与文档站点同构，**均位于 `docs/` 下**（顶层没有 `rules/`、`zh/`、`en/` 目录）

## 技术栈

| 技术 | 版本 | 用途 | 声明位置 |
|------|------|------|----------|
| Node.js | `>=20.0.0` | 运行时 | 根 `package.json` |
| markdownlint-cli2 | `^0.23.2` | Markdown 格式检查 | 根 `package.json` |
| VitePress | `^1.6.4` | 静态站点生成 | `docs/package.json` |
| UnoCSS | `^66.6.8` | 原子化样式 | `docs/package.json` |
| Mermaid | `^11.12.2` | 图表渲染 | `docs/package.json` |

## 目录结构

```text
awesome-cursorrules-zh/
├── docs/                       # 文档站 + 规则资产（同构）
│   ├── .vitepress/             # VitePress 配置、主题组件、站点数据
│   ├── zh/                     # 中文文档
│   ├── en/                     # 英文文档
│   ├── rules/                  # 规则资产源：32 个领域目录，共 132 个 .cursorrules
│   ├── scripts/                # sync-site-facts.mjs（构建前同步站点事实数据）
│   ├── public/                 # 静态资源（字体、logo、og-image）
│   ├── index.md                # 站点首页
│   ├── package.json            # docs 子项目依赖与脚本
│   └── uno.config.ts
├── tests/                      # node:test 测试（site-ia.test.mjs：站点 IA 一致性）
├── .github/workflows/          # ci-docs.yml（构建验证）+ docs-pages.yml（Pages 部署）
├── AGENTS.md                   # 跨工具 AI 协作指南
├── CONTRIBUTING.md             # 贡献指南
├── DESIGN.md / PRODUCT.md      # 设计决策与产品定位
├── CHANGELOG.md
└── package.json                # 根：编排 lint / test / docs 构建
```

## 常用命令

```bash
# 开发与构建
npm run docs:dev        # 启动开发服务器（内部会先 sync 站点事实数据）
npm run docs:build      # 构建静态站点
npm run docs:preview    # 预览构建结果

# 质量检查
npm run lint            # Markdown 格式检查（markdownlint-cli2）
npm run lint:fix        # 自动修复格式问题
npm test                # 运行 tests/site-ia.test.mjs

# 完整校验（lint + test + docs 构建）
npm run check
```

> **注意**：`docs:dev` / `docs:build` 内部执行 `cd docs && npm run <script>`。`docs/package.json` 中的 `dev` 与 `build` 都会**先运行 `npm run sync`**（`docs/scripts/sync-site-facts.mjs`），确保站点展示的数据与规则资产一致。

## 开发工作流

### 添加新规则

1. 在 `docs/rules/<领域>/<主题>/` 下创建 `.cursorrules` 文件
2. 同目录补充 `README.md` 说明
3. 质量要求：≥ 200 字节、必须含角色定义、推荐含最佳实践、使用中文编写
4. 运行 `npm run lint` 检查格式

### 更新文档

1. 同步更新 `docs/zh/` 与 `docs/en/` —— **双语必须一起改**
2. 运行 `npm run lint` 检查格式
3. 运行 `npm test` 确认站点 IA 未被破坏

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/)：
`feat` / `fix` / `docs` / `style` / `refactor` / `chore` / `translate`

## 注意事项

1. **规则验证**：规则文件须通过 `npm run lint`；站点结构变更须通过 `npm test`
2. **双语同步**：文档改动必须同时覆盖 `docs/zh/` 与 `docs/en/`
3. **构建顺序**：不要绕过 `sync` 直接调用 `vitepress build`，否则站点数据会过期
4. **CI 触发范围**：`ci-docs.yml` 与 `docs-pages.yml` 仅在 `docs/**` 或 workflow 文件变更时触发
5. **术语处理**：技术术语保持英文原文，不翻译

## 相关文档

- [AGENTS.md](./AGENTS.md) — 跨工具 AI 协作指南
- [CONTRIBUTING.md](./CONTRIBUTING.md) — 贡献指南
- [DESIGN.md](./DESIGN.md) — 设计决策
