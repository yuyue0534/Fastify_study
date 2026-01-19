export default async function (app) {
    app.get('/', async () => {
        return { message: 'Fastify Starter API' }
    })
}
