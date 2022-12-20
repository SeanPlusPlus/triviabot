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
  Lambda,
  Map,
  Paginate,
  Documents,
  Collection,
} = q

async function getLeaderboard() {
  const collection_name = 'Leaderboard'

  try {
    const r = await client.query(
      Map(
        Paginate(Documents(Collection(collection_name))),
        Lambda(x => Get(x))
      )
    )
    return r.data.map((el) => (el.data))
  } catch(e) {
    console.log(e)
    return false
  }
}

export default getLeaderboard
