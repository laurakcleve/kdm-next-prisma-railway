import { Color } from '@prisma/client'

type AffinityBonusRequirementProps = {
  color: Color
  number: number
}

function AffinityBonusRequirement({
  color,
  number,
}: AffinityBonusRequirementProps) {
  let colorComponent
  switch (color) {
    case 'RED':
      colorComponent = Red
      break
    case 'BLUE':
      colorComponent = Blue
      break
    case 'GREEN':
      colorComponent = Green
      break
    default:
      colorComponent = null
  }

  return <>{[...Array(number)].map((_, i) => colorComponent(i))}</>
}

function Red({ index }) {
  return <span key={index} className="affinity-bonus-requirement red" />
}

function Blue({ index }) {
  return <span key={index} className="affinity-bonus-requirement blue" />
}

function Green({ index }) {
  return <span key={index} className="affinity-bonus-requirement green" />
}

export default AffinityBonusRequirement
