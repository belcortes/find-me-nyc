import React from 'react'

const User = (props) => {
  const usersItemStyles = {
    padding: "20px",
    flexGrow: "1",
    marginRight: "60px",
    marginBottom: "30px"
    // margin: "0 auto",
    // marginRight: "30px"
  }
  const userFieldStyles = {
    marginBottom: "15px"
  }

  const selectStyles = {
    marginLeft: "10px"
  }

  return (
    <div style={usersItemStyles}>
      <div id={`user-${props.user.id}`} data-user-display>
        <div style={userFieldStyles} id={`user-${props.user.id}-first-and-last-name`}>
          <b>{props.user.firstName}
          {' '}
          {props.user.lastName}</b>
        </div>
        <div style={userFieldStyles} id={`user-${props.user.id}-user-name`}>
          {props.user.userName}
        </div>
        <div style={userFieldStyles} id={`user-${props.user.id}-last-search`}>
          {props.user.lastSearch}
        </div>
        <div id={`user-${props.user.id}-admin`} style={userFieldStyles}>
          is admin: 
          {
            props.user.admin ?
            <select 
              style={selectStyles}
              onChange={(e) => {
                props.handleUserChange(e, props.index)
                props.updateUser(props.index)
              }} >
              <option selected name='admin' value="true">Yes</option>
              <option name='admin' value="false">No</option>
            </select>
            :
            <select
              style={selectStyles}
              onChange={(e) => {
                props.handleUserChange(e, props.index)
                props.updateUser(props.index)
              }} >
              <option name='admin' value="true">Yes</option>
              <option selected name='admin' value="false">No</option>
            </select>
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