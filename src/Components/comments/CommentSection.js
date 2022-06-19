import React from "react";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  getTime = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const today = new Date();

    const weekday = weekdays[today.getDay()];
    const year = today.getFullYear();
    const month = months[today.getMonth()];
    const date = today.getDate();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    return `${weekday} ${month}-${date}-${year} ${hour}:${minute}:${second}`;
  };

  updateCommentHandler = (userName, comment) => {
    const timeStamp = this.getTime();
    const userComment = { userName, comment, timeStamp };
    const newComments = [...this.state.comments, userComment];
    this.setState({ comments: newComments });
  };

  deleteCommentHandler = (index) => {
    const copyOfComments = this.state.comments;
    copyOfComments.splice(index, 1);
    this.setState({ comments: copyOfComments });
  };

  editCommentHandler = (index, editComment) => {
    const copyOfComments = this.state.comments;
    const selectedComment = copyOfComments[index];
    selectedComment.comment = editComment;

    this.setState({ comments: copyOfComments });
  };

  componentDidMount() {
    const commentsAtLocalStorage = JSON.parse(
      window.localStorage.getItem(this.props.videoId)
    );
    if (commentsAtLocalStorage !== null) {
      this.setState({ comments: commentsAtLocalStorage });
    }
  }

  componentDidUpdate() {
    window.localStorage.setItem(
      this.props.videoId,
      JSON.stringify(this.state.comments)
    );
  }

  render() {
    const { comments } = this.state;
    return (
      <section>
        <CommentForm updateCommentHandler={this.updateCommentHandler} />
        <CommentFeed
          comments={comments}
          deleteCommentHandler={this.deleteCommentHandler}
          editCommentHandler={this.editCommentHandler}
        />
      </section>
    );
  }
}

export default CommentSection;
