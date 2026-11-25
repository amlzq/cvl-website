# cvl-website

Chinese Variants Linter（中文变体检查器）的产品网站。基于 Vite 的纯静态站点，使用原生 HTML + CSS + JavaScript，无前端框架。

- 首页：`index.html`
- 文档：`docs.html`
- 域名：`cvl.zeaon.dev`
- 发布：GitHub Pages
- 国际化：五种语言（简体中文、中文（台湾）、中文（香港）、繁体中文、英文），字典位于 `src/js/locales/`，选择结果保存在 localStorage

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`，包含 `index.html`、`docs.html` 以及 `CNAME`。

## 发布到 GitHub Pages

1. 将本仓库推送到 GitHub。
2. 在仓库 **Settings → Pages** 中，将 Source 设为 **GitHub Actions**，或设为 **Deploy from a branch** 并选择包含构建产物的分支 / `docs` 目录。
3. 若采用 Actions，可添加工作流执行 `npm ci && npm run build`，并用 `peaceiris/actions-gh-pages` 发布 `dist`。
4. 在域名托管处将 `cvl.zeaon.dev` 的 CNAME 指向 GitHub Pages，`public/CNAME` 已包含该域名，构建时会复制到 `dist/` 根目录。

> 安装 / 下载按钮目前指向各产品仓库地址，属于占位链接，后续可替换为商店或 Release 地址。

## 许可证

网站源码：MIT。
