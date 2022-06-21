import React from "react";
import { Link } from "react-router-dom";
import PathErrorModal from "./PathErrorModal";
import "./Error.css";

//Show user the url path is not correct
class Error extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  closeButton = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <p className="errorMessage">404 Not Found!</p>
        <Link to="/">
          <p className="goBackToHomePage">Go back Home</p>
        </Link>
        <PathErrorModal show={this.state.show} closeButton={this.closeButton} />
      </>
    );
  }
}

export default Error;
