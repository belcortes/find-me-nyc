import React, {Component} from 'react';

class Search extends Component {

  render() {
    return (
      <div>
        <form id='search-form'>
          <div><input name="search" type="text" placeholder="Search"/></div>
          <div><input type="submit" value="Search"/></div>
        </form>
      </div>
    );
  }
}

export default Search;