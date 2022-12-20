import { useContext } from 'react'
import Image from 'next/image'
import { GlobalContext } from '../../context/GlobalState'

const About = () => {
  const title = 'Triviabot'
 
  const {
    modal,
    setModal,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

  return (
    <div className={`modal ${modal && modal.about}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="text-2xl pb-4">
            {title}
          </span>
        </h3>
        <div>
          <p className="pb-4">
            Hello There! And thanks for stopping by and checking out my Disney AI Trivia Bot.
          </p>
          <p className="pb-4">
            This bot leverages the <a className="link text-sky-500" target="_blank" rel="noopener noreferrer" href="https://beta.openai.com/docs/introduction">OpenAI GPT3 API</a>.
          </p>
          <p className="pb-4">
            Using a prompt based on the unique Disney brands, the bot attempts to generate novel - and fun! - trivia questions.
          </p>
          <p className="pb-4">
            Leveraging six of the most prominent Disney properties, the game is a straightforward example of engineering on-the-fly AI prompts, and parsing the output.
          </p>
          <Image
            className="rounded"
            src="/brands/brands.png"
            height="324"
            width="216"
          />
          <p className="py-4">
            Check out the code <a className="link text-sky-500" target="_blank" rel="noopener noreferrer" href="https://github.com/SeanPlusPlus/triviabot">here on Github</a>.
          </p>
          <p className="pt-3">
            By <a className="link text-sky-500" href="https://seanplusplus.com" rel="noopener noreferrer" target="_blank">SeanPlusPlus</a>
          </p>
        </div>
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default About