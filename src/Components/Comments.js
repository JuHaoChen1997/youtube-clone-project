import React from "react";
import CommentsDispplay from "./CommentsDisplay";

class Comments extends React.Component {
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

  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //     const { userName, userComment, comments } = this.state;

  //     this.setState({
  //       comments: [...comments, <strong>{userName}</strong>, userComment],
  //     });
  //   };

  render() {
    const { userComment, userName } = this.state;
    const { videoId, updateComments, comments } = this.props;

    return (
      <div>
        Name
        <br />
        <input
          id="text"
          name="name"
          type="text"
          value={userName}
          onChange={this.handleNameChange}
        />
        <br />
        <br />
        Comments
        <br />
        <input
          id="text"
          name="text"
          type="text"
          value={userComment}
          onChange={this.handleCommentChange}
        />
        <br />
        <br />
        <button
          onClick={() => {
            updateComments(
              videoId,
              this.state.userName,
              this.state.userComment
            );
          }}
        >
          Submit
        </button>
        <CommentsDispplay videoId={videoId} comments={comments} />
      </div>
    );
  }
}

export default Comments;
