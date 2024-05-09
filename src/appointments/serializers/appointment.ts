import { Appointment } from '.prisma/client'

import { AppointmentResource } from '../resources/appointment'

export function serializeAppointment(appointment: Appointment): AppointmentResource {
  return {
    id: appointment.id,
    href: `http://localhost:5201/appointment/appointment/${appointment.id}`,
    category: appointment.category,
    creationDate: appointment.creationDate.toISOString(),
    description: appointment.description,
    externalId: appointment.externalId,
    lastUpdateDate: appointment.lastUpdate.toISOString(),
    status: appointment.status,
  }
}