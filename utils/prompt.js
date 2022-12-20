import _sample from 'lodash/sample'

export const getPrompt = () => {
  const categories = [
    'Disney',
    'Pixar',
    'Marvel',
    'Star Wars',
    'National Geographic',
  ]

  const category = _sample(categories)

  return `Write a ${category} trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.`
}