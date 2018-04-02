import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'

import UserList from './components/UserList'
import SearchPage from './components/SearchPage'
import Signup from './components/Signup'

class App extends Component {
  state = {
    users: []
  }

  deleteUser = async (userId, index) => {
    try {
      await axios.delete(`/users/${userId}`)

      const updatedUsersList = [...this.state.users]
      updatedUsersList.splice(index, 1)

      this.setState({users: updatedUsersList})
    } catch (error) {
        console.log(`Error deleting User with ID: ${userId}`)
    }
  }

  handleUserChange = (e, index) => {
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updatedUsersList = [...this.state.users]
    const userToUpdate = updatedUsersList[index]
    userToUpdate[attributeToChange] = newValue
    
    this.setState({users: updatedUsersList})
}

  componentDidMount() {
    axios.get('/users')
      .then((response) => {
        console.log(response)
        this.setState({users: response.data})
      })
      .catch((error) => {
          console.log('Error retrieving users!')
          console.log(error)
      })
  }

  render() {
    const UserListComponent = () => (
        <UserList 
          users={this.state.users} 
          deleteUser={this.deleteUser} />
    )

    const SearchPageComponent = () => <SearchPage />

    const SignupComponent = () => <Signup />

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/users" render={UserListComponent}/>
            <Route exact path="/search" render={SearchPageComponent}/>
            <Route exact path="/signup" render={SignupComponent}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
