import { PrismaClient, Prisma } from '@prisma/client'
import Head from 'next/head'
import { Tooltip } from 'react-tooltip'
import ShieldIcon from '../components/ShieldIcon'
import HitLocationIcon from '../components/HitLocationIcon'
import AffinityBonusRequirement from '../components/AffinityBonusRequirement'

const locationWithGear = Prisma.validator<Prisma.SettlementLocationArgs>()({
  include: {
    gear: {
      include: {
        gearKeywords: true,
        affinities: true,
        resources: {
          include: {
            resource: true,
          },
        },
        resourceKeywords: {
          include: {
            resourceKeyword: true,
          },
        },
        specialRules: {
          include: {
            rule: true,
          },
        },
        affinityBonus: {
          include: {
            requirements: true,
          },
        },
      },
    },
  },
})
type LocationWithGear = Prisma.SettlementLocationGetPayload<
  typeof locationWithGear
>

type HomeProps = {
  settlementLocations: LocationWithGear[]
}

function Home({ settlementLocations }: HomeProps) {
  return (
    <>
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
                      className={`affinity-${affinity.side.toLowerCase()} ${affinity.color.toLowerCase()}`}
                    />
                  ))}
                </div>

                <div className="stats">
                  {g.armorPoints && (
                    <div className="armor-stats">
                      <ShieldIcon />
                      <div className="armor-points">{g.armorPoints}</div>
                      {g.hitLocation && (
                        <div className="hlIcon">
                          <HitLocationIcon
                            location={g.hitLocation}
                          ></HitLocationIcon>
                        </div>
                      )}
                    </div>
                  )}

                  {g.speed && (
                    <div className="weapon-stats">
                      <div className="speed">{g.speed}</div>
                      <div className="accuracy">{g.accuracy}</div>
                      <div className="strength">{g.strength}</div>
                    </div>
                  )}
                </div>

                <div className="content">
                  <div className="identifiers">
                    <div className="primary-identifiers">
                      <div className="name">{g.name}</div>
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

                    <div className="secondary-identifiers">
                      {g.specialRules?.map((r) => (
                        <div key={r.rule.id}>
                          <span
                            id={`${g.id}${r.rule.id}`}
                            className="special-rule"
                            data-tooltip-content={r.rule.description}
                          >
                            {r.rule.name}
                            {r.value && ` ${r.value}`}
                          </span>
                          <Tooltip
                            anchorId={`${g.id}${r.rule.id}`}
                            className="special-rule-tooltip"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {g.cardText && <div className="card-text">{g.cardText}</div>}

                  {g.affinityBonus && (
                    <div className="affinity-bonus">
                      <div className="requirements">
                        {g.affinityBonus.requirements.map((r) => (
                          <AffinityBonusRequirement
                            key={r.id}
                            color={r.color}
                            number={r.number}
                          ></AffinityBonusRequirement>
                        ))}
                      </div>
                      <div className="description">
                        {g.affinityBonus.description}
                      </div>
                    </div>
                  )}
                </div>

                <ul className="resources">
                  {g.resources?.map((resource) => (
                    <li key={`${resource.gearId}${resource.resourceId}`}>
                      {resource.quantity}x {resource.resource.name}
                    </li>
                  ))}
                  {g.resourceKeywords?.map((keyword) => (
                    <li key={`${keyword.gearId}${keyword.resourceKeywordId}`}>
                      {keyword.quantity}x {keyword.resourceKeyword.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </main>
    </>
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
          resources: {
            include: {
              resource: true,
            },
          },
          resourceKeywords: {
            include: {
              resourceKeyword: true,
            },
          },
          specialRules: {
            include: {
              rule: true,
            },
          },
          affinityBonus: {
            include: {
              requirements: true,
            },
          },
        },
      },
    },
  })

  return {
    props: { settlementLocations },
  }
}

export default Home
