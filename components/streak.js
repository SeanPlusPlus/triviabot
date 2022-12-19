import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Streak = () => {
  const {
    streak,
  } = useContext(GlobalContext)

  if (streak.length === 0) {
    return <></>
  }

  return <>hello world</>
}

export default Streak 