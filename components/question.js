import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { sha512 } from '../utils/crypto'

const Question = () => {
  const [flag, setFlag] = useState(false)
  const {
    question,
    setCorrect,
    correct,
    setStreak,
    streak,
  } = useContext(GlobalContext)

  const handleClick = (text, answer) => {
    const response = sha512(text + answer.text)
    response.then((r) => {
      const current = streak
      const s = question.correct === r
      if (s) {
        setCorrect(s)
        if (flag) {
          setFlag(false)
        } else {
          setStreak([...current, s])
        }
      } else {
        if (!flag) {
          setCorrect(s)
          setStreak([...current, s])
          setFlag(true)
        }
      }
    })
  }

  if (!question) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 mb-4 px-2 py-2 border rounded bg-base-100">
      <p className="text-left text-lg pb-1 pl-1">
        {question.text}
      </p>
      {question.answers.map((a) => (
        <div key={a.text} className="form-control">
          <label className="label cursor-pointer hover:bg-base-300 rounded" onClick={() => handleClick(question.text, a)}>
            <span className="label-text">{a.text}</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" disabled={correct} />
          </label>
        </div>
      ))}
    </div>
  )
}

export default Question
