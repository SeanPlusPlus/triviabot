import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Streak = () => {
  const {
    streak,
  } = useContext(GlobalContext)

  if (streak.length === 0) {
    return (
      <div className="mt-3 mb-1 mx-10 md:mx-24 lg:mx-48 xl:mx-96 text-left">
        <div className="h-26">&nbsp;</div>
      </div>
    )
  }

  return (
    <div className="mt-3 mb-1 mx-10 md:mx-24 lg:mx-48 xl:mx-96 text-left">
      {streak.map((s, i) => (
        s ? (
          <div key={i} className="badge badge-success mr-1"></div>
        ) : (
          <div key={i} className="badge badge-error mr-1"></div>
        )
      ))}
    </div>
  )
}

export default Streak 