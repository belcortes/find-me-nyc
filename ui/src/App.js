import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'

import UserPage from './components/UserPage'
import SearchPage from './components/SearchPage'

class App extends Component {
  state = {
    users: []
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
        <UserPage users={this.state.users} />
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
