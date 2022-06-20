import React from "react";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

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
