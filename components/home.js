import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

// components
import Question from './question'
import Result from './result'

const Home = () => {
  const {
    setQuestion,
  } = useContext(GlobalContext)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/question',
      )

      setQuestion(result.data)
    }

    fetchData()
  }, []);

  return (
    <div className="text-center h-screen">
      <Question />
      <Result />
    </div>
  )
}

export default Home
