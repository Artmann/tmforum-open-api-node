import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export default async function setupDatabase() {
  const testDbPath = path.resolve(__dirname, './test.db')

  try {
    if (fs.existsSync(testDbPath)) {
      fs.unlinkSync(testDbPath)
    }
  } catch (err) {
    console.error('Failed to delete test database:', err)
  }

  process.env.DATABASE_URL = 'file:' + testDbPath

  execSync('yarn prisma migrate deploy', { stdio: 'inherit' })

  // await prisma.$connect()
  // Seed data
  // await prisma.$disconnect()
}
