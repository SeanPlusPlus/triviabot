import { useContext } from 'react'
import { useRouter } from 'next/router'
import { GlobalContext } from '../../context/GlobalState'

const Leaderboard = () => {
  const router = useRouter()
 
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    router.push('/')
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.leaderboard}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="text-2xl pb-4">
            Leaderboard
          </span>
        </h3>
        <div>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard