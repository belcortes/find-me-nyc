import React from 'react'

import UserList from './UserList'
    
const UserPage = (props) => {

  return (
    <div>
      <h1>Users Page!!!</h1>
      <UserList users={props.users} />
    </div>
  )
}

export default UserPage