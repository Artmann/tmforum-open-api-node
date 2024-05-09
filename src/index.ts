import { config } from 'dotenv'

import { createApi } from './api'
import { prisma } from './database'

async function main() {
  config()

  const api = await createApi()
  const port = process.env.PORT || 5201

  api.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
  })
}

main().then(async () => {
  await prisma.$disconnect()
}).catch(async (error) => {
  console.error(error)

  await prisma.$disconnect()

  process.exit(1)
})