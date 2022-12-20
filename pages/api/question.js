import axios from 'axios'
import { Configuration, OpenAIApi } from 'openai'
import { parseOutput } from '../../utils/parseOutput'
import getPayload from '../../utils/slack'

global.crypto = require('crypto')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const prompt = 'Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.'

const generateQuestion = async (req, res) => {

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const output = baseCompletion.data.choices.pop()
  const data = await parseOutput(output.text)

  const url = process.env.SLACK_WEB_HOOK_URL
  const payload = getPayload(data)
  await axios.post(url, payload)
  delete data.answer
  res.status(200).json(data, prompt)
}

export default generateQuestion