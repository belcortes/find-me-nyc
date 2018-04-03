import React, { Component } from 'react'

import ResultList from './ResultList'
import Navbar from './Navbar'
    
class SearchPage extends Component {
	state = {
		submitted: false,
		searchInput: ''
	}

	saveNewInput = (e) => {
		const searchInput = e.target.value;
		this.setState({searchInput})
	}

	handleSubmit = (e) => {
		e.preventDefault();
    this.setState({'submitted': true });
    this.props.searchSubmit(this.state.searchInput)
	}

	render() {
		return (
	    <div>
	    	<Navbar />
	      <h1>Search Page</h1>
	      <div>
	        <form id='search-form' onSubmit={this.handleSubmit}>
	          <input id='search-input' name="search" type="text" placeholder="Search" onChange={this.saveNewInput}/>
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