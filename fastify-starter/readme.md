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

### 启动服务后，访问接口
**获取首页**; GET http://localhost:3000/

**登录获取 Token**
```
POST http://localhost:3000/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "123456"
}
```

**访问受保护的接口**
```
// 1. 登录获取token
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: '123456' })
})
.then(res => res.json())
.then(data => {
  const token = data.data.token; // 假设响应格式是 { token: "xxx" }
  console.log('Token:', token);
  
  // 第二步：使用这个token请求受保护接口
  return fetch('http://localhost:3000/user/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
})
.then(res => res.json())
.then(profile => console.log('用户资料:', profile));
```
