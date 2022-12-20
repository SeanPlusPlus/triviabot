import _sample from 'lodash/sample'

const getPrompt = () => {
  const categories = [
    {
      name: 'Disney',
      supplement: [
        'History',
        'Themes Parks',
        'Animation',
        'Movies',
      ]
    },
    {
      name: 'Pixar',
      supplement: [
        'Cars',
        'Toy Story',
        'Monsters',
        'History',
      ]
    },
    {
      name: 'Marvel',
      supplement: [
        'Avengers',
        'Comics',
        'Captain America',
        'Black Panther',
      ]
    },
    {
      name: 'Star Wars',
      supplement: [
        'Episode IV',
        'Skywalker',
        'The Empire Strikes Back',
        'Clone Wars',
      ]
    },
    {
      name: 'National Geographic',
      supplement: [
        'space',
        'geography',
        'history',
        'culture',
      ]
    },
    {
      name: 'ESPN',
      supplement: [
        'NFL',
        'MLB',
        'NBA',
        'College Football',
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
