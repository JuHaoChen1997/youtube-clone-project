import React from "react";
import { Link } from "react-router-dom";

class Video extends React.Component {
  render() {
    console.log(this.props);
    const { title, thumbnails, videoId } = this.props.data;

    return (
      <div>
        <p>video here {title}</p>
        <img src={thumbnails} alt={videoId} />
        <Link to={`/videos/${videoId}`}>
          <p>{title}</p>
        </Link>
      </div>
    );
  }
}

export default Video;
