import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';

class Video extends React.Component {
  render() {
    console.log(this.props);
    const { title, thumbnails, videoId } = this.props.data;

    return (
      <div classname='video'>
        <p>video here {title}</p>
        <img className='thumbnails' src={thumbnails} alt={videoId} />
        <Link to={`/videos/${videoId}`}>
          <p>{title}</p>
        </Link>
      </div>
    );
  }
}

export default Video;
