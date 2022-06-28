import React from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
  const { user } = useParams();
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 flex flex-col">
          <div id="title">Profile</div>
          <Link to="/dashboard/dashboard">Go To Root</Link>
          <Link to="/dashboard/main">Go To Main</Link>
          <div id="username">{user}</div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {}

export default User
