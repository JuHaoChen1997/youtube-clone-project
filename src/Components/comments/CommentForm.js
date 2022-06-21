import React from "react";
import "./CommentForm.css";

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userComment: "",
    };
  }

  /**
   * Update the state with user input username
   */
  handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ userName: value });
  };

  /**
   * Update the state with user input comment
   */
  handleCommentChange = (event) => {
    const { value } = event.target;
    this.setState({ userComment: value });
  };

  /**
   * Clear the user's input on name and comment after user clicked on Submit button
   */
  clearInput = () => {
    this.setState({
      userName: "",
      userComment: "",
    });
  };

  render() {
    const { userComment, userName } = this.state;
    const { updateCommentHandler } = this.props;

    return (
      <section className="commentForm">
        <div>
          <label for="name" className="name">
            Name{" "}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name..."
            value={userName}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <label for="comment" className="comment">
            Comment{" "}
          </label>
          <input
            id="comment"
            name="comment"
            type="text"
            placeholder="..."
            value={userComment}
            onChange={this.handleCommentChange}
          />
        </div>
        <button
          className="commentButton"
          onClick={() => {
            updateCommentHandler(userName, userComment);
            this.clearInput();
          }}
        >
          Submit
        </button>
      </section>
    );
  }
}

export default CommentForm;
