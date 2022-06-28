import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 flex flex-col">
          <div id="title">Main</div>
          <Link to="/dashboard/profile/d5d4b007-af72-41f5-8d0b-628dbd913a8b">Go To Profile</Link>
          <Link to="/dashboard">Go To Root</Link>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
