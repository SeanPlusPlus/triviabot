const getOutputs = (req, res) => {
  const outputs = [
    {
      prompt: "Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.",
      text: "\n\nQ: What is the name of the evil queen in Snow White and the Seven Dwarfs? \nA: 1. Maleficent 2. Ursula 3. Cruella De Vil 4. The Evil Queen\n\nCorrect Answer: The Evil Queen"
    },
    {
      prompt: "Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.",
      text: "\n\nQ: What was the first full-length animated film released by Walt Disney Pictures?\n\nA. Snow White and the Seven Dwarfs\nB. Beauty and the Beast\nC. Alice in Wonderland\nD. Peter Pan\n\nAnswer: A. Snow White and the Seven Dwarfs"
    },
    {
      prompt: "Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.",
      text: "\n\nQ: What is the name of the castle featured in the opening credits of the 1989 film The Little Mermaid? \nA: 1. Buckingham Palace \n2. Versailles \n3. Cinderella's Castle \n4. Prince Eric's Castle \n\nCorrect Answer: Prince Eric's Castle"
    },
    {
      prompt: "Write a Disney trivia question, provide four responses, three incorrect, and one correct. And then tell me the correct answer.",
      text: "\n\nQ: What character from Disney's Aristocats wears a beret?\n\nA: 1. Mickey Mouse \n2. Abu \n3. Scuttle \n4. O'Malley \n\nCorrect Answer: O'Malley"
    },
  ]
  res.status(200).json(outputs)
}

export default getOutputs
