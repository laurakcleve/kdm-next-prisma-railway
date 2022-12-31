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
        <h1>Settlement Shops</h1>
        {settlementLocations.map((location) => (
          <div className="location" key={location.id}>
            <h2>{location.name}</h2>
            {location.gear.map((g) => (
              <div className="gear-item" key={g.id}>
                <div className="affinity-box">
                  {g.affinities.map((affinity) => (
                    <div
                      key={`${affinity.side}${affinity.color}`}
                      className={`affinity-${affinity.side.toLowerCase()} affinity-${affinity.color.toLowerCase()}`}
                    />
                  ))}
                </div>
                <div className="content">
                  {g.name}
                  <p className="keywords">
                    {g.gearKeywords.map((keyword, index) => (
                      <span key={keyword.id}>
                        {index < g.gearKeywords.length - 1
                          ? keyword.name + ', '
                          : keyword.name}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
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
