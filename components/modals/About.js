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
            Hello There! And thanks for stopping by and checking out my Disney AI Trivia Bot, built on the <a className="link text-sky-500" target="_blank" rel="noopener noreferrer" href="https://beta.openai.com/docs/introduction">OpenAI GPT3 API</a>. 
          </p>
          <p className="pb-4">
            This is how it works: the webapp server generates a prompt based on a randomly selected Disney brand, submits the prompt to the API, and hopefully gets back a novel - and fun! - trivia question with a set of answers.
          </p>
          <p className="pb-4">
            Leveraging six of the most prominent Disney properties, the game is a straightforward example of engineering on-the-fly AI prompts, and parsing the output.
          </p>
          <p className="pb-4">
            These here are the six brands that I use to generate different categories of prompts for the AI:
          </p>
          <Image
            className="rounded"
            src="/brands/brands.png"
            height="600"
            width="400"
          />
          <p className="py-4">
            So just to fully clarify, a human did not write any of these questions and answers! They are all generated by an AI. Pretty cool stuff, huh?
          </p>
          <p className="py-4">
            Check out the code <a className="link text-sky-500" target="_blank" rel="noopener noreferrer" href="https://github.com/SeanPlusPlus/triviabot">here on Github</a>
          </p>
          <p className="pt-3">
            Or check out some of my other stuff <a className="link text-sky-500" href="https://seanplusplus.com" rel="noopener noreferrer" target="_blank">here</a>
          </p>
          <p className="py-4">
            Oh ... One last note ... This thing is very, very much a proof of concept. If you encounter a spinner that is going for just wayyyy too long, probably best to refresh the page, start over, and send me a DM letting me know that this is foobar. 
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