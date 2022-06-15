<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import YouTube from 'react-youtube'
=======
import React from 'react';
import YouTube from 'react-youtube';
import Nav from './Nav';
>>>>>>> 8cf19fe1b41a95ff00e89fc998104321c5c8b0bc

class ShowVideo extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userComment: '',
      comments: [],
    }
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
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
      comments: [...comments, <strong>{userName}</strong>, userComment],
    })
  }

  render() {
    const { userComment, userName, comments } = this.state

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
<<<<<<< HEAD
        <YouTube videoId='eX2qFMC8cFo' opts={opts} onReady={this._onReady} />

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
            <p key={ind}>
              {comment}
              <br />
            </p>
          ))}
        </form>
      </div>
    )
=======
        <Nav />
        <YouTube videoId='eX2qFMC8cFo' opts={opts} onReady={this._onReady} />
      </div>
    );
>>>>>>> 8cf19fe1b41a95ff00e89fc998104321c5c8b0bc
  }
=======
import React from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import Comments from "./Comments";

function ShowVideo(props) {
  const videoId = useParams().id;
  console.log("show video", props);
  const { comments, updateComments } = props;

  return (
    <section>
      {/* <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe> */}
      <Youtube videoId={videoId} />
      <Comments
        videoId={videoId}
        updateComments={updateComments}
        comments={comments}
      />
    </section>
  );
>>>>>>> 97a3d64ad5ca1df24db6d90043fefa97798d5532
}

export default ShowVideo
