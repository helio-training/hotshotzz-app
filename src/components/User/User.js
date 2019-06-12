import React from 'react'

export default (props) => {
  return (
    <>
      <div>
        <span>{props.index + 1}. </span>
        {props.user.name}
        {props.user.results.score}
      </div>
    </>
  ) 
}
