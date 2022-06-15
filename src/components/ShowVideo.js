import React from 'react'
import YouTube from 'react-youtube'

class ShowVideo extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      userComment: '',
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  handleUserComment = (event) => {
    console.log(event)
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

    return (
      <div>
        <YouTube videoId='eX2qFMC8cFo' opts={opts} onReady={this._onReady} />

        <form onSubmit={handleSubmit}>
          <input
            id='text'
            name='text'
            type='text'
            value={userInput}
            onChange={this.handleUserName}
          />
          <input
            id='text'
            name='text'
            type='text'
            value={userComment}
            onChange={this.handleUserComment}
          />
          {userInput}
          {userComment}
        </form>
      </div>
    )
  }
}

export default ShowVideo
