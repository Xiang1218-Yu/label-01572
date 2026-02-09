# 游戏助手 - 阵容推荐页

深色电竞风格的阵容推荐中心，基于 React + TypeScript + Vite 构建，提供多维度筛选、搜索和阵容卡片展示功能。

> 本项目为纯前端演示项目，所有数据均为本地模拟数据（Mock Data），不依赖后端接口。数据定义在 `src/data/mockData.ts` 中，包含 8 条阵容、20 个英雄、10 件装备和 8 种羁绊。

## How to Run

```bash
# 使用 Docker Compose 一键启动
docker-compose up --build -d

# 访问用户端
# http://localhost:8081
```

手动启动（开发模式）：

```bash
cd frontend-user
npm install
npm run dev
# 访问 http://localhost:8081
```

运行测试：

```bash
cd frontend-user
npm install
npx vitest run
```

## 扫码测试（App 下载二维码）

侧边栏底部有一个"下载App"二维码，扫码后会跳转到 App 下载提示页面。测试步骤：

1. 确保手机和电脑连接同一个 WiFi 网络
2. 启动开发服务器：
   ```bash
   cd frontend-user
   npm run dev
   ```
3. 终端会显示局域网地址，类似：
   ```
   ➜  Network: http://192.168.x.x:8081/
   ```
4. 用手机扫描页面左下角的二维码
5. 手机浏览器会打开 `/download` 页面，显示"App 正在开发中，敬请期待"的提示

## 功能说明

| 功能 | 说明 |
|------|------|
| 阵容推荐列表 | 首页展示阵容卡片，支持按分类、评级、关键词多维度筛选 |
| 赛季版本切换 | 顶部下拉框切换 S14/S13.5/S13/S12.5，列表实时过滤 |
| 阵容详情页 | 点击卡片进入详情，展示羁绊、核心英雄装备、完整阵容 |
| 英雄图鉴 | 展示所有英雄卡片，按费用排序 |
| 装备图鉴 | 展示所有装备卡片及描述 |
| 羁绊一览 | 展示所有羁绊及激活人数 |
| 数据中心 | 阵容评级分布、赛季分布、英雄登场率/装备使用率/羁绊热度排行 |
| 用户中心 | 右上角面板，支持昵称编辑、收藏管理、浏览历史、数据重置（localStorage 持久化） |
| 收藏/历史 | 详情页可收藏阵容，自动记录浏览历史 |
| 响应式布局 | 移动端侧边栏收起为汉堡菜单，卡片/筛选区自适应 |
| Tooltip | 鼠标悬停英雄/装备图标显示名称和描述 |

## 项目结构

```
frontend-user/
├── public/img/              # 英雄头像和装备图标（本地静态资源）
├── src/
│   ├── components/          # 通用组件
│   │   ├── Layout.tsx       # 全局布局（Sidebar + TopBar + Footer + Outlet）
│   │   ├── ErrorBoundary.tsx# 错误边界，捕获渲染异常
│   │   ├── Sidebar.tsx      # 左侧导航栏（路由驱动）
│   │   ├── TopBar.tsx       # 顶部栏（版本切换 + 用户中心）
│   │   ├── UserPanel.tsx    # 用户中心面板（昵称/收藏/历史/重置）
│   │   ├── FilterModule.tsx # 筛选模块（分类/评级/搜索）
│   │   ├── LineupList.tsx   # 阵容列表容器
│   │   ├── LineupCard.tsx   # 阵容卡片
│   │   ├── Tooltip.tsx      # 悬浮提示
│   │   ├── QRCode.tsx       # 二维码生成（qrcode 库）
│   │   ├── Footer.tsx       # 页脚
│   │   └── Toast.tsx        # 轻提示
│   ├── pages/               # 页面组件
│   │   ├── index.tsx        # 首页 - 阵容推荐列表
│   │   ├── detail.tsx       # 阵容详情页
│   │   ├── data.tsx         # 数据中心
│   │   ├── hero.tsx         # 英雄图鉴
│   │   ├── equipment.tsx    # 装备图鉴
│   │   ├── synergy.tsx      # 羁绊一览
│   │   ├── favorites.tsx    # 我的收藏
│   │   ├── history.tsx      # 浏览历史
│   │   └── download.tsx     # App 下载提示页
│   ├── data/
│   │   ├── mockData.ts      # 模拟数据（英雄/装备/羁绊/阵容）
│   │   └── filterLineups.ts # 筛选逻辑（分类/评级/关键词/版本）
│   ├── types/index.ts       # TypeScript 类型定义
│   ├── utils/
│   │   ├── avatar.ts        # 头像生成工具
│   │   └── logger.ts        # 日志工具
│   ├── App.tsx              # 路由配置
│   ├── main.tsx             # 入口
│   └── index.css            # 全局样式和 CSS 变量
├── vite.config.ts
└── package.json
```

## 数据说明

本项目使用本地模拟数据（Mock Data），所有数据定义在 `src/data/mockData.ts` 中：

| 数据类型 | 数量 | 说明 |
|----------|------|------|
| 阵容 (Lineup) | 20 条 | 分布在 S14(7)/S13.5(5)/S13(5)/S12.5(3) 四个赛季 |
| 英雄 (Hero) | 20 个 | 费用 1~5，含头像图片 |
| 装备 (Equipment) | 10 件 | 含图标图片 |
| 羁绊 (Synergy) | 8 种 | 含激活人数 |

数据不依赖任何后端 API，页面所有交互均在前端完成。如需对接真实接口，替换 `mockData.ts` 中的数据源即可。

## Services

| 服务 | 端口 | 说明 |
|------|------|------|
| frontend-user | 8081 | 用户端 - 阵容推荐页 |

## 测试账号

本项目为纯前端静态页面，无需登录，无测试账号。用户数据（昵称、收藏、浏览历史）存储在浏览器 localStorage 中。
