import React from "react";
import Edit from "./Edit";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { edit: false };
  }

  editHandler = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    const { userName, comment, timeStamp } = this.props.comment;
    const { index, deleteCommentHandler, editCommentHandler } = this.props;

    return (
      <section>
        <h4>Post Time: {timeStamp}</h4>
        <h4>UserName: {userName}</h4>
        <p>Comment: {comment}</p>
        <button
          className="commentButton"
          onClick={() => {
            deleteCommentHandler(index);
          }}
        >
          Delete
        </button>
        <button className="commentButton" onClick={this.editHandler}>
          {this.state.edit ? "Close Edit" : "Edit"}
        </button>
        {this.state.edit ? (
          <Edit index={index} editCommentHandler={editCommentHandler} />
        ) : null}
      </section>
    );
  }
}

export default Comment;
