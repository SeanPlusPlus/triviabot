const getOutputs = (req, res) => {
  const outputs = [
    {
      prompt: 'Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.',
      text: "\n\nQ: What is the name of the evil queen in Snow White and the Seven Dwarfs? \nA: 1. Maleficent 2. Ursula 3. Cruella De Vil 4. The Evil Queen\n\nCorrect Answer: The Evil Queen"
    }
  ]
  res.status(200).json(outputs)
}

export default getOutputs
