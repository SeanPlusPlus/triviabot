export default function handler(req, res) {
  const data = {message: "tomato bot api"}
  res.status(200).json(data)
}