import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'

const Result = () => {
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    correct,
    setQuestion,
    setCorrect,
    setLoading,
    streak,
    setHighScore,
    displayHighScore,

  } = useContext(GlobalContext)

  const handleClick = () => {
    setCorrect(null)
    setLoading(true)
    setQuestion(null)
    const fetchData = async (cache) => {
      const url = '/api/question'
      const result = cache ? await axios(url, { params: {cache: true} }) : await axios(url)
      if (result.data.error) {
        // Second time, get question from cache as we got an error the first time
        fetchData(true)
      } else {
        setHighScore(result.data.highScore)
        setQuestion(result.data)
        setLoading(false)
      }
    }

    // First time, try not fetching from cache to see if realtime openai api works
    fetchData(false)
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await axios.post(
      '/api/session', { streak: streak.length, name }
    )
    router.push('leaderboard')
  }

  const handleRefresh = () => {
    router.reload(window.location.pathname)
  }

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
        <button className="btn mt-4 w-full" onClick={handleClick}>Next Question</button>
      </div>
    )
  } else if (displayHighScore) {
    return (
      <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 mb-4 px-2 py-2 border rounded bg-base-100">
        <div className="text-2xl">
          <span className="pr-2" role="img" aria-label="party">🎉</span>
            NEW HIGH SCORE
          <span className="pl-2" role="img" aria-label="party">🎉</span>
        </div>
        <p className="py-2">You can add your name to the leaderboard if you like!!!</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChange}
              value={name}
              disabled={isSubmitting}
            />
          </div>
          <div className="mt-2">
            <button className="btn btn-info  w-full max-w-xs" disabled={isSubmitting}>
              Submit
            </button>
          </div>
          {isSubmitting && (
            <div className="spinner" />
          )}
        </form>
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
        <button className="btn mt-4 w-full" onClick={handleRefresh}>Play Again</button>
      </div>
    )
  }

}

export default Result