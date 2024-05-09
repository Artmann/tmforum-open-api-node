import Koa from 'koa'
import Router from 'koa-router'
import { registerRoutes } from './appointments'

export async function createApi() {
  const api = new Koa()
  const router = new Router()

  router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!'
  })

  registerRoutes(router)

  api.use(router.routes()).use(router.allowedMethods())

  return api
}

