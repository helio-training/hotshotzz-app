import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import User from './User'
import Current from './Current'

export const LEADER_QUERY = gql`
  {
    users{
      id
      name
      results {
        score
      }
    }
  }
`


export default () => {
  return (
    <Query query={LEADER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
    
        const usersToRender = data.users
    
        return (
          <>
            <Current />
            <h1>Leaderboard</h1>
            <p>rank - username - wins - points - streak? - games played</p>
            <div>
              {usersToRender.map((user, index) => (
                <User key={user.id} user={user} index={index}/>
              ))}
            </div>
          </>
        )
      }}
    </Query>
  )
}
