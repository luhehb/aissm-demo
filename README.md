# aissm-demo

最小可运行的前端样式复现（Vite + React + Tailwind）。

> 仅做样式与结构演示：顶栏、标题、导航、面包屑，以及 7 个页面的“小标题”骨架。

## 本地运行

```bash
# Node.js >= 18
npm install
npm run dev
# 访问 http://localhost:5173
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 目录结构（摘）

```
src/
  app/           # 路由与布局
  components/    # Header / Navbar / Breadcrumb / SectionTitle
  pages/         # 7 个页面骨架
  styles/        # Tailwind 全局样式
public/
  images/        # 占位 Logo
  icons/         # favicon
```
