import React from 'react'

import User from './User'
    
const UserPage = (props) => {

  return (
    <div id="users-wrapper">
      <h2>UserList Component</h2>
      {
        props.users.map((user, index) => {
          return (
            <User
              user={user}
              key={index}
              index={index}
              deleteUser={props.deleteUser} />
          )
        })
      }
    </div>
  )
}

export default UserPage