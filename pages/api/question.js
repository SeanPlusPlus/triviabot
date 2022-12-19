global.crypto = require('crypto')

export default function handler(req, res) {
  const text = new Date() + ''
  const answers = [
    {
      text: 'Dude'
    },
    {
      text: 'Stoked'
    }
  ]
  const i = 1
  const correct = crypto.createHash('sha512').update(text + answers[i].text).digest('hex')
  const data = {
    text,
    answers,
    correct,
  }
  res.status(200).json(data)
}
