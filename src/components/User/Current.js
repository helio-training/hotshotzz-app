import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const ME_QUERY = gql`
  {
    me{
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
    <Query query={ME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
    
        return (
          <>
            <div>
              {data.me.name}
              
            </div>
          </>
        )
      }}
    </Query>
  )
}
// use ID to get whose signed in