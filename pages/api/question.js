import { Configuration, OpenAIApi } from 'openai';

global.crypto = require('crypto')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const map = {'A': 0, 'B': 1, 'C': 2, 'D': 3}

const prompt = 'Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.'

const generateQuestion = async (req, res) => {

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const output = baseCompletion.data.choices.pop()
  const arr = output.text.trim().split('\n\n')
  const text = arr[0].split('Q: ')[1]
  const answers = arr[1].split('\n').map((a) => ({text: a}))
  const answer = arr[2].split('Correct Answer: ')[1][0]
  const i = map[answer]
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