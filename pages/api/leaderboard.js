import _orderBy from 'lodash/orderBy'
import _get from 'lodash/get'
import getLeaderboard from "../../utils/getLeaderboard"

export default async function handler(req, res) {
  const data = await getLeaderboard()
  const leaderboard = _orderBy(data, (item) => (
    item.json.streak
  ), ['desc']).filter((item) => {
    const streak = _get(item, 'json.streak')
    return Number.isInteger(streak) && streak > 0
  })
  res.status(200).json(leaderboard)
}