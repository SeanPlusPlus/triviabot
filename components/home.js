import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// components
import Question from './question'
import Result from './result'
import Streak from './streak'
import Debug from './debug'
import Loading from './loading'

const Home = () => {
  const {
    setQuestion,
    setLoading,
    setHighScore,
  } = useContext(GlobalContext)

  useEffect(() => {
    setLoading(true)
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
  }, []);

  return (
    <div className="text-center h-screen">
      <Streak />
      <Loading />
      <Question />
      <Result />
      <Debug />
    </div>
  )
}

export default Home
