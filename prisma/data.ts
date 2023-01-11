import { Side, Color, Prisma } from '@prisma/client'

export const settlementLocationsData: Prisma.SettlementLocationCreateInput[] = [
  {
    name: 'Bone Workshop',
    gear: {
      create: [
        {
          name: 'Bone Axe',
          gearKeywords: {
            connect: [
              { name: 'weapon' },
              { name: 'melee' },
              { name: 'axe' },
              { name: 'bone' },
            ],
          },
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.RED,
            },
          },
          resourceKeywords: {
            create: [
              {
                resourceKeyword: {
                  connect: { name: 'bone' },
                },
                quantity: 2,
              },
              {
                resourceKeyword: {
                  connect: { name: 'organ' },
                },
              },
            ],
          },
        },
        {
          name: 'Bone Club',
          gearKeywords: {
            connect: [{ name: 'weapon' }, { name: 'melee' }, { name: 'bone' }],
          },
          affinities: {
            create: [
              {
                side: Side.LEFT,
                color: Color.RED,
              },
              {
                side: Side.RIGHT,
                color: Color.RED,
              },
            ],
          },
          resourceKeywords: {
            create: {
              resourceKeyword: {
                connect: { name: 'bone' },
              },
              quantity: 3,
            },
          },
        },
        {
          name: 'Skull Helmet',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'bone' }, { name: 'fragile' }],
          },
          affinities: {
            create: {
              side: Side.BOTTOM,
              color: Color.RED,
            },
          },
          resources: {
            create: {
              resource: {
                connect: { name: 'Skull' },
              },
            },
          },
          armorPoints: 3,
        },
      ],
    },
  },
  {
    name: 'Hide Workshop',
    gear: {
      create: [
        {
          name: 'Hide Boots',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'set' }, { name: 'hide' }],
          },
          resourceKeywords: {
            create: {
              resourceKeyword: {
                connect: { name: 'hide' },
              },
            },
          },
          armorPoints: 1,
        },
        {
          name: 'Hide Drum',
          gearKeywords: {
            connect: [{ name: 'hide' }, { name: 'noisy' }, { name: 'item' }],
          },
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.GREEN,
            },
          },
          resourceKeywords: {
            create: [
              {
                resourceKeyword: {
                  connect: { name: 'bone' },
                },
              },
              {
                resourceKeyword: {
                  connect: { name: 'hide' },
                },
              },
            ],
          },
        },
        {
          name: 'Hide Vest',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'set' }, { name: 'hide' }],
          },
          affinities: {
            create: [
              {
                side: Side.TOP,
                color: Color.BLUE,
              },
              {
                side: Side.RIGHT,
                color: Color.RED,
              },
            ],
          },
          resourceKeywords: {
            create: {
              resourceKeyword: {
                connect: { name: 'hide' },
              },
            },
          },
          armorPoints: 1,
        },
      ],
    },
  },
  {
    name: 'Apothecary',
    gear: {
      create: [
        {
          name: 'Cat Eye Crown',
          gearKeywords: {
            connect: [{ name: 'item' }, { name: 'jewelry' }],
          },
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.BLUE,
            },
          },
          resources: {
            create: {
              resource: {
                connect: {
                  name: "Cat's Eye",
                },
              },
            },
          },
        },
        {
          name: 'Beast Grease',
          gearKeywords: {
            connect: [
              { name: 'item' },
              { name: 'consumable' },
              { name: 'stinky' },
            ],
          },
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.GREEN,
            },
          },
          resourceKeywords: {
            create: {
              resourceKeyword: {
                connect: { name: 'organ' },
              },
            },
          },
        },
        {
          name: 'Dried Astrantia',
          gearKeywords: {
            connect: [
              { name: 'item' },
              { name: 'herb' },
              { name: 'consumable' },
            ],
          },
          affinities: {
            create: [
              {
                side: Side.TOP,
                color: Color.BLUE,
              },
              {
                side: Side.RIGHT,
                color: Color.RED,
              },
            ],
          },
          resources: {
            create: {
              resource: {
                connect: {
                  name: 'Fresh Astrantia',
                },
              },
            },
          },
        },
      ],
    },
  },
]

export const gearKeywordsData: Prisma.GearKeywordCreateManyInput[] = [
  { name: 'weapon' },
  { name: 'melee' },
  { name: 'axe' },
  { name: 'bone' },
  { name: 'armor' },
  { name: 'set' },
  { name: 'hide' },
  { name: 'fragile' },
  { name: 'item' },
  { name: 'herb' },
  { name: 'consumable' },
  { name: 'noisy' },
  { name: 'balm' },
  { name: 'stinky' },
  { name: 'jewelry' },
]

export const resourceKeywordsData: Prisma.ResourceKeywordCreateManyInput[] = [
  { name: 'hide' },
  { name: 'bone' },
  { name: 'organ' },
  { name: 'herb' },
]

export const resourcesData: Prisma.ResourceCreateInput[] = [
  {
    name: 'Beast Bone',
    resourceKeywords: {
      connect: {
        name: 'bone',
      },
    },
  },
  {
    name: 'Beast Hide',
    resourceKeywords: {
      connect: {
        name: 'hide',
      },
    },
  },
  {
    name: "Cat's Eye",
    resourceKeywords: {
      connect: {
        name: 'organ',
      },
    },
  },
  {
    name: 'Skull',
    resourceKeywords: {
      connect: {
        name: 'bone',
      },
    },
  },
  {
    name: 'Fresh Astrantia',
    resourceKeywords: {
      connect: {
        name: 'herb',
      },
    },
  },
]
