import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
    
class Signup extends Component {
  state = {
    username: '',
    redirectToSearchPage: false
  }

  saveUserInput = (e) => {
    const username = e.target.value;
    this.setState({username})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.users.forEach((user) => {
      if(user.userName === this.state.username) {
        console.log('matching!')
        this.setState({redirectToSearchPage: true})
      }
    })
  }

  render() {
    if(this.state.redirectToSearchPage) {
      return <Redirect to="/search" />
    }

    return (
      <div>
        <h2>Login</h2>
          <form onSubmit={this.handleSubmit} id="login-form">
            <div>
              <label htmlFor="userName">Username </label>
              <input
                  id="login-user-name"
                  type="text"
                  name="userName"
                  onChange={this.saveUserInput} />
            </div>

            <div>
              <input
                  id="user-login-submit"
                  type="submit"
                  value="Login" />
            </div>
          </form>
      </div>
    )
  }
  
}

export default Signup