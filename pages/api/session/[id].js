import getEntry from "../../../utils/getEntry"

export default async function handler(req, res) {
  const { id } = req.query
  const data = await getEntry(id)
  
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'not foud' })
  }
}