import React from 'react'

const User = (props) => {
  return (
    <div>
      <h2>User Component</h2>
      <div id={`user-${props.user.id}`} data-user-display>
        <div id={`user-${props.user.id}-user-name`}>
          {props.user.userName}
        </div>
        <div id={`user-${props.user.id}-first-name`}>
          {props.user.firstName}
        </div>
        <div id={`user-${props.user.id}-last-name`}>
          {props.user.lastName}
        </div>
        <div id={`user-${props.user.id}-last-search`}>
          {props.user.lastSearch}
        </div>

        <div id={`user-${props.user.id}-admin`}>
          {
            props.user.admin ?
            "Yes" : "No"
          }
        </div>
        <button
          id={`delete-user-${props.user.id}`}
          onClick={() => props.deleteUser(props.user.id, props.index)}>

          Delete
        </button>
      </div>
    </div>
  )
}

export default User