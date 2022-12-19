import { useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/hello',
      )

      console.log(result.data)
    }

    fetchData()
  }, []);

  return (
    <div className="text-center h-screen">
      <div className="mx-10 my-10 px-2 py-2 border rounded bg-base-100">
        <p className="text-left text-sm">
          Hello World
        </p>
      </div>
    </div>
  )
}

export default Home
