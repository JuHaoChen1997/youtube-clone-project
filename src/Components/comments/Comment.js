import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { userName, comment, timeStamp } = this.props.comment;
    const { index, deleteCommentHandler } = this.props;

    return (
      <section>
        <h4>Post Time: {timeStamp}</h4>
        <h4>UserName: {userName}</h4>
        <p>Comment: {comment}</p>
        <button
          onClick={() => {
            deleteCommentHandler(index);
          }}
        >
          Delete
        </button>
      </section>
    );
  }
}

export default Comment;
