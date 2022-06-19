import Comment from './Comment'

function CommentFeed(props) {
  const { comments, deleteCommentHandler, editComment } = props

  const displayComments = comments.map((comment, index) => {
    return (
      <Comment
        comment={comment}
        index={index}
        deleteCommentHandler={deleteCommentHandler}
        editComment={editComment}
      />
    )
  })
  return <section>{displayComments}</section>
}

export default CommentFeed
