const Koa = require('koa')
const app = new Koa()
app.use(async (ctx, next) => {
  ctx.body = 'hi'
})

app.listen(3334)
