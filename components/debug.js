import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Debug = () => {
  const {
    debug,
  } = useContext(GlobalContext)

  if (!debug || !debug.text) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 text-left">
      {debug.text.split('\n\n').map((str) => (
        <p className="mt-4 w-full">{str}</p>
      ))}
    </div>
  )

}

export default Debug