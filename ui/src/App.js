import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {

  componentWillMount() {

    axios.get('/users')
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
            console.log('Error retrieving users!')
            console.log(error)
        })
        
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
