import _get from 'lodash/get'
import uid from '../../utils/uid'
import newEntry from '../../utils/newEntry'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const json = req.body
  const streak = _get(json, 'streak')

  if(!(Number.isInteger(streak) && streak > 0)) {
    res.status(400).json({
      message: 'no dice'
    })
  } else {
    const session_id = await newEntry(uid(8), json)
    res.status(200).json({
      session_id,
    })
  }
}
