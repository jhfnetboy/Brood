---
id: decision-3
title: Use VitePress for Public Read-Only Dashboard / 使用 VitePress 构建公网只读看板
date: '2026-02-28 12:45'
status: accepted
---
## Context / 背景
**EN:** We need to share our roadmap, tasks, and progress with the public while ensuring data integrity and security. The local `backlog browser` is interactive and not suitable for public exposure.
**CN:** 我们需要向公众分享路线图、任务和进度，同时确保数据的完整性和安全性。本地的 `backlog browser` 具有交互性，不适合直接暴露在公网。

## Decision / 决策
**EN:** We decided to use **VitePress** as the static site generator (SSG) to build a read-only public dashboard.
- **Source**: Directly read Markdown files from the `backlog/` directory.
- **Deployment**: Automate build and deploy to GitHub Pages via GitHub Actions.
- **Security**: Pure static HTML output ensures no one can modify data from the browser.
**CN:** 我们决定使用 **VitePress** 作为静态网站生成器 (SSG)，构建一个只读的公网看板。
- **数据源**：直接读取 `backlog/` 目录下的 Markdown 文件。
- **发布**：通过 GitHub Actions 自动构建并发布到 GitHub Pages。
- **安全性**：纯静态 HTML 输出确保无人能从浏览器端修改数据。

## Consequences / 影响
**EN:**
- **Positive**: High performance, zero-cost hosting, and absolute data security.
- **Negative**: Requires mapping `backlog` directory structure to VitePress routing.
**CN:**
- **积极影响**：高性能、零成本托管、绝对的数据安全。
- **挑战**：需要将 `backlog` 的目录结构映射到 VitePress 的路由中。

---
**Snapshot Vote:** [TBD / 待启动]
