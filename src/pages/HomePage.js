import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

const authToken = localStorage.getItem(AUTH_TOKEN)

export default (props) => (
  <>
    <div>
      <h1>Homepage</h1>
      <Link to='/user'>User Page</Link>
      <br />
    </div>
    <div>
      {authToken ? (
        <div
          onClick={() => {
            localStorage.removeItem(AUTH_TOKEN)
            props.history.push(`/register`)
          }}>
          <button>Logout</button>
        </div>
      ) : (
        <Link to="/register">
          <button>Login</button>
        </Link>
      )}
    </div>
  </>
)