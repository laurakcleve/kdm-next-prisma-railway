import { Side, Color } from '@prisma/client'

export const settlementLocationsData = [
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
            create: [
              {
                side: Side.LEFT,
                color: Color.RED,
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
        },
        {
          name: 'Skull Helmet',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'bone' }, { name: 'fragile' }],
          },
          affinities: {
            create: [
              {
                side: Side.BOTTOM,
                color: Color.RED,
              },
            ],
          },
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
        },
        {
          name: 'Hide Drum',
          gearKeywords: {
            connect: [{ name: 'hide' }, { name: 'noisy' }, { name: 'item' }],
          },
          affinities: {
            create: [
              {
                side: Side.LEFT,
                color: Color.GREEN,
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
        },
      ],
    },
  },
  {
    name: 'Apothecary',
    gear: {
      create: [
        {
          name: 'Stinking Salve',
          gearKeywords: {
            connect: [{ name: 'item' }, { name: 'balm' }, { name: 'stinky' }],
          },
          affinities: {
            create: [
              {
                side: Side.LEFT,
                color: Color.BLUE,
              },
            ],
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
            create: [
              {
                side: Side.LEFT,
                color: Color.GREEN,
              },
            ],
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
        },
      ],
    },
  },
]

export const gearKeywordsData = [
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
]
