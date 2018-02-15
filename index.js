var Koa = require('koa')

var app = new Koa()

app.use(
    async( ctx ) => {
        ctx.body = 'helloword'
    }
)

app.listen(3000)

console.log('server start with port 3000!')