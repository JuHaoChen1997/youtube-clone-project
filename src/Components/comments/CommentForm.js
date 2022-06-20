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

  handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ userName: value });
  };

  handleCommentChange = (event) => {
    const { value } = event.target;
    this.setState({ userComment: value });
  };

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
          <label for="name">Name </label>
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
          <label for="comment">Comment </label>
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
