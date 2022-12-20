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
  CreateCollection,
  CreateIndex,
  Collection,
} = q

const init = async () => {
  const init_collection = await client.query(
    CreateCollection({ name: "Leaderboard" })
  )
  const init_index = await client.query(
    CreateIndex({
      name: 'leaderboard_by_id',
      source: Collection("Leaderboard"),
      unique: true,
      terms: [
        {
          field: ["data", "session_id"]
        }
      ]
    })
  )
  console.log(init_collection, init_index)
}

init()