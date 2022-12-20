import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Loading = () => {
  const {
    loading
  } = useContext(GlobalContext)

  // if (!loading) {
  //   return <></>
  // }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 mb-4 px-20 py-20 border rounded bg-base-100">
      <div className="flex items-center justify-center">
        <div className="loader"></div>
      </div>
    </div>
  )

}

export default Loading