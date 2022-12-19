import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const About = () => {
  const title = 'Triviabot'
 
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="ml-1 text-2xl pb-4">
            {title}
          </span>
        </h3>
        <div>
          <p className="pb-4">
            Interarcite AI Trivia Bot
          </p>
          <p className="pt-3">
            By <a className="link text-sky-500" href="https://seanplusplus.com" rel="noopener noreferrer" target="_blank">SeanPlusPlus</a>
          </p>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About