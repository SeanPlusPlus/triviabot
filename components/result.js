import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Result = () => {
  const {
    correct,
  } = useContext(GlobalContext)

  if (correct === null) {
    return <></>
  }

  if (correct === true) {
    return (
      <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96">
        <div className="alert alert-success rounded shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Correct</span>
          </div>
        </div>
        <button className="btn mt-4 w-full">Next Question</button>
      </div>
    )
  } else {
    return (
      <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96">
        <div className="alert alert-error rounded shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Incorrect</span>
          </div>
        </div>
        <p className="mt-4 w-full">try a different option</p>
      </div>
    )
  }

}

export default Result