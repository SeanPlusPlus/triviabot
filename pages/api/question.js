import { Configuration, OpenAIApi } from 'openai';

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
  
  const output = baseCompletion.data.choices.pop();

  const text = new Date() + ''
  const answers = [
    {
      text: 'Dude' + text
    },
    {
      text: 'Stoked' + text
    }
  ]
  const i = 1
  const correct = crypto.createHash('sha512').update(text + answers[i].text).digest('hex')
  const data = {
    text,
    answers,
    correct,
    output,
  }
  res.status(200).json(data)
}

export default generateQuestion