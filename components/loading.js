import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Loading = () => {
  const {
    loading
  } = useContext(GlobalContext)

  if (!loading) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96">
      <div className="lds-dual-ring"></div>
    </div>
  )

}

export default Loading