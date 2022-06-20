function CommentsDisplay(props) {
  const { videoId, comments, deleteComments } = props
  const displayComments = comments
    .filter((comment) => {
      return comment.videoId === videoId
    })
    .map((comment) => {
      return (
        <div>
          <h4>{comment.userName}</h4>
          <p>{comment.userComment}</p>
          <button
            onClick={() =>
              deleteComments(comment.userName, comment.userComment)
            }
          >
            Delete
          </button>
        </div>
      )
    })
  return <section>{displayComments}</section>
}

export default CommentsDisplay
