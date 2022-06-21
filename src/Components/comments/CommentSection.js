import React from "react";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      edit: true,
    };
  }

  /**
   * Returns a string represent the formated time when the comment was made
   * @returns {String} a string represent the formated time when the comment was made
   */
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

  /**
   * Update the state with user posted comments
   * @param {String} userName -name of the user
   * @param {String} comment -user typed comment
   */
  updateCommentHandler = (userName, comment) => {
    if (userName !== "" && comment !== "") {
      const timeStamp = this.getTime();
      const userComment = { userName, comment, timeStamp };
      const newComments = [...this.state.comments, userComment];
      this.setState({ comments: newComments });
    }
  };

  /**
   * Delete the user's comment when delete button on the comment was clicked, the index
   * tells which element inside the comments array need to delete
   * @param {number} index -the index of the user's comment on the comment array
   */
  deleteCommentHandler = (index) => {
    const copyOfComments = this.state.comments;
    copyOfComments.splice(index, 1);
    this.setState({ comments: copyOfComments });
  };

  /**
   * Edit the user's comment when edit button on the comment was clicked, the index
   * tells which element inside the comments array need to edit, editComment is the user
   * typed new comment that used to replace the previous comment
   * @param {number} index -the index of the user's comment on the comment array
   * @param {String} editComment -the comment user want to replace the previous comment
   */
  editCommentHandler = (index, editComment) => {
    const copyOfComments = this.state.comments;
    const selectedComment = copyOfComments[index];
    selectedComment.comment = editComment;

    this.setState({ comments: copyOfComments });
  };

  /**
   *Grab the data from local storage, to see if there is any pre-existing comments of the
   video.
   */
  componentDidMount() {
    const commentsAtLocalStorage = JSON.parse(
      window.localStorage.getItem(this.props.videoId)
    );

    if (commentsAtLocalStorage !== null) {
      this.setState({ comments: commentsAtLocalStorage });
    }
  }

  /**
   * Store the comments at the state into the local storage, so even if the website
   * was closed, comments still exist in the browser
   */
  componentDidUpdate() {
    window.localStorage.setItem(
      this.props.videoId,
      JSON.stringify(this.state.comments)
    );
  }

  render() {
    const { comments } = this.state;

    return (
      <section className="commentSection">
        <h2 className="numOfComments">{comments.length} Comments</h2>
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
