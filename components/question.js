import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { sha512 } from '../utils/crypto'

const Question = () => {
  const {
    question,
    setCorrect,
    correct,
    setStreak,
  } = useContext(GlobalContext)

  const handleClick = (text, answer) => {
    const response = sha512(text + answer.text)
    response.then((r) => {
      console.log(answer)
      console.log(text)
      console.log(r)
      console.log(question.correct)
      setCorrect(question.correct === r)
      setStreak([true])
    })
  }

  if (!question) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 my-4 px-2 py-2 border rounded bg-base-100">
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
