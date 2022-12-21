import _sample from 'lodash/sample'
import categories from './categories'

const getPrompt = () => {
  const category = _sample(categories)
  const categorySlug = category.name.split(' ').join('').toLocaleLowerCase()
  const supplement = _sample(category.supplement)
  const text = `Write a ${category.name} ${supplement} trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.`

  return {
    categorySlug,
    category,
    supplement,
    text,
  }
}

export default getPrompt
