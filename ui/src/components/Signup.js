import React from 'react'
    
const Signup = (props) => {

  return (
    <div>
      <h2>Signup Page</h2>
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
    </div>
  )
}

export default Signup