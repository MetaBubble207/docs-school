# MetaBubble 文档中心

<p align="center">
  <a href="README.md">简体中文</a> |
  <a href="README.en.md">English</a> 
</p>

<p align="center">
  <a href="https://github.com/MetaBubble207/metabubble-docs/actions/workflows/ci.yml">
    <img src="https://github.com/MetaBubble207/metabubble-docs/actions/workflows/ci.yml/badge.svg" alt="Build Status" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/MetaBubble207/metabubble-docs" alt="License" />
  </a>
</p>

MetaBubble文档中心是东莞理工学院MetaBubble实验室的综合性指南平台，涵盖创新创业训练计划（大创）项目、广东省攀登计划项目、外包项目管理、各类竞赛指南以及团队协作规范等内容。本平台旨在帮助实验室成员快速掌握项目开发、比赛参与和日常运营的全流程，提高项目成功率和团队协作效率，同时为教师和管理人员提供规范化的参考资料。

## 🚀 特性

- 📚 全面的项目指南（创新项目、外包项目）
- 🏆 丰富的比赛资源（蓝桥杯、计算机设计大赛、数学建模、挑战杯等）
- 👥 团队协作最佳实践
- 🌐 中英文双语支持
- 📱 响应式界面设计
- 🔍 内容搜索功能
- 🎨 明暗主题切换
- 📊 详细的项目数据统计

## 📋 内容板块

### 创新项目
大学生创新创业训练计划项目和广东省攀登计划项目的申请、中期检查、结题报告和经费报销等全流程指导。

### 外包项目
合同签订、项目沟通、开发流程和最佳实践指南，帮助团队高效完成外包项目。

### 比赛指南
各类比赛详情，包括蓝桥杯、计算机设计大赛、数学建模、创新创业竞赛、挑战杯等赛事的报名流程、备赛攻略和参赛经验。

### 团队协作
实验室内高效团队合作、资源共享和沟通的规范和最佳实践。

## 🛠️ 技术栈

- [Next.js 15](https://nextjs.org/) - React框架
- [Fumadocs](https://fumadocs.vercel.app/) - 文档引擎
- [TailwindCSS](https://tailwindcss.com/) - CSS框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Bun](https://bun.sh/) - JavaScript运行时和包管理器

## 🔧 开发指南

### 安装Bun

在开始之前，您需要先安装Bun：

#### macOS或Linux

```bash
curl -fsSL https://bun.sh/install | bash
```

#### Windows

请先安装WSL2，然后在WSL环境中使用上面的命令安装Bun。或使用Windows包管理器：

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

### 项目设置

1. 克隆仓库

```bash
git clone https://github.com/yourusername/metabubble-docs.git
cd metabubble-docs
```

2. 安装依赖

```bash
bun install
```

3. 启动开发服务器

```bash
bun dev
```

现在可以在 [http://localhost:3000](http://localhost:3000) 访问文档站点。

## 🤝 贡献指南

欢迎为MetaBubble文档中心做出贡献！您可以通过以下方式参与：

1. 提交内容更新或修正
2. 改进UI/UX设计
3. 添加新的文档页面
4. 报告问题或提出功能建议

请确保您的更改符合项目的风格指南，并遵循代码质量标准。

## 📄 许可证

本项目使用MIT许可证 - 详见LICENSE文件
