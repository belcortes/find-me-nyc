import React, {Component} from 'react';

class Search extends Component {

  render() {
    return (
      <div>
        <form id='search-form'>
          <div><input id='search-input' name="search" type="text" placeholder="Search"/></div>
          <div><input id='search-submit' type="submit" value="Search"/></div>
        </form>
      </div>
    );
  }
}

export default Search;