import React from "react";
import "./SearchBar.css";
import Modal from "./Modal";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      videoNums: "10",
      show: false,
    };
  }

  //Clear the user input after clicked search button
  clearInput = () => {
    this.setState({ searchInput: "" });
  };

  //update the user typed search input into the state
  updateSearchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  //update the user typed video numbers into the state, video number means how many
  //video gonna be returned from api fetch
  updateVideoNumHandler = (event) => {
    this.setState({
      videoNums: event.target.value,
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  closeButton = () => {
    this.setState({ show: false });
  };

  //check user typed search input doesn't exceed character limit
  checkSearchInput = () => {
    return this.state.searchInput.length >= 20;
  };

  render() {
    const { fetchRequestHandler } = this.props;

    return (
      <section className="searchField">
        <input
          className="textField"
          type="text"
          placeholder="Search..."
          value={this.state.searchInput}
          onChange={this.updateSearchInputHandler}
          autofill={true}
        />
        <button
          type="button"
          className="searchButton"
          onClick={() => {
            if (this.checkSearchInput()) {
              this.showModal();
            } else {
              fetchRequestHandler(this.state.searchInput, this.state.videoNums);
              this.clearInput();
            }
          }}
        >
          Search
        </button>
        <label id="videoNums" htmlFor="searchNum">
          Video Nums:
        </label>
        <input
          type="number"
          id="searchNum"
          name="searchNum"
          min="5"
          max="30"
          value={this.state.videoNums}
          onChange={this.updateVideoNumHandler}
        />
        <Modal show={this.state.show} closeButton={this.closeButton} />
      </section>
    );
  }
}

export default SearchBar;
