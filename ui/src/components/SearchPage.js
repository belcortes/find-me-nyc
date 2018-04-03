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
    this.props.handleSearchSubmit(this.state.searchInput)
	}

	render() {
		const navContainerStyles = {
			width: "80%",
    	margin:" 0 auto",
    	textAlign: "center"
		}

		return (
	    <div>
	    	<Navbar />
	    	<div style={navContainerStyles}>
	    		<h1>Search Page</h1>
		      <div>
		        <form id='search-form' onSubmit={this.handleSubmit}>
		          <input id='search-input' name="search" type="text" placeholder="Search" onChange={this.saveNewInput}/>
		          <input id='search-submit' type="submit" value="Search"/>
		        </form>
		      </div>
		      {
		      	this.state.submitted ?
		      	<ResultList results={this.props.results} /> : null
		      }
	    	</div>
	    </div>
	  )
	}
}

export default SearchPage