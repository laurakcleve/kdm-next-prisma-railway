import { PrismaClient } from '@prisma/client'
import { settlementLocationsData, gearKeywordsData } from './data'

const prisma = new PrismaClient()

async function main() {
  await prisma.settlementLocation.deleteMany()
  await prisma.gearAffinity.deleteMany()
  await prisma.gear.deleteMany()
  await prisma.gearKeyword.deleteMany()

  await prisma.gearKeyword.createMany({
    data: gearKeywordsData,
  })

  // await prisma.settlementLocation.createMany({
  //   data: settlementLocationsData,
  // })

  // You cannot nest `create` inside a top-level `createMany`

  for (const l of settlementLocationsData) {
    const location = await prisma.settlementLocation.create({
      data: l,
    })
    console.log(`Created location with id: ${location.id}`)
  }
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
