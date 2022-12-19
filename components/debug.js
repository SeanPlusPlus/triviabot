import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import JSONPretty from 'react-json-pretty'
const JSONPrettyMon = require('react-json-pretty/dist/monikai')

const Debug = () => {
  const {
    debug,
  } = useContext(GlobalContext)

  if (!debug) {
    return <></>
  }

  return (
    <>
      <div className="mx-10 md:mx-24 lg:mx-48 xl:mx-96">
        <div className="text-left alert alert-warning rounded shadow-lg mb-5">
          <div>
            <span>Ooofh! Something went wrong on our end. This is the question text our ai generated, and we were not able to parse it correctly. Major props if you screenshot this and send it to Sean.</span>
          </div>
        </div>
      </div>


      <div className="text-left mx-10 md:mx-24 lg:mx-48 xl:mx-96">
          <JSONPretty data={debug} themeClassName="custom-json-pretty" theme={JSONPrettyMon}></JSONPretty>
      </div>
    </>
  )

}

export default Debug