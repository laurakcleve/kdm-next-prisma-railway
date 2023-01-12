import HeadIcon from '../components/HeadIcon'
import BodyIcon from '../components/BodyIcon'
import ArmsIcon from '../components/ArmsIcon'
import WaistIcon from '../components/WaistIcon'
import LegsIcon from '../components/LegsIcon'

function HitLocationIcon({ location }) {
  switch (location) {
    case 'HEAD':
      return <HeadIcon />
    case 'BODY':
      return <BodyIcon />
    case 'ARMS':
      return <ArmsIcon />
    case 'WAIST':
      return <WaistIcon />
    case 'LEGS':
      return <LegsIcon />
    default:
      return <></>
  }
}

export default HitLocationIcon
