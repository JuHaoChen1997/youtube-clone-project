import React from 'react'
import CommentForm from './CommentForm'
import CommentFeed from './CommentFeed'

class CommentSection extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
    }
  }

  updateCommentHandler = (userName, comment) => {
    const userComment = { userName, comment }
    const newComments = [...this.state.comments, userComment]
    window.localStorage.setItem(this.props.videoId, JSON.stringify(newComments))
    this.setState({ comments: newComments })
  }

  componentDidMount() {
    const commentsAtLocalStorage = JSON.parse(
      window.localStorage.getItem(this.props.videoId)
    )
    if (commentsAtLocalStorage !== null) {
      this.setState({ comments: commentsAtLocalStorage })
    }
  }

  render() {
    const { comments } = this.state
    return (
      <section>
        <CommentForm updateCommentHandler={this.updateCommentHandler} />
        <CommentFeed comments={comments} />
      </section>
    )
  }
}

export default CommentSection
