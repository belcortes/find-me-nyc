import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom";
    
class Signup extends Component {
  state = {
    user: {},
    redirectToSearchPage: false
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createUser(this.state.user)

    this.setState({redirectToSearchPage: true})
  }

  handleChange = (e) => {
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updatedUser = { ...this.state.user }
    updatedUser[attributeToChange] = newValue
    this.setState({ user: updatedUser })
  }

  render() {
    // found this redirect trick online
    if(this.state.redirectToSearchPage) {
      return <Redirect to="/search" />
    }

    return (
      <div>
        <h2>Signup</h2>
          <form onSubmit={this.handleSubmit} id="signup-form">
            <div>
              <label htmlFor="userName">Username </label>
              <input
                  id="new-user-user-name"
                  type="text"
                  name="userName"
                  onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="firstName">First Name </label>
              <input
                  id="new-user-first-name"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name </label>
              <input
                  id="new-user-last-name"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange} />
            </div>

            <div>
              <input
                  id="new-user-submit"
                  type="submit"
                  value="Create" />
            </div>
          </form>
          <Link to="/login">or login if you already have an account</Link>
      </div>
    )
  }
  
}

export default Signup