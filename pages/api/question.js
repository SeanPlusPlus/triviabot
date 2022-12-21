import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'
import _orderBy from 'lodash/orderBy'
import _get from 'lodash/get'
import _sample from 'lodash/sample'
import { promises as fs } from 'fs'
import path from 'path'

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

  // Get Leaderboard
  const leaderData = await getLeaderboard()
  const highScore = _orderBy(leaderData, (item) => (
    item.json.streak
  ), ['desc']).filter((item) => {
    const streak = _get(item, 'json.streak')
    return Number.isInteger(streak) && streak > 0
  })[0].json.streak

  const { cache } = req.query
  if (cache) {
  
    // Get question from cache
    const jsonDirectory = path.join(process.cwd(), 'data')
    const rawdata = await fs.readFile(jsonDirectory + '/questions.json', 'utf8')
    const questionsJson = JSON.parse(rawdata).questions
    const rand = _sample(questionsJson)

    // Return cached
    res.status(200).json({...rand, highScore, cache: true})
    return
  } else {

    // Get question from GPT3
    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: prompt.text,
      temperature: 0.7,
      max_tokens: 250,
    });
    
    // The question object
    const output = baseCompletion.data.choices.pop()

    // Parse questions
    const data = await parseOutput(output.text)

    // Send to Slack
    const url = process.env.SLACK_WEB_HOOK_URL
    const payload = getPayload(data, prompt)
    await axios.post(url, payload)
    delete data.answer

    // Function for saving a (valid) question to a static json file
    // Note only works when running app locally
    const { save } = req.query
    if (save && !data.error) {
      if (process.env.NODE_ENV === 'development') {

        const jsonDirectory = path.join(process.cwd(), 'data')
        const rawdata = await fs.readFile(jsonDirectory + '/questions.json', 'utf8')
        const questionsJson = JSON.parse(rawdata).questions

        console.log('*** Total in Cache:', questionsJson.length + 1) 
  
        const jsonData = JSON.stringify({ questions: [...questionsJson, {...data, prompt}]})
        await fs.writeFile('./data/questions.json', jsonData)
      }
    }

    // Return GPT3
    res.status(200).json({...data, prompt, highScore})
    return
  }
}

export default generateQuestion