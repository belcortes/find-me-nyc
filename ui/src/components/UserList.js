import React from 'react'

import User from './User'
import Navbar from './Navbar'
    
const UserPage = (props) => {

  return (
    <div id="users-wrapper">
    	<Navbar />
      <h2>UserList Component</h2>
      {
        props.users.map((user, index) => {
          return (
            <User
              user={user}
              key={index}
              index={index}
              deleteUser={props.deleteUser}
              handleUserChange={props.handleUserChange}
              updateUser={props.updateUser} />
          )
        })
      }
    </div>
  )
}

export default UserPage