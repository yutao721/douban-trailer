const Koa = require('koa')
const app = new Koa()
const { normal } = require('./tpl/index.js')
app.use(async (ctx, next) => {
  ctx.body = normal
  ctx.type = 'text/html; charset=utf-8'
})

app.listen(3334)
