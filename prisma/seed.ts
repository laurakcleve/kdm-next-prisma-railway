import { PrismaClient } from '@prisma/client'
import {
  settlementLocationsData,
  gearKeywordsData,
  resourceKeywordsData,
  resourcesData,
} from './data'

const prisma = new PrismaClient()

async function main() {
  await prisma.settlementLocation.deleteMany()
  await prisma.gearAffinity.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.gearKeyword.deleteMany()
  await prisma.gear.deleteMany()
  await prisma.resourceKeyword.deleteMany()

  await prisma.resourceKeyword.createMany({
    data: resourceKeywordsData,
  })

  for (const r of resourcesData) {
    await prisma.resource.create({
      data: r,
    })
  }

  await prisma.gearKeyword.createMany({
    data: gearKeywordsData,
  })

  for (const l of settlementLocationsData) {
    await prisma.settlementLocation.create({
      data: l,
    })
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
