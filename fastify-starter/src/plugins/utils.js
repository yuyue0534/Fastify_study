import fp from 'fastify-plugin'

export default fp(async function (app) {
    app.decorate('success', (data) => {
        return { code: 0, data }
    })

    app.decorate('error', (message) => {
        return { code: -1, message }
    })
})
