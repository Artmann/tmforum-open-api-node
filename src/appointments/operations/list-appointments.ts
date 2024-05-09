import { Context } from 'koa'

import { prisma } from '../../database'
import { serializeAppointment } from '../serializers/appointment'


export async function listAppointmentsOperation(context: Context): Promise<void> {
  try {
    const appointments = await prisma.appointment.findMany()

    context.body = appointments.map(appointment => serializeAppointment(appointment))
  } catch (error: any) {
    context.status = 500
    context.body = { error: error.message }
  }
}