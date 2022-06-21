import React from "react";
import Edit from "./Edit";
import "./Comment.css";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { edit: false };
  }

  /**
   * Edit the previous comment
   */
  editHandler = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  render() {
    const { userName, comment, timeStamp } = this.props.comment;
    const { index, deleteCommentHandler, editCommentHandler } = this.props;

    return (
      <section className="commentBox">
        <h4>
          <span>Post Time:</span> {timeStamp}
        </h4>
        <h4>
          <span>UserName:</span> {userName}
        </h4>
        <p>
          <span>Comment: </span>
          {comment}
        </p>
        <button
          className="deleteButton"
          onClick={() => {
            deleteCommentHandler(index);
          }}
        >
          Delete
        </button>
        <button className="editButton" onClick={this.editHandler}>
          {this.state.edit ? "Close" : "Edit"}
        </button>
        {this.state.edit ? (
          <Edit index={index} editCommentHandler={editCommentHandler} />
        ) : null}
      </section>
    );
  }
}

export default Comment;
