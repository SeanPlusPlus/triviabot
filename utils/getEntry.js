const faunadb = require('faunadb')

require('dotenv').config()

const FAUNA_KEY = process.env.FAUNA_KEY
const q = faunadb.query
const client = new faunadb.Client({
  secret: FAUNA_KEY,
  domain: "db.us.fauna.com",
  port: 443,
  scheme: 'https',
})

const {
  Get,
  Index,
  Lambda,
  Map,
  Match,
  Paginate,
  Var,
} = q

async function getEntry(session_id) {
  const index_name = 'leaderboard_by_id'
  try {
    const r = await client.query(
      Map(
        Paginate(
          Match(Index(index_name), session_id)
        ),
        Lambda(
          "session",
          Get(Var("session"))
        )
      )
    )
    return r.data[0].data.json
  } catch {
    return false
  }
}

export default getEntry