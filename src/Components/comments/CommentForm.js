import React from 'react'

class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userComment: '',
    }
  }

  handleNameChange = (event) => {
    const { value } = event.target
    this.setState({ userName: value })
  }

  handleCommentChange = (event) => {
    const { value } = event.target
    this.setState({ userComment: value })
  }

  clearInput = () => {
    this.setState({ userName: '' })
    this.setState({ userComment: '' })
  }

  render() {
    const { userComment, userName } = this.state
    const { updateCommentHandler } = this.props

    return (
      <div>
        <hr />
        Name
        <br />
        <input
          id='text'
          name='name'
          type='text'
          placeholder='Name...'
          value={userName}
          onChange={this.handleNameChange}
        />
        <br />
        <br />
        Comments
        <br />
        <input
          id='text'
          name='text'
          type='text'
          placeholder='...'
          value={userComment}
          onChange={this.handleCommentChange}
        />
        <br />
        <br />
        <button
          onClick={() => {
            updateCommentHandler(userName, userComment)
            this.clearInput(userName, userComment)
          }}
        >
          Submit
        </button>
      </div>
    )
  }
}

export default CommentForm
