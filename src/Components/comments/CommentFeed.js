import Comment from "./Comment";

function CommentFeed(props) {
  const { comments } = props;

  const displayComments = comments.map((comment, index) => {
    return <Comment comment={comment} />;
  });
  return <section>{displayComments}</section>;
}

export default CommentFeed;
