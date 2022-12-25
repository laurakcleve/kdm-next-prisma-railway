import { PrismaClient } from '@prisma/client'
import Head from 'next/head'

function Home({ settlementLocations }) {
  return (
    <div className="container">
      <Head>
        <title>KDM Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Settlement Locations</h1>
        <ul>
          {settlementLocations.map((location) => (
            <li key={location.id}>{location.name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const settlementLocations = await prisma.settlementLocation.findMany()

  return {
    props: { settlementLocations },
  }
}

export default Home
