# BroodBrain Backlog

这是一个基于 `backlog.md` 打造的纯静态、只读版本项目发布系统。

## 纯静态发版只读系统导出方案

我们已经抛弃了之前产生严重排版不一致问题的 Vitepress 方案，转而编写了一个基于 backlog browser 本地浏览器的自动化打版抓取脚本。这样能保证 **100% 保留原来的原生 UI 展示效果**。

同时为了满足“优雅展示错误、防止被他人修改”的要求，脚本中注入了前端防篡改保护器。

### 本方案核心设计思想：本地构建、直推发版
为了节省 GitHub 云端的计算资源（省钱且避免浪费免费的 CI 通道）、加快构建速度和避免复杂的云端环境依赖配置，本方案采用的是**本地执行运算，GitHub 原样发版**的机制：
所有的 `HTML/JS/CSS/API JSON` 生成和抓取均在你的本地电脑瞬间完成，而后直接随源代码 PUSH 到代码库中供 GitHub Pages 发布。

### 实现了哪些内容：
1. **清理遗留依赖**：清除了 vitepress 和 vue 的依赖残留以及 `docs/` 文件夹。
2. **新增静默打版打包脚本 (`scripts/export-backlog.js`)**：
   运行 `pnpm run build` 后，系统会在本地后台起一个临时的 backlog browser 本地服务器，把它的 `index.html` 以及 `chunk-*.js`, `api/*.json` 数据全量快速地抓取到 `dist/` 文件夹下。
3. **注入只读模式拦截器 (Read-Only Interceptor)**：
   脚本在导出 `index.html` 时，会在内部的 Header 处动态劫持并覆盖原生的 `window.fetch` 方法：
   - 过滤掉任何会对数据产生的副作用的 HTTP 动作，包括 `POST`, `PUT`, `PATCH`, `DELETE`。
   - 检测到这些意外修改动作后，不再显示 404/405 等红色的粗暴错误，而是在顶部优雅地弹出一个居中带模糊效果的黑色深色气泡通知（只读展示模式：无法修改或删除项目数据）。
   - 让这类被拦截的内部 API 请求静默获得模拟成功的响应，从而完全杜绝原框架的前端控制台报错。
4. **隐藏危险按钮**：注入了一些原生的轻量 CSS 规则，利用属性选择器把类似删除、垃圾桶之类的 `button` 按键使用 `display: none` 静默隐藏掉了。

### 如何发布内容：
每一次你修改了任务或者文档，都只需要在你的终端中依次执行以下几步：

1. 一键生成只读页面缓存
```bash
pnpm run build
```
（运行完毕后，这会更新你本地的纯静态输出文件夹 `dist/`。你也可以通过 `npx serve dist` 临时本地验证其防串改和显示效果。）

2. 提交代码至 GitHub
```bash
git add .
git commit -m "update tasks or docs"
git push
```

3. **结束！**
仓库的 GitHub Actions 工作流（`.github/workflows/deploy.yml`）会自动捕捉到这次 push。**云端不会再次运行 `backlog.md` 抓取过程（为您节省了数分钟运算时间）**，而是仅仅耗费几秒钟时间，直接将最新推上来的 `dist/` 文件夹原原本本地塞进 GitHub Pages 并为您发布。
