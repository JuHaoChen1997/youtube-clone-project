import React from 'react'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
    }
  }

  updateSearchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const { fetchRequestHandler } = this.props

    return (
      <section>
        <input
          type='text'
          placeholder='Search...'
          value={this.state.searchInput}
          onChange={this.updateSearchInputHandler}
        />
        <button
          onClick={() => {
            fetchRequestHandler(this.state.searchInput)
          }}
        >
          Search
        </button>
      </section>
    )
  }
}

export default SearchBar
