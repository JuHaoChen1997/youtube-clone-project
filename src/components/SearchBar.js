import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  updateSearchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const { fetchRequestHandler } = this.props;

    return (
      <section className='searchField'>
        <input
          className='textField'
          type='text'
          value={this.state.searchInput}
          onChange={this.updateSearchInputHandler}
        />
        <button
          onClick={() => {
            fetchRequestHandler(this.state.searchInput);
          }}
          classname='searchButton'
        >
          Search
        </button>
      </section>
    );
  }
}

export default SearchBar;
