# 灵感写作 - AI辅助写作平台

一个类似星月写作的AI辅助写作平台，专为网络小说和剧本创作者打造。

## 功能特性

### 🏠 首页
- 精美的渐变背景设计
- 平台统计数据展示
- 四大核心功能介绍
- 多种写作风格展示
- 响应式布局

### ✍️ AI写作
- **AI写作**：一键生成高质量内容
- **AI扩写润色**：智能扩展和丰富内容
- **AI续写**：突破写作瓶颈，保持文风一致
- **AI拆书**：深度分析文学作品结构

### 🎨 创意工具箱
- 书名生成器
- 简介生成器
- 大纲生成器
- 细纲生成器
- 黄金开篇生成器
- 金手指生成器
- 名字生成器
- 人设生成器

### 🔐 用户系统
- 登录/注册界面
- 微信登录支持
- 表单验证
- 响应式设计

## 技术栈

- **前端框架**：React 18
- **类型系统**：TypeScript
- **构建工具**：Vite
- **路由**：React Router DOM
- **样式**：CSS3

## 项目结构

```
ai-writing-assistant/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── Writing.tsx
│   │   ├── Writing.css
│   │   ├── Tools.tsx
│   │   ├── Tools.css
│   │   ├── Login.tsx
│   │   └── Login.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 快速部署到线上 🚀

### 最简单的方法 - 使用 Vercel（推荐）

1. **将代码推送到 GitHub**
   - 创建一个 GitHub 仓库
   - 将 `ai-writing-assistant` 文件夹中的所有文件上传

2. **在 Vercel 上部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "Add New" → "Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **完成！**
   - 几分钟后获得免费 HTTPS 网站
   - 例如：`https://ai-writing-assistant.vercel.app`

📖 **详细部署指南**：查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 本地开发

### 前置要求
- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 页面说明

### 首页 (/)
展示平台核心功能和统计数据，引导用户开始创作。

### AI写作 (/writing)
提供四种AI写作功能，用户输入内容后AI会生成相应结果。

### 创意工具箱 (/tools)
提供8种创作辅助工具，点击工具卡片可生成相应内容。

### 登录/注册 (/login)
支持账号密码登录和微信登录，可在登录和注册模式间切换。

## 设计特点

- 🎨 现代化渐变色设计
- 📱 完全响应式布局
- ✨ 流畅的动画效果
- 🎯 直观的用户界面
- 🔧 模块化组件结构

## 后续开发建议

1. **后端集成**：接入真实的AI API（如GPT、Claude等）
2. **用户系统**：实现完整的用户认证和授权
3. **数据持久化**：使用数据库存储用户数据和创作内容
4. **支付系统**：添加会员订阅功能
5. **内容管理**：实现作品管理和历史记录
6. **社交功能**：添加评论、分享等社交功能

## 许可证

MIT License
