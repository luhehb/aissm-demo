# AISMM 前端 Demo

人工智能安全能力成熟度评估评价公共服务平台（AISMM）前端演示项目

## 项目简介

这是一个纯前端演示项目，用于展示 AISMM 平台的页面外观和导航切换效果。所有数据使用本地 Mock，不涉及后端接口和数据库。

### 主要功能

- ✅ 登录页面（静态验证码 + 登录跳转）
- ✅ 主站框架（顶栏 + 导航 + 内容区 + 页脚）
- ✅ 6 个主导航页面：首页、企业自评估、证书公示、服务机构、产品目录、产品和解决方案
- ✅ 多个二级 Tab 切换
- ✅ 表格数据展示（使用 Mock 数据）
- ✅ 响应式布局设计

### 技术限制

- ❌ 无真实登录鉴权
- ❌ 无表单验证
- ❌ 无搜索/筛选功能
- ❌ 无后端接口对接
- ❌ 除"登录"按钮外，其他按钮仅展示样式

## 技术栈

- **框架**: React 18
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **图标库**: lucide-react
- **语言**: JavaScript (可升级为 TypeScript)

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm / npm / yarn

### 安装步骤

```bash
# 1. 创建项目
pnpm create vite aismm-demo --template react

# 2. 进入项目目录
cd aismm-demo

# 3. 安装依赖
pnpm install

# 4. 安装 Tailwind CSS
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p

# 5. 安装图标库
pnpm add lucide-react

# 6. 启动开发服务器
pnpm dev
```

### Tailwind CSS 配置

在 `tailwind.config.js` 中添加：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

在 `src/index.css` 中添加：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 项目结构

```
aismm-demo/
├── src/
│   ├── App.jsx          # 主应用组件（包含所有页面）
│   ├── main.jsx         # 入口文件
│   └── index.css        # 全局样式
├── public/              # 静态资源
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 页面说明

### 1. 登录页 (/)

- 包含用户名、密码、验证码输入框
- 静态验证码图片展示（DPHM）
- 点击"登录"按钮进入主站

### 2. 主框架 (/app/*)

**顶栏**
- Logo + 平台名称
- 全国平台切换
- 登录/注册入口
- 全局搜索框

**一级导航**（6个菜单）
- 首页
- 企业自评估
- 证书公示
- 服务机构
- 产品目录
- 产品和解决方案

### 3. 各子页面

#### 首页
- SafeWork 产品介绍
- 两个特色卡片（T1、R1）

#### 企业自评估
- 占位页面，提示功能未开放

#### 证书公示
- 4 个二级 Tab：企业标准符合性证书、评估师、主任评估师、培训讲师
- 表格展示证书信息
- 顶部筛选区（仅展示）

#### 服务机构
- 2 个二级 Tab：评估机构、咨询机构
- 表格展示机构信息

#### 产品目录
- 2 个二级 Tab：认证产品目录、注册产品目录
- 表格展示产品信息

#### 产品和解决方案
- 卡片式展示解决方案

## Mock 数据

所有数据定义在 `App.jsx` 的 `mockData` 对象中：

```javascript
const mockData = {
  certificates: [...],  // 证书数据
  agencies: [...],      // 机构数据
  products: [...]       // 产品数据
};
```

可根据需要修改或扩展数据字段。

## 设计规范

### 颜色方案

- **主品牌色**: Indigo-600 (`#4F46E5`)
- **强调色**: Cyan-400 (`#22D3EE`)
- **深色背景**: Slate-800/900
- **浅色背景**: Slate-50
- **成功色**: Green-600
- **警告色**: Red-400

### 字体

- **标题**: 20-24px
- **导航**: 14-16px
- **正文**: 14px
- **小字**: 12px

### 组件样式

- **圆角**: 6-8px
- **阴影**: 轻微模糊（10-20px）
- **过渡**: 200-300ms

## 开发指南

### 添加新页面

1. 在 `App.jsx` 中创建新的页面组件
2. 在 `navItems` 数组中添加导航项
3. 在主框架的条件渲染中添加新页面

```javascript
const NewPage = () => (
  <div>新页面内容</div>
);

// 在 main 标签中添加
{currentPage === 'new-page' && <NewPage />}
```

### 添加 Mock 数据

在 `mockData` 对象中添加新的数据数组：

```javascript
const mockData = {
  // 现有数据...
  newData: [
    { id: 1, name: "示例", ... }
  ]
};
```

### 修改样式

使用 Tailwind CSS 实用类：

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  内容
</div>
```

## 构建与部署

### 开发环境

```bash
pnpm dev
```

访问 http://localhost:5173

### 生产构建

```bash
pnpm build
```

生成的静态文件在 `dist/` 目录，可直接部署到静态服务器。

### 部署建议

- **Vercel**: 直接连接 Git 仓库自动部署
- **Netlify**: 拖拽 `dist` 文件夹或 Git 集成
- **Nginx**: 将 `dist` 内容复制到 web 根目录
- **GitHub Pages**: 使用 `gh-pages` 分支部署

## 注意事项

⚠️ **重要提示**

1. 本项目仅用于前端 UI 演示
2. 所有企业/机构/人员名称均为虚构
3. 不包含任何真实业务逻辑
4. 不连接任何后端服务
5. 登录功能仅做页面跳转，无认证逻辑

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

建议使用最新版本的现代浏览器。

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系项目维护者。

---

**最后更新**: 2025-01-10