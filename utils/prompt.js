import _sample from 'lodash/sample'

const getPrompt = () => {
  const categories = [
    {
      name: 'Disney',
    },
    {
      name: 'Pixar',
    },
    {
      name: 'Marvel',
    },
    {
      name: 'Star Wars',
    },
    {
      name: 'National Geographic',
    },
  ]

  const category = _sample(categories)
  const categorySlug = category.name.split(' ').join('').toLocaleLowerCase()

  const text = `Write a ${category.name} trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.`

  return {
    categorySlug,
    category,
    text,
  }
}

export default getPrompt
