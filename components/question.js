import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Question = () => {
  const {
    question,
  } = useContext(GlobalContext)

  const handleClick = (answer) => {
    console.log(answer)
  }

  if (!question) {
    return <></>
  }

  return (
    <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96 my-5 px-2 py-2 border rounded bg-base-100">
      <p className="text-left text-lg pb-1 pl-1">
        {question.text}
      </p>
      {question.answers.map((a) => (
        <div key={a.text} className="form-control">
          <label className="label cursor-pointer hover:bg-base-300 rounded" onClick={() => handleClick(a)}>
            <span className="label-text">{a.text}</span> 
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
          </label>
        </div>
      ))}
    </div>
  )
}

export default Question
