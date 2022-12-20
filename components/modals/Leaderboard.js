import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from '../../context/GlobalState'

const Leaderboard = () => {
  const [loading, setLoading] = useState(true)
  const {
    modal,
    setModal,
    leaderboard,
    setLeaderboard,
  } = useContext(GlobalContext)

  const handleClose= () => {
    setModal({})
  }

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

  return (
    <div className={`modal ${modal && modal.leaderboard}`}>
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-4 top-4" onClick={handleClose}>✕</label>
        <h3 className="font-bold text-xl flex">
          <span className="text-2xl pb-4">
            Leaderboard
          </span>
        </h3>
        {loading && (
          <div className="spinner" />
        )}
        {leaderboard && leaderboard.length && (
          <div className="mt-1">
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
        <div className="modal-action pt-5">
          <label htmlFor="my-modal" className="btn" onClick={handleClose}>Close</label>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard