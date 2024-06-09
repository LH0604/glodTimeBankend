import { PrismaClient } from '@prisma/client'

export default async function create(count: number = 10, callback: (prisma: PrismaClient) => Promise<void>) {
  const prisma = new PrismaClient()
  for (let i = 0; i < count; i++) {
    await callback(prisma)
  }
}
