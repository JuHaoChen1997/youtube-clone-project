import React from "react";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { userName, comment, timeStamp } = this.props.comment;
    return (
      <section>
        <h4>Post Time: {timeStamp}</h4>
        <h4>UserName: {userName}</h4>
        <p>Comment: {comment}</p>
      </section>
    );
  }
}

export default Comment;
