export default function handler(req, res) {
  const data = {
    text: "Hello World",
    answers: [
      {
        text: "Dude"
      },
      {
        text: "Stoked"
      }
    ],
    correct: null
  }
  res.status(200).json(data)
}