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
    const resource = await prisma.resource.create({
      data: r,
    })
    console.log(`Created resource ${resource.name}`)
  }

  await prisma.gearKeyword.createMany({
    data: gearKeywordsData,
  })

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
