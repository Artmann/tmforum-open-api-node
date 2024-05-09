import { listAppointmentsOperation } from './list-appointments'
import Koa, { Context } from 'koa'
import request from 'supertest'

import { prisma } from '../../database'
import { createApi } from '../../api'

let server: any

beforeAll(async () => {
  const api = await createApi()

  server = api.listen()
})

afterAll(async () => {
  await prisma.$disconnect()

  await server.close()
})

describe('listAppointmentsOperation', () => {
  it('should fetch appointments and return serialized data', async () => {
    await prisma.appointment.deleteMany({})

    await prisma.appointment.createMany({
      data: [
        {
          id: '63bf16a3-9be5-4b2f-b4a3-b7f92848dbf8',
          category: "Consultation",
          creationDate: "2024-01-01T00:00:00Z",
          description: "Initial consultation",
          externalId: "EXT123",
          status: "Initialized"
        },
        {
          id: '95d391ae-2286-41e9-b24c-5f3476accd12',
          category: "Follow-up",
          creationDate: "2024-01-02T00:00:00Z",
          description: "Follow-up appointment",
          externalId: "EXT124",
          status: "Initialized"
        },
      ],
    })

    const response = await request(server)
      .get('/appointment/appointment')
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body).toEqual([
      {
        id: '63bf16a3-9be5-4b2f-b4a3-b7f92848dbf8',
        href: 'http://localhost:5201/appointment/appointment/63bf16a3-9be5-4b2f-b4a3-b7f92848dbf8',
        category: 'Consultation',
        creationDate: '2024-01-01T00:00:00.000Z',
        description: 'Initial consultation',
        externalId: 'EXT123',
        lastUpdateDate: expect.any(String),
        status: 'Initialized'
      },
      {
        id: '95d391ae-2286-41e9-b24c-5f3476accd12',
        href: 'http://localhost:5201/appointment/appointment/95d391ae-2286-41e9-b24c-5f3476accd12',
        category: 'Follow-up',
        creationDate: '2024-01-02T00:00:00.000Z',
        description: 'Follow-up appointment',
        externalId: 'EXT124',
        lastUpdateDate: expect.any(String),
        status: 'Initialized'
      }
    ])
  })
})