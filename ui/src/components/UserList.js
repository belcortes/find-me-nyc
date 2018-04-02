import React from 'react'

import User from './User'
    
const UserPage = (props) => {

  return (
    <div>
      <h2>UserList Component</h2>
      {
        props.users.map((user, index) => {
          return (
            <User
              user={user}
              key={index}
              index={index}
              deleteUser={this.deleteUser} />
          )
        })
      }
    </div>
  )
}

export default UserPage