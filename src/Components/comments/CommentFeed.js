import Comment from "./Comment";

function CommentFeed(props) {
  const { comments, deleteCommentHandler, editCommentHandler } = props;

  const displayComments = comments.map((comment, index) => {
    return (
      <Comment
        comment={comment}
        index={index}
        deleteCommentHandler={deleteCommentHandler}
        editCommentHandler={editCommentHandler}
      />
    );
  });
  return <section>{displayComments}</section>;
}

export default CommentFeed;
