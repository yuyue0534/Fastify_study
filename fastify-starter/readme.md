# 📦 Fastify 示例仓库（完整可运行版）

> Fastify Starter Project  
> Node.js >= 18  
> 特点：模块化 / JWT / 参数校验 / 插件化 / 可扩展

---

## 一、项目结构总览

```text
fastify-starter/
├─ package.json
├─ README.md
├─ src/
│  ├─ app.js              # Fastify 实例 & 插件注册
│  ├─ server.js           # 启动入口
│  ├─ routes/
│  │   ├─ index.js        # 根路由
│  │   ├─ auth.js         # 登录 / 鉴权
│  │   └─ user.js         # 用户相关 API
│  ├─ plugins/
│  │   ├─ jwt.js          # JWT 插件
│  │   └─ utils.js        # 工具插件
│  └─ hooks/
│      └─ auth.js         # 鉴权 Hook
└─ .gitignore
