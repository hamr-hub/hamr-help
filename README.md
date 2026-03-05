# HamR 帮助中心 (help.hamr.store)

> HamR 用户自助服务平台 - 让每个问题都能快速找到答案

[![Status](https://img.shields.io/badge/status-开发中-yellow)](https://github.com/hamr-hub/hamr-help)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Framework](https://img.shields.io/badge/framework-Vite+React-61dafb)](https://vitejs.dev)

## 📋 项目概述

**项目编号**: PROJ-004  
**域名**: help.hamr.store  
**优先级**: ⭐⭐ 中  
**状态**: 待开发  

HamR 帮助中心面向终端用户，提供产品使用指引、问题自助解决、信息检索和反馈收集功能。

## 🎯 核心职责

### 1. 产品使用指引
- **新手入门**: 从注册到首次使用的完整流程
- **五维功能教程**: 人/时/事/物/境 管理详细教程
- **进阶教程**: 家庭协作、数据导入导出、私有部署

### 2. 问题自助解决
- **账号问题**: 注册/登录/密码/双因素认证
- **家庭管理**: 创建家庭/邀请成员/权限管理
- **数据问题**: 备份/恢复/同步/导出
- **私有部署**: Docker/Kubernetes 部署问题
- **故障排查指南**: 常见错误代码及解决方案

### 3. 信息检索
- Algolia 全文搜索
- 分类浏览（按功能/问题类型）
- 热门问题快速入口
- 相关文章推荐

### 4. 反馈收集
- 问题报告表单
- 功能建议提交
- 文档改进反馈

## 🏗️ 内容结构

```
帮助中心
├── 快速开始
│   ├── 注册账号
│   ├── 创建家庭
│   ├── 邀请成员
│   └── 基本设置
├── 功能指南
│   ├── 人员管理
│   ├── 时间管理
│   ├── 事务管理
│   ├── 物品管理
│   └── 环境管理
├── 常见问题 (FAQ)
│   ├── 账号相关
│   ├── 数据相关
│   ├── 权限相关
│   └── 私有部署
├── 故障排查
│   ├── 错误代码说明
│   ├── 网络问题
│   ├── 数据同步问题
│   └── 性能问题
└── 反馈与支持
    ├── 报告问题
    ├── 功能建议
    └── 联系我们
```

## 🛠️ 技术栈

| 技术 | 用途 | 备注 |
|-----|------|------|
| **Vite** | 构建工具 | 快速开发 |
| **React 18** | 前端框架 | TypeScript |
| **Tailwind CSS** | 样式框架 | 响应式设计 |
| **React Router** | 路由管理 | 多页面导航 |
| **Markdown** | 文档格式 | 易于维护 |
| **Algolia** | 搜索引擎 | 实时搜索 |
| **Vercel** | 部署托管 | 零成本 |

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📦 项目结构

```
hamr-help/
├── src/
│   ├── components/
│   │   ├── Search.tsx          # 搜索组件
│   │   ├── ArticleCard.tsx     # 文章卡片
│   │   ├── CategoryNav.tsx     # 分类导航
│   │   └── FeedbackForm.tsx    # 反馈表单
│   ├── pages/
│   │   ├── Home.tsx            # 首页
│   │   ├── Article.tsx         # 文章详情
│   │   ├── Category.tsx        # 分类列表
│   │   └── Search.tsx          # 搜索结果
│   ├── content/                # Markdown 文档
│   │   ├── getting-started/
│   │   ├── guides/
│   │   ├── faq/
│   │   └── troubleshooting/
│   ├── utils/
│   │   ├── markdown.ts         # Markdown 解析
│   │   └── search.ts           # Algolia 集成
│   └── App.tsx
├── public/
│   └── images/                 # 文档图片
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔍 搜索功能

### Algolia 配置

```typescript
// src/utils/search.ts
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'YOUR_APP_ID',
  'YOUR_SEARCH_KEY'
);

const index = searchClient.initIndex('hamr_help');
```

### 搜索索引结构

```json
{
  "objectID": "article-001",
  "title": "如何创建家庭",
  "category": "快速开始",
  "content": "文章内容...",
  "url": "/getting-started/create-family",
  "tags": ["家庭", "入门"]
}
```

## 📝 文档编写规范

### Markdown 格式

```markdown
---
title: 文章标题
category: 分类
tags: [标签1, 标签2]
date: 2026-03-05
---

# 文章标题

## 概述

简短介绍...

## 步骤

1. 第一步
2. 第二步
3. 第三步

## 常见问题

### 问题 1
解答...

### 问题 2
解答...
```

### 图片使用

```markdown
![描述](../public/images/screenshot.png)
```

### 代码示例

```markdown
\`\`\`bash
npm install hamr-cli
\`\`\`
```

## 🎨 设计规范

### 色彩
- **主色**: #FF6B35 (橙色 - 醒目友好)
- **辅助**: #2C3E50 (深蓝 - 专业可信)
- **成功**: #27AE60 (绿色)
- **警告**: #F39C12 (黄色)
- **错误**: #E74C3C (红色)

### 字体
- **标题**: 16px / 18px / 24px
- **正文**: 14px
- **代码**: Monaco / Consolas

## 📊 里程碑

- [ ] **2026-03-20**: 内容规划
- [ ] **2026-04-10**: 站点开发
- [ ] **2026-04-25**: 内容编写
- [ ] **2026-04-30**: 测试上线

## 🔗 相关链接

- [HamR 官网](https://hamr.store) - 产品介绍
- [技术文档](https://docs.hamr.top) - 开发者文档
- [开发者门户](https://hamr.top) - 技术社区

## 🤝 贡献文档

我们欢迎社区贡献文档！

### 贡献流程

1. Fork 本仓库
2. 添加/修改 Markdown 文档
3. 提交 PR 并说明改动

### 文档规范

- 使用清晰简洁的语言
- 提供实际操作截图
- 包含常见错误及解决方法
- 添加相关文章链接

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 👥 维护者

**HamR Team** - [GitHub Organization](https://github.com/hamr-hub)

---

**最后更新**: 2026-03-05  
**项目状态**: 待开发  
**部署环境**: https://help.hamr.store (即将上线)
