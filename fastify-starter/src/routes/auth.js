export default async function (app) {
    app.post('/login', {
        schema: {
            body: {
                type: 'object',
                required: ['username', 'password'],
                properties: {
                    username: { type: 'string' },
                    password: { type: 'string' }
                }
            }
        }
    }, async (request) => {
        const { username } = request.body

        const token = app.jwt.sign({
            userId: 1,
            username
        })

        return app.success({ token })
    })
}
