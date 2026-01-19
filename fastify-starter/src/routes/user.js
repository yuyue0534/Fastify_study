export default async function (app) {
    app.get('/profile', {
        preHandler: [app.authenticate]
    }, async (request) => {
        return app.success({
            user: request.user
        })
    })

    app.get('/list', async () => {
        return app.success([
            { id: 1, name: '张三' },
            { id: 2, name: '李四' }
        ])
    })
}
