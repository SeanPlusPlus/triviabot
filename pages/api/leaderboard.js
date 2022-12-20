import getLeaderboard from "../../utils/getLeaderboard"

export default async function handler(req, res) {
  const data = await getLeaderboard()
  res.status(200).json(data)
}