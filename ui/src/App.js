import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'

import UserPage from './components/UserPage'
import SearchPage from './components/SearchPage'

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
    const UserPageComponent = () => (
        <UserPage users={this.state.users} deleteUser={this.deleteUser} />
    )

    const SearchPageComponent = () => <SearchPage />

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/users" render={UserPageComponent}/>
            <Route exact path="/search" render={SearchPageComponent}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
