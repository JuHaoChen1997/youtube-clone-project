import React from 'react'
import './SearchBar.css'
// import Modal from './Modal'

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchInput: '',
      // show: false,
    }
  }

  updateSearchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  // showModal = () => {
  //   this.setState({ show: true })
  // }

  // closeButton = () => {
  //   this.setState({ show: false })
  // }
  render() {
    const { fetchRequestHandler } = this.props

    return (
      <section className='searchField'>
        <input
          className='textField'
          type='text'
          value={this.state.searchInput}
          onChange={this.updateSearchInputHandler}
        />
        <button
          type='button'
          className='searchButton'
          onClick={() => {
            fetchRequestHandler(this.state.searchInput)
          }}
        >
          Search
        </button>
        {/* <button onClick={() => this.showModal()}>Show Modal</button>
        <Modal show={this.state.show} closeButton={this.closeButton} /> */}
      </section>
    )
  }
}

export default SearchBar
