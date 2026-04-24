# 🚀 瑞赛克官网部署指南

## 🌐 部署信息

- **部署平台**: Cloudflare Pages
- **项目名称**: ruisaike
- **访问地址**: https://ruisaike.pages.dev
- **当前分支部署**: https://feat-extreme-cleanup.ruisaike.pages.dev

---

## 📝 部署步骤详解

### 方式一：手动部署（适合临时部署）

#### 第一步：安装 Cloudflare CLI 工具

```bash
npm install -g wrangler
```

#### 第二步：登录 Cloudflare

```bash
wrangler login
```
- 浏览器会自动打开
- 使用 Cloudflare 账号授权
- 授权完成后返回终端

#### 第三步：构建项目

```bash
npm run build
```

#### 第四步：部署到 Cloudflare Pages

```bash
wrangler pages deploy .next/static --project-name=ruisaike
```

部署成功后会返回访问地址。

---

### 方式二：自动化部署（推荐，适合持续更新）

#### 前提条件

1. 将代码上传到 GitHub/GitLab 仓库
2. 在 Cloudflare Dashboard 中关联 GitHub 仓库

#### 操作步骤

1. **推送代码到 GitHub**

   ```bash
   # 初始化 Git 仓库（如果还没有）
   git init
   
   # 添加所有文件
   git add .
   
   # 提交
   git commit -m "Initial commit"
   
   # 添加远程仓库
   git remote add origin https://github.com/你的用户名/ruisaike.git
   
   # 推送
   git push -u origin main
   ```

2. **在 Cloudflare Pages 设置 Git 集成**

   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 点击左侧菜单 **Workers & Pages**
   - 点击 **创建应用程序**
   - 选择 **Pages** 选项卡
   - 点击 **连接到 Git**
   - 选择你的 GitHub 仓库
   - 配置构建设置：
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `.next`
   - 点击 **保存并部署**

3. **后续更新**

   每次推送到 GitHub，Cloudflare 会自动构建和部署。

---

## 🔧 常用命令

### 查看部署历史

```bash
wrangler pages project list
```

### 删除旧部署

```bash
wrangler pages deployment delete <deployment-id>
```

### 设置自定义域名

1. 在 Cloudflare Dashboard 中进入 Pages 项目
2. 点击 **自定义域**
3. 添加你的域名
4. 按照提示配置 DNS

---

## ⚠️ 注意事项

### 1. 每次部署前先构建

```bash
npm run build
```

确保构建成功后再部署。

### 2. 环境变量配置

如果项目需要环境变量（如 API 密钥），在 Cloudflare Dashboard 中：

- 进入 Pages 项目
- 点击 **设置** → **环境变量**
- 添加生产环境所需的环境变量

### 3. 重新部署

如果需要重新部署最近一次构建：

```bash
wrangler pages deploy .next/static --project-name=ruisaike
```

### 4. 查看构建日志

如果部署失败，可以在 Cloudflare Dashboard 中查看详细的构建日志。

---

## 📊 性能优化建议

### 1. 启用 Cloudflare CDN

Cloudflare Pages 自动启用全球 CDN，确保全球访问速度。

### 2. 配置缓存策略

在 Cloudflare Dashboard 中设置静态资源缓存时间。

### 3. 启用 HTTPS

Cloudflare Pages 自动提供免费 SSL 证书。

### 4. 开启 Brotli 压缩

Cloudflare 自动压缩传输内容。

---

## 🆘 故障排查

### 问题1：构建失败

- 检查 Node.js 版本（推荐 Node.js 18+）
- 查看构建日志中的错误信息
- 确保所有依赖正确安装：`npm install`

### 问题2：页面空白

- 检查浏览器控制台错误
- 确认资源路径是否正确
- 查看 Network 面板是否有 404 资源

### 问题3：部署后样式错乱

- 清除浏览器缓存
- 确认 CSS 文件路径正确
- 检查是否使用了正确的 base path

### 问题4：无法访问

- 确认部署成功（查看 Cloudflare Dashboard）
- 检查域名 DNS 配置
- 等待 DNS 传播（通常几分钟）

---

## 📞 获取帮助

- Cloudflare 官方文档：https://developers.cloudflare.com/pages
- Next.js 官方文档：https://nextjs.org/docs
- Wrangler CLI 文档：https://developers.cloudflare.com/workers/wrangler

---

## ✅ 部署清单

- [x] Cloudflare CLI 安装完成
- [x] Cloudflare 账号登录完成
- [x] 项目构建成功
- [x] 首次部署成功
- [ ] (可选) GitHub 仓库关联
- [ ] (可选) 自定义域名配置
- [ ] (可选) 环境变量配置

---

**最后更新**: 2026-04-24
**部署状态**: ✅ 运行中
