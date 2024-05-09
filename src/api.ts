import Koa from 'koa'
import Router from 'koa-router'

export function createApi() {
  const api = new Koa()
  const router = new Router()

  router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!'
  })

  api.use(router.routes()).use(router.allowedMethods())

  return api
}

