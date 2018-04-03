import React, { Component } from 'react'

import ResultList from './ResultList'
    
class SearchPage extends Component {
	state = {
		submitted: false
	}

	handleSubmit = (e) => {
		e.preventDefault();
    this.setState({'submitted': true });
	}

	render() {
		return (
	    <div>
	      <h1>Search Page</h1>
	      <div>
	        <form id='search-form' onSubmit={this.handleSubmit}>
	          <input id='search-input' name="search" type="text" placeholder="Search"/>
	          <input id='search-submit' type="submit" value="Search"/>
	        </form>
	      </div>
	      {
	      	this.state.submitted ?
	      	<ResultList /> : null
	      }
	    </div>
	  )
	}
}

export default SearchPage