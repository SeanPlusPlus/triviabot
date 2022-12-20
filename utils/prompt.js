import _sample from 'lodash/sample'

const getPrompt = () => {
  const categories = [
    {
      name: 'Disney',
      supplement: [
        'History',
      ]
    },
    {
      name: 'Pixar',
      supplement: [
        'Cars',
      ]
    },
    {
      name: 'Marvel',
      supplement: [
        'Avengers',
      ]
    },
    {
      name: 'Star Wars',
      supplement: [
        'Episode IV',
      ]
    },
    {
      name: 'National Geographic',
      supplement: [
        'space',
      ]
    },
  ]

  const category = _sample(categories)
  const categorySlug = category.name.split(' ').join('').toLocaleLowerCase()
  const supplement = _sample(category.supplement)

  const text = `Write a ${category.name} ${category.supplement} trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.`

  return {
    categorySlug,
    category,
    supplement,
    text,
  }
}

export default getPrompt
