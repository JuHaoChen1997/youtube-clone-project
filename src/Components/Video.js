import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

class Video extends React.Component {
  render() {
    const { title, thumbnails, videoId } = this.props.data;

    // Display videos on the video gallery
    return (
      <div className="video">
        <Link className="a" to={`/videos/${videoId}`}>
          <img className="thumbnails" src={thumbnails} alt={videoId} />
          <p className="vidName">{title}</p>
        </Link>
      </div>
    );
  }
}

export default Video;
