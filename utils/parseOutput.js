global.crypto = require('crypto')
const map = {'A': 0, 'B': 1, 'C': 2, 'D': 3}

export const parseOutput = (gpt3output) => {

  // base array
  const arr = gpt3output.trim().split('\n\n')
  if (arr.length < 3) {
    return {
      gpt3output,
      arr,
      error: true,
    }
  }
    
  // question text
  const text = arr[0]
  if (!text) {
    return {
      gpt3output,
      arr,
      text,
      error: true,
    }
  }

  // answers
  const answersArr = arr[1].split('\n')
  const answers = answersArr.map((a) => ({text: a}))
  if (!answers) {
    return {
      gpt3output,
      arr,
      text,
      answersArr,
      error: true,
    }
  }

  // correct answer
  const answerStr = arr[2]
  const answer = answerStr.split(': ')[1][0]
  if (!answer) {
    return {
      gpt3output,
      arr,
      text,
      answers,
      answerStr,
      error: true,
    }
  }
  
  // correct answer index
  const i = map[answer]
  if (!Number.isInteger(i)) {
    return {
      gpt3output,
      arr,
      text,
      answers,
      answer,
      error: true,
    }
  }

  // correct answer sha
  const correct = crypto.createHash('sha512').update(text + answers[i].text).digest('hex')
  return {
    gpt3output,
    text,
    answers,
    answer,
    correct,
  }
}