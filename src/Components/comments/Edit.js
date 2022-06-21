import React from "react";

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
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.inputHandler}
        />
        <button
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
