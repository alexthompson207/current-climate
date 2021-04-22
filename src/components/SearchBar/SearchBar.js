import './searchBar.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          name='search'
          aria-label='Search Articles by Title'
          value={this.state.searchTerm}
        />
      </form>
    )
  }
}

export default SearchBar;