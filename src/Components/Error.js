import React from "react";
import { Link } from "react-router-dom";
import PathErrorModal from "./PathErrorModal";

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
        <p>404 Not Found!</p>
        <Link to="/">
          <p>Go back Home</p>
        </Link>
        <PathErrorModal show={this.state.show} closeButton={this.closeButton} />
      </>
    );
  }
}

export default Error;
