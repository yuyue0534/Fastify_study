export default async function (app) {
    app.decorate('success', (data) => {
        return { code: 0, data }
    })

    app.decorate('error', (message) => {
        return { code: -1, message }
    })
}
