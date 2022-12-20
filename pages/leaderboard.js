import { useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalState'
import Header from '../components/header'
import Nav from '../components/nav'

export default function Leaderboard() {
  const {
    loading,
    leaderboard,
    setLeaderboard,
    setLoading,
  } = useContext(GlobalContext)
  
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const result = await axios(
        '/api/leaderboard',
      )
      setLoading(false)
      setLeaderboard(result.data)
    }

    fetchData()
  }, []);

  const handleClick = () => {
    window.location.replace('/')
  }

  return (
    <div className="grid-bg md:h-screen">
      <Header />
      <Nav />
      <div className="mt-5 mx-10 md:mx-24 lg:mx-48 xl:mx-96 px-2 py-2 border rounded bg-base-100">
        {loading ? (
          <div className="lds-loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <>
            <h3 className="mx-3 font-bold text-xl flex">
              <span className="text-2xl pb-2">
                Leaderboard
              </span>
            </h3>
            {leaderboard && leaderboard.length && (
              <div className="mx-3 mb-2">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((session, i) => (
                      <tr key={session.session_id}>
                        <th>{i + 1}</th>
                        <td>{session.json.name}</td>
                        <td>{session.json.streak}</td>
                      </tr>

                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-5 mx-10 md:mx-24 lg:mx-48 xl:mx-96 pb-80">
        <button className="btn mt-4 w-full" onClick={handleClick}>
          Play Again
        </button>
      </div>
    </div>
  )
}