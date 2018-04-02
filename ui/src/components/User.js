import React from 'react'

const User = (props) => {
  return (
    <h2>User Component</h2>
    <div id={`user-${props.user.id}`} data-user-display>
      <div id={`user-${props.user.id}-user-name`}>
        {props.user.userName}
      </div>
    </div>
  )
}

export default User