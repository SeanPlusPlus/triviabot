import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { sha512 } from '../utils/crypto'
import Image from 'next/image'

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

  if (!question || !question.answers || !question.text) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 mb-4 px-2 py-2 border rounded bg-base-100">
      <div className="flex">
        <div className="mr-1">
          <Image
            className="rounded"
            src={`/brands/${question.prompt.categorySlug}.png`}
            height='35'
            width='35'
          />
        </div>
        <p className="text-left text-sm pb-1 pl-1 md:pt-2">
          {question.text}
        </p>
      </div>
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
