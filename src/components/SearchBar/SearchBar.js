import './searchBar.css';
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = (event) => {
    this.props.search(event);
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <form className='search-form'>
        <input
          className='search-input'
          type='text'
          name='search'
          aria-label='Search Articles by Title'
          value={this.state.searchTerm}
          onChange={event => this.handleSearch(event)}
        />
      </form>
    )
  }
}

export default SearchBar;