import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'
import _orderBy from 'lodash/orderBy'
import _get from 'lodash/get'
import getLeaderboard from '../../utils/getLeaderboard'
import { parseOutput } from '../../utils/parseOutput'
import getPrompt from '../../utils/prompt'
import getPayload from '../../utils/slack'

require('dotenv').config()

global.crypto = require('crypto')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const generateQuestion = async (req, res) => {
  const prompt = getPrompt()

  // leaderboard
  const leaderData = await getLeaderboard()
  const highScore = _orderBy(leaderData, (item) => (
    item.json.streak
  ), ['desc']).filter((item) => {
    const streak = _get(item, 'json.streak')
    return Number.isInteger(streak) && streak > 0
  })[0].json.streak

  // debug
  const debug = false

  if (debug) {

    // Use hard-coded debug question 

    const tmp = {
      text: 'Q: What is the capital of Egypt?',
      answers: [
        { text: 'A. Cairo' },
        { text: 'B. Alexandria' },
        { text: 'C. Luxor' },
        { text: 'D. Aswan' }
      ],
      correct: '326520192986d458168497999723e1d692c2dcb585a41a8c4a395926c698637bf65edb80d94c92ac75e6f93939b24c3389faa4ec9490a11153ce1f72e42ea62d'
    }
    res.status(200).json({...tmp, prompt, highScore})
  } else {

    // Get question from GPT3

    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt.text,
      temperature: 0.7,
      max_tokens: 250,
    });
    
    const output = baseCompletion.data.choices.pop()
    const data = await parseOutput(output.text)

    const url = process.env.SLACK_WEB_HOOK_URL
    const payload = getPayload(data, prompt)
    await axios.post(url, payload)
    delete data.answer

    res.status(200).json({...data, prompt, highScore})
  }
}

export default generateQuestion