import { Side, Color } from '@prisma/client'

export const settlementLocationsData = [
  {
    name: 'Bone Smith',
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
      ],
    },
  },
  {
    name: 'Skinnery',
    gear: {
      create: [
        {
          name: 'Rawhide Boots',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'set' }, { name: 'rawhide' }],
          },
        },
        {
          name: 'Rawhide Drum',
          gearKeywords: {
            connect: { name: 'rawhide' },
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
          name: 'Rawhide Vest',
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'set' }, { name: 'rawhide' }],
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
  { name: 'rawhide' },
]
