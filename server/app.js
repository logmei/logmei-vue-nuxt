const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router({ prefix: '/api/users' })

const users = [
  { id: '1', name: 'aaa' },
  { id: '2', name: 'bbbb' }
]

router.get('/:id', (ctx) => {
  console.log(ctx.request.headers.token)
  if (!ctx.request.headers.token) {
    ctx.response.body = { code: 1, msg: '用户没登录' }
  } else {
    const user = users.find(u => u.id === ctx.params.id)
    if (user) {
      ctx.response.body = { code: 0, msg: '', result: { user } }
    } else {
      ctx.response.body = { code: 1, msg: '没有该用户' }
    }
  }
})

router.post('/getUsers', (ctx) => {
  ctx.response.body = {
    code: 0,
    msg: '',
    result: users
  }
})

app.use(router.routes())
app.listen(3001)
console.log('app started at port 3001')
/**
 * cd ./server
 * node ./app.js
 */
