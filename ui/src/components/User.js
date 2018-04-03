import React, { Component } from 'react'

class User extends Component {
  state = {
    selectedValue: false
  }

  handleUserChange = (e) => {
    var options = e.target.options
    options.length.forEach((option) => {
      console.log(option)
      if (options.selected) {
        this.setState({selectedValue: option})
      }
    })
  }

  render() {
    const usersItemStyles = {
      padding: "20px",
      flexGrow: "1",
      marginRight: "60px",
      marginBottom: "30px"
    }
    const userFieldStyles = {
      marginBottom: "15px"
    }

    const selectStyles = {
      marginLeft: "10px"
    }

    return (

      <div style={usersItemStyles}>
        <div id={`user-${this.props.user.id}`} data-user-display>
          <div style={userFieldStyles} id={`user-${this.props.user.id}-first-and-last-name`}>
            <b>{this.props.user.firstName}
            {' '}
            {this.props.user.lastName}</b>
          </div>
          <div style={userFieldStyles} id={`user-${this.props.user.id}-user-name`}>
            {this.props.user.userName}
          </div>
          <div style={userFieldStyles} id={`user-${this.props.user.id}-last-search`}>
            {this.props.user.lastSearch}
          </div>
          <div id={`user-${this.props.user.id}-admin`} style={userFieldStyles}>
            is admin: 
            {
              this.props.user.admin ?
              <select 
                style={selectStyles}
                onChange={(e) => {
                  this.props.handleUserChange(e, this.props.index)
                  this.props.updateUser(this.props.index)
                }} >
                <option selected name='admin' value="true">Yes</option>
                <option name='admin' value="false">No</option>
              </select>
              :
              <select
                style={selectStyles}
                onChange={(e) => {
                  this.props.handleUserChange(e, this.props.index)
                  this.props.updateUser(this.props.index)
                }} >
                <option name='admin' value="true">Yes</option>
                <option selected name='admin' value="false">No</option>
              </select>
            }
          </div>
          
          <button
            id={`delete-user-${this.props.user.id}`}
            onClick={() => this.props.deleteUser(this.props.user.id, this.props.index)}>

            Delete
          </button>
        </div>
      </div>
    )
  }
  
}

export default User