import Router from 'koa-router'
import { listAppointmentsOperation } from './operations/list-appointments'

export function registerRoutes(router: Router) {
  router.get('/appointment/appointment', listAppointmentsOperation)
}