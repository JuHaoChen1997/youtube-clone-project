import React from "react";
import "./Edit.css";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  /**
   *
   * change the state into the user's input edit message
   */
  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  //clear the the state's input value
  clearInput = () => {
    this.setState({ input: "" });
  };

  render() {
    const { index, editCommentHandler } = this.props;

    return (
      <div className="editSection">
        <input
          className="edit"
          type="text"
          value={this.state.input}
          onChange={this.inputHandler}
        />
        <button
          className="editButton"
          onClick={() => {
            editCommentHandler(index, this.state.input);
            this.clearInput();
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Edit;
