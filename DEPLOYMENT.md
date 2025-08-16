# FocusPlay 部署指南

## 📋 部署前检查清单

### 环境准备
- [ ] GitHub 仓库已创建并推送代码
- [ ] Supabase 项目已配置
- [ ] Vercel 账户已准备
- [ ] 域名已购买（可选）

### 必需的环境变量
在 Vercel 部署时需要配置以下环境变量：

#### Supabase 配置
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

#### 应用配置
```
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NODE_ENV=production
```

#### SEO 和分析（可选）
```
GOOGLE_SITE_VERIFICATION=your-google-verification-code
YANDEX_SITE_VERIFICATION=your-yandex-verification-code
BAIDU_SITE_VERIFICATION=your-baidu-verification-code
```

## 🚀 Vercel 部署步骤

### 1. 通过 GitHub 部署
1. 登录 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 导入 GitHub 仓库 `dspwell/focusplay`
4. 配置项目设置：
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 2. 环境变量配置
在 Vercel 项目设置中添加所有必需的环境变量：
1. 进入项目 Settings
2. 选择 Environment Variables
3. 添加上述所有环境变量

### 3. 域名配置（可选）
1. 在 Vercel 项目设置中选择 Domains
2. 添加自定义域名
3. 按照指示配置 DNS 记录

## 🗄️ Supabase 数据库设置

### 1. 运行数据库迁移
在本地运行以下命令来设置数据库：

```bash
# 创建数据库表
npm run create-table

# 迁移游戏数据
npm run migrate-games

# 验证数据
npm run verify-table
```

### 2. 设置 RLS 策略
确保在 Supabase 控制台中配置了正确的 Row Level Security 策略。

## 🔍 SEO 优化配置

### 1. 搜索引擎验证
- 在 Google Search Console 中验证网站
- 在百度站长工具中验证网站
- 在 Yandex Webmaster 中验证网站

### 2. Sitemap 提交
网站部署后，以下 URL 会自动可用：
- Sitemap: `https://your-domain.com/sitemap.xml`
- Robots.txt: `https://your-domain.com/robots.txt`

将 sitemap 提交到各大搜索引擎。

## ⚡ 性能优化

### 1. Vercel 函数配置
项目已配置以下优化：
- API 函数最大执行时间：30秒
- 区域设置：香港和新加坡（适合中国用户）

### 2. 缓存策略
- 静态资源自动缓存
- API 响应使用适当的缓存头
- 图片优化通过 Next.js Image 组件

## 🔒 安全配置

### 1. 环境变量安全
- 所有敏感数据存储在环境变量中
- API 密钥通过 Vercel 加密存储
- 生产环境使用 HTTPS

### 2. CORS 和安全头
项目已配置适当的 CORS 策略和安全头。

## 📊 监控和分析

### 1. Vercel Analytics
启用 Vercel Analytics 来监控：
- 页面性能
- 用户访问量
- Core Web Vitals

### 2. 错误监控
应用包含错误边界组件来捕获和处理前端错误。

## 🔧 常见问题解决

### 构建失败
1. 检查所有环境变量是否正确设置
2. 确保 Node.js 版本兼容（推荐 18+）
3. 检查依赖项是否正确安装

### 数据库连接问题
1. 验证 Supabase URL 和密钥
2. 检查 Supabase 项目是否处于活跃状态
3. 确认 RLS 策略配置正确

### 性能问题
1. 启用 Vercel Analytics 查看详细指标
2. 检查 Core Web Vitals 报告
3. 优化图片和静态资源

## 📝 部署后检查

部署完成后，请验证以下功能：
- [ ] 首页加载正常
- [ ] 用户注册和登录功能
- [ ] 游戏生成和推荐功能
- [ ] 管理后台访问
- [ ] SEO 元标签正确显示
- [ ] 移动端响应式设计
- [ ] 性能指标良好

## 🆕 更新部署

每次代码更新后：
1. 推送到 GitHub 主分支
2. Vercel 会自动触发新的部署
3. 监控部署状态和性能指标

---

**注意**: 这是一个生产就绪的部署配置，包含了所有必需的优化和安全措施。