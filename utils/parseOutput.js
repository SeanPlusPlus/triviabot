global.crypto = require('crypto')
const map = {'A': 0, 'B': 1, 'C': 2, 'D': 3}

export const parseOutput = (output) => {

  // base array
  const arr = output.trim().split('\n\n')
  if (arr.length < 3) {
    return {
      output,
      arr,
    }
  }
    
  // question text
  const text = arr[0]
  if (!text) {
    return {
      output,
      arr,
      text,
    }
  }

  // answers
  const answersArr = arr[1].split('\n')
  const answers = answersArr.map((a) => ({text: a}))
  if (!answers) {
    return {
      output,
      arr,
      text,
      answersArr
    }
  }

  // correct answer
  const answerStr = arr[2]
  const answer = answerStr.split(': ')[1][0]
  if (!answer) {
    return {
      output,
      arr,
      text,
      answers,
      answerStr,
    }
  }
  
  // correct answer index
  const i = map[answer]
  if (!i) {
    return {
      output,
      arr,
      text,
      answers,
      answer,
    }
  }

  // correct answer sha
  const correct = crypto.createHash('sha512').update(text + answers[i].text).digest('hex')
  return {
    output,
    text,
    answers,
    correct,
  }
}