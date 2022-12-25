import { PrismaClient } from '@prisma/client'
import { SETTLEMENT_LOCATIONS } from './data'

const prisma = new PrismaClient()

async function main() {
  await prisma.settlementLocation.deleteMany()

  await prisma.settlementLocation.createMany({
    data: SETTLEMENT_LOCATIONS.map((location) => ({ name: location })),
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
