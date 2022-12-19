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
    setDebug,
  } = useContext(GlobalContext)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const result = await axios(
        '/api/question',
      )
      setQuestion(result.data)
      console.log('result.data', result.data)
      if (!result.data.text || !result.data.answers || !result.data.correct) {
        setDebug(true)
      }
      setLoading(false)
    }

    fetchData()
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
