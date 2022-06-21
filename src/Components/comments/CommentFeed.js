import Comment from "./Comment";
import "./CommentFeed.css";

function CommentFeed(props) {
  const { comments, deleteCommentHandler, editCommentHandler } = props;

  const displayComments = comments.map((comment, index) => {
    return (
      <Comment
        comment={comment}
        index={index}
        deleteCommentHandler={deleteCommentHandler}
        editCommentHandler={editCommentHandler}
        key={index}
      />
    );
  });
  return (
    <section className="commentDisplayContainer">{displayComments}</section>
  );
}

export default CommentFeed;
