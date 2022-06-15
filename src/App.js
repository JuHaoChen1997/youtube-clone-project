import './App.css'
import React from 'react'
import About from './components/About'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userComment: '',
      comments: [],
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

  handleSubmit = (event) => {
    event.preventDefault()
    const { userName, userComment, comments } = this.state

    this.setState({
      comments: [...comments, (<strong>{userName}</strong>), userComment],
    })
  }

  render() {
    const { userComment, userName, comments } = this.state
    console.log(userName)
    return (
      <div className='App'>
        <main className='main'>
          <div className='navbar'>
            <h1 className='youtube-logo'>Youtube *Logo Goes Here*</h1>
            <h2 className='home-button'>Home</h2>
            <h2 className='about-button'>About</h2>
          </div>
          <About />
          <form onSubmit={this.handleSubmit}>
            Name
            <br />
            <input
              id='text'
              name='name'
              type='text'
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
              value={userComment}
              onChange={this.handleCommentChange}
            />
            <br />
            <br />
            <button>Submit</button>
            {comments.map((comment, ind) => (
              <p key={ind}>{comment}<br/></p>
            ))}
          </form>
        </main>
      </div>
    )
  }
}

export default App
