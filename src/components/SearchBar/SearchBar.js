import './searchBar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <label htmlFor='search' className='search-label'>Search by Title:</label>
        <input
          className='search-input'
          type='text'
          name='search'
          placeholder='Climate change'
          aria-label='Search Articles by Title'
          value={this.state.searchTerm}
          onChange={event => this.handleSearch(event)}
        />
      </form>
    )
  }
}

export default SearchBar;

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};