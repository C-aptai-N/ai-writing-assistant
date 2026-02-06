# 网站部署指南

## 快速部署到 Vercel（推荐）

### 方法一：通过 Vercel 网站部署（最简单）

1. **准备代码**
   - 将 `ai-writing-assistant` 文件夹中的所有文件上传到 GitHub 仓库

2. **部署到 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "Add New" → "Project"
   - 选择你的 GitHub 仓库
   - 点击 "Deploy"

3. **完成！**
   - 等待几分钟，Vercel 会自动构建和部署
   - 部署完成后，你会获得一个免费的 HTTPS 网址
   - 例如：`https://ai-writing-assistant.vercel.app`

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   cd ai-writing-assistant
   vercel
   ```

4. **按照提示操作**
   - 选择 "Link to existing project" 或创建新项目
   - 确认配置
   - 等待部署完成

## 部署到 Netlify

1. **访问 [netlify.com](https://netlify.com)**
2. **注册/登录账号**
3. **拖拽 `dist` 文件夹到 Netlify**（需要先本地构建）
   ```bash
   cd ai-writing-assistant
   npm install
   npm run build
   ```
4. **或者连接 GitHub 仓库自动部署**

## 部署到 GitHub Pages

1. **修改 vite.config.ts**
   ```typescript
   export default defineConfig({
     base: '/你的仓库名/',
     plugins: [react()],
   })
   ```

2. **构建项目**
   ```bash
   npm run build
   ```

3. **推送 dist 文件夹到 GitHub**

4. **在 GitHub 仓库设置中启用 GitHub Pages**
   - Settings → Pages
   - Source 选择 `gh-pages` 分支或 `/docs` 文件夹

## 部署到 Cloudflare Pages

1. **访问 [pages.cloudflare.com](https://pages.cloudflare.com)**
2. **连接 GitHub 仓库**
3. **配置构建设置**
   - 构建命令：`npm run build`
   - 输出目录：`dist`
4. **点击部署**

## 推荐方案对比

| 平台 | 优点 | 缺点 | 价格 |
|------|------|------|------|
| **Vercel** | 最快、最简单、自动HTTPS | 需要GitHub | 免费额度充足 |
| **Netlify** | 功能丰富、拖拽部署 | 构建速度较慢 | 免费额度充足 |
| **GitHub Pages** | 完全免费、集成GitHub | 功能简单、无服务器 | 完全免费 |
| **Cloudflare Pages** | 全球CDN、速度快 | 配置相对复杂 | 免费额度充足 |

## 域名绑定（可选）

### 在 Vercel 上绑定自定义域名

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加你的域名（如 `yourdomain.com`）
3. 按照提示配置 DNS 记录
4. 等待 DNS 生效

### 购买域名推荐

- 阿里云：[wanwang.aliyun.com](https://wanwang.aliyun.com)
- 腾讯云：[cloud.tencent.com/product/cns](https://cloud.tencent.com/product/cns)
- Namecheap：[namecheap.com](https://namecheap.com)
- GoDaddy：[godaddy.com](https://godaddy.com)

## 常见问题

### Q: 部署后页面空白？
A: 检查 `vercel.json` 中的 rewrites 配置，确保路由正确。

### Q: 部署失败？
A: 检查 `package.json` 中的依赖是否正确，确保 `npm install` 能成功运行。

### Q: 如何更新网站？
A: 只需将代码推送到 GitHub，Vercel 会自动重新部署。

### Q: 免费额度够用吗？
A: Vercel 免费版每月 100GB 带宽，足够个人项目使用。

## 下一步

1. 将代码推送到 GitHub
2. 在 Vercel 上部署
3. 获得你的网站地址
4. 分享给朋友访问！

## 技术支持

- Vercel 文档：[vercel.com/docs](https://vercel.com/docs)
- React Router 文档：[reactrouter.com](https://reactrouter.com)
- Vite 文档：[vitejs.dev](https://vitejs.dev)
