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
// TODO:
// Pagination, Sort By Score, implement a way to add scores
// make current users info stick to the top.
