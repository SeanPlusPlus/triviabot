import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Home = () => {
  const {
    question,
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

  const handleClick = (answer) => {
    console.log(answer)
  }

  if (!question) {
    return <></>
  }

  return (
    <div className="text-center h-screen">
      <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 my-5 px-2 py-2 border rounded bg-base-100">
        <p className="text-left text-lg pb-1 pl-1">
          {question.text}
        </p>
        {question.answers.map((a) => (
          <div className="form-control">
            <label className="label cursor-pointer hover:bg-base-300 rounded" onClick={() => handleClick(a)}>
              <span className="label-text">{a.text}</span> 
              <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
