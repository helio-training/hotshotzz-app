import React from 'react'
import Leaderboard from '../components/User/Leaderboard'
import { AUTH_TOKEN } from '../constants'

const authToken = localStorage.getItem(AUTH_TOKEN)

export default (props) => (
  <div>
    <h1>User Page</h1>
    
    <a href='/'>Home</a>
    <div>
      {authToken ? (
        <div
          onClick={() => {
            localStorage.removeItem(AUTH_TOKEN)
            props.history.push(`/register`)
          }}>
          <button>Logout</button>
        </div>
      ): null}
    </div>
    <Leaderboard />
  </div>
)
