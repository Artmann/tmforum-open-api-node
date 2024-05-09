import { config } from 'dotenv'

import { createApi } from '../api'

async function main() {
  config()

  const api = createApi()
  const port = process.env.PORT || 5201

  api.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
  })
}

main().catch(async (error) => {
  console.error(error)

  process.exit(1)
})