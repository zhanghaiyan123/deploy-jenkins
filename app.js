const path = require('path')
const Koa = require('koa')
//支持文件上传
const koaBody = require('koa-body')
//支持post请求
const bodyParser = require('koa-bodyparser')
const router = require('./src/router')

const { port, staticPath } = require('./config')
const cors = require('koa2-cors')
const app = new Koa()
//用于提供public给外部访问
const static = require('koa-static')
// 以下是用于跨域请求
app.use(cors({
  origin: function (ctx) {
    return ctx.accept.headers.origin;
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
}))
//用于对外暴露一个可以直接访问的路径
app.use(static(path.join(__dirname, staticPath)))
app.use(bodyParser())

app.use(
  koaBody({
    multipart: true,
    formidable: {
      maxFileSize: 100 * 1024 * 1024, // 设置上传文件大小最大限制，默认100k
    },
  }),
)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port)
console.log(`app started at port ${port}...`)
