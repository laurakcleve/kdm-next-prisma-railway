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
        },
        {
          name: 'Bone Club',
          gearKeywords: {
            connect: [{ name: 'weapon' }, { name: 'melee' }, { name: 'bone' }],
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
