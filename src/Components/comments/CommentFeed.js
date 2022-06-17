function CommentFeed(props) {
  const { comments } = props

  const displayComments = comments.map((comment) => {
    return (
      <div>
        <h4>UserName: {comment.userName}</h4>
        <p>Comment: {comment.comment}</p>
      </div>
    )
  })
  return <section>{displayComments}</section>
}

export default CommentFeed
