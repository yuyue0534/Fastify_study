import Fastify from 'fastify'
import cors from '@fastify/cors'

import jwtPlugin from './plugins/jwt.js'
import utilsPlugin from './plugins/utils.js'

import indexRoutes from './routes/index.js'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'

const app = Fastify({ logger: true })

// 基础插件
app.register(cors, { origin: true })
app.register(jwtPlugin)
app.register(utilsPlugin)

// 路由
app.register(indexRoutes)
app.register(authRoutes, { prefix: '/auth' })
app.register(userRoutes, { prefix: '/user' })

export default app
