import { Side, Color, HitLocation, Prisma } from '@prisma/client'

export const settlementLocationsData: Prisma.SettlementLocationCreateInput[] = [
  {
    name: 'Bone Workshop',
    gear: {
      create: [
        {
          name: 'Bone Axe',
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.RED,
            },
          },
          speed: 2,
          accuracy: 6,
          strength: 3,
          gearKeywords: {
            connect: [
              { name: 'weapon' },
              { name: 'melee' },
              { name: 'axe' },
              { name: 'bone' },
            ],
          },
          specialRules: {
            create: [
              {
                rule: { connect: { name: 'Frail' } },
              },
              {
                rule: { connect: { name: 'Savage' } },
              },
            ],
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
          speed: 2,
          accuracy: 6,
          strength: 5,
          gearKeywords: {
            connect: [{ name: 'weapon' }, { name: 'melee' }, { name: 'bone' }],
          },
          specialRules: {
            create: { rule: { connect: { name: 'Cumbersome' } } },
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
          affinities: {
            create: {
              side: Side.BOTTOM,
              color: Color.RED,
            },
          },
          armorPoints: 3,
          hitLocation: HitLocation.HEAD,
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'bone' }, { name: 'fragile' }],
          },
          cardText:
            'When you suffer a serious head injury, the Skull Helmet is destroyed.',
          resources: {
            create: {
              resource: {
                connect: { name: 'Skull' },
              },
            },
          },
        },
        {
          name: 'Bone Knives',
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.RED,
            },
          },
          speed: 1,
          accuracy: 7,
          strength: 3,
          gearKeywords: {
            connect: [
              { name: 'weapon' },
              { name: 'ranged' },
              { name: 'thrown' },
              { name: 'bone' },
            ],
          },
          specialRules: {
            create: [
              {
                rule: { connect: { name: 'Frail' } },
              },
              {
                rule: { connect: { name: 'Range' } },
                value: 6,
              },
            ],
          },
          resources: {
            create: {
              resource: {
                connect: { name: 'Skull' },
              },
            },
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
          armorPoints: 1,
          hitLocation: HitLocation.LEGS,
          gearKeywords: {
            connect: [{ name: 'armor' }, { name: 'set' }, { name: 'hide' }],
          },
          cardText: 'When you set out, gain +1 endurance.',
          resourceKeywords: {
            create: {
              resourceKeyword: {
                connect: { name: 'hide' },
              },
            },
          },
        },
        {
          name: 'Hide Drum',
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.GREEN,
            },
          },
          gearKeywords: {
            connect: [{ name: 'hide' }, { name: 'noisy' }, { name: 'item' }],
          },
          cardText:
            'On arrival, all heroes gain +1 madness. When you perform inspire, all non-deaf heroes are affected.',
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
          armorPoints: 1,
          hitLocation: HitLocation.BODY,
          cardText: '+1 accuracy',
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
          affinityBonus: {
            create: {
              requirements: {
                create: [
                  {
                    color: Color.BLUE,
                    isPuzzlePiece: true,
                  },
                  {
                    color: Color.RED,
                    isPuzzlePiece: true,
                  },
                ],
              },
              description: '+1 evasion',
            },
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
          name: 'Cat Eye Crown',
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.BLUE,
            },
          },
          gearKeywords: {
            connect: [{ name: 'item' }, { name: 'jewelry' }],
          },
          cardText:
            'Spend 1 action: Reveal the next 3 beast hit locations and put them back in any order.',
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
          affinities: {
            create: {
              side: Side.LEFT,
              color: Color.GREEN,
            },
          },
          gearKeywords: {
            connect: [
              { name: 'item' },
              { name: 'consumable' },
              { name: 'stinky' },
            ],
          },
          cardText: 'Gain +1 evasion.',
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
          gearKeywords: {
            connect: [
              { name: 'item' },
              { name: 'herb' },
              { name: 'consumable' },
            ],
          },
          cardText:
            'When you depart, gain +2 survival. When you suffer a severe injury, ignore it and archive this card instead.',
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
  { name: 'ranged' },
  { name: 'thrown' },
]

export const resourceKeywordsData: Prisma.ResourceKeywordCreateManyInput[] = [
  { name: 'hide' },
  { name: 'bone' },
  { name: 'organ' },
  { name: 'herb' },
]

export const specialRulesData: Prisma.SpecialRuleCreateManyInput[] = [
  {
    name: 'Frail',
    description:
      'When you attempt to wound a super-dense hit location, this weapon breaks. Archive this card at the end of the attack.',
  },
  {
    name: 'Savage',
    description:
      'Once per attack, if you critically wound, cause 1 additional wound. This effect does not apply to impervious hit locations.',
  },
  {
    name: 'Cumbersome',
    description:
      'Spend a movement action as an additional cost to activate this weapon. Ignore Cumbersome if this weapon is activated indirectly (Pounce, Charge, etc).',
  },
  {
    name: 'Range',
    description:
      'Heroes this many or fewer spaces away from a beast may attack with this weapon. Ranged weapons cannot be used if field of view to the beast is blocked (by terrain with the Obstacle rule).',
  },
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
