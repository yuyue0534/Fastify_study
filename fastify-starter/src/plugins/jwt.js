import fp from 'fastify-plugin'
import jwt from '@fastify/jwt'

export default fp(async function (app) {
    app.register(jwt, {
        secret: 'fastify-secret'
    })

    app.decorate('authenticate', async (request) => {
        await request.jwtVerify()
    })
})
