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
  Create,
  Collection,
} = q

async function newEntry(session_id, json) {
  const collection_name = 'Leaderboard'
  const entry = await client.query(
    Create(
      Collection(collection_name),
      { data: { session_id, json } }
    )
  )
  return entry.data.session_id
}

export default newEntry
