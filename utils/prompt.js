import _sample from 'lodash/sample'

const getPrompt = () => {
  const categories = [
    'Disney',
    'Pixar',
    'Marvel',
    'Star Wars',
    'National Geographic',
  ]

  const category = _sample(categories)
  const categorySlug = category.split(' ').join('').toLocaleLowerCase()
  const text = `Write a ${category} trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.`

  return {
    categorySlug,
    category,
    text,
  }
}

export default getPrompt
