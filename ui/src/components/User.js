import React from 'react'

const User = (props) => {
  const usersItemStyles = {
    padding: "30px",
    flexGrow: "1"
    // margin: "0 auto",
    // marginRight: "30px"
  }
  const userFieldStyles = {
    marginBottom: "15px"
  }

  return (
    <div style={usersItemStyles}>
      <div id={`user-${props.user.id}`} data-user-display>
        <div style={userFieldStyles} id={`user-${props.user.id}-user-name`}>
          {props.user.userName}
        </div>
        <div style={userFieldStyles} id={`user-${props.user.id}-first-name`}>
          {props.user.firstName}
        </div>
        <div style={userFieldStyles} id={`user-${props.user.id}-last-name`}>
          {props.user.lastName}
        </div>
        <div style={userFieldStyles} id={`user-${props.user.id}-last-search`}>
          {props.user.lastSearch}
        </div>
        
        {
          props.user.admin ?
          <select 
            id={`user-${props.user.id}-admin`}
            style={userFieldStyles}
            onChange={(e) => {
              props.handleUserChange(e, props.index)
              props.updateUser(props.index)
            }} >
            <option selected name='admin' value="true">Yes</option>
            <option name='admin' value="false">No</option>
          </select>
          :
          <select 
            id={`user-${props.user.id}-admin`}
            style={userFieldStyles}
            onChange={(e) => {
              props.handleUserChange(e, props.index)
              props.updateUser(props.index)
            }} >
            <option name='admin' value="true">Yes</option>
            <option selected name='admin' value="false">No</option>
          </select>
        }
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