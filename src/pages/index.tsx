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
            <li key={location.id}>
              <p>{location.name}</p>
              <ul>
                {location.gear.map((g) => (
                  <li key={g.id}>
                    <p>{g.name}</p>
                    <ul>
                      {g.affinities.map((affinity) => (
                        <li
                          key={`${affinity.side}${affinity.color}`}
                        >{`${affinity.side} - ${affinity.color}`}</li>
                      ))}
                    </ul>
                    <ul>
                      {g.gearKeywords.map((keyword) => (
                        <li key={keyword.id}>{keyword.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const settlementLocations = await prisma.settlementLocation.findMany({
    include: {
      gear: {
        include: {
          gearKeywords: true,
          affinities: true,
        },
      },
    },
  })

  return {
    props: { settlementLocations },
  }
}

export default Home
