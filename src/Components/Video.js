import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

class Video extends React.Component {
  render() {
    console.log(this.props);
    const { title, thumbnails, videoId } = this.props.data;

    return (
      <div classname="video">
        <Link to={`/videos/${videoId}`}>
          <img className="thumbnails" src={thumbnails} alt={videoId} />
          <p>{title}</p>
        </Link>
      </div>
    );
  }
}

export default Video;
