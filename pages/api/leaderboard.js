import _orderBy from 'lodash/orderBy'
import getLeaderboard from "../../utils/getLeaderboard"

export default async function handler(req, res) {
  const data = await getLeaderboard()
  const leaderboard = _orderBy(data, (item) => (
    item.json.streak
  ), ['desc']).filter((item) => (item.json.streak))
  res.status(200).json(leaderboard)
}