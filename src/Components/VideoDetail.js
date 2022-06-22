import React from "react";
import Youtube from "react-youtube";
import { Navigate } from "react-router-dom";

class VideoDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      totalResults: 0,
      videoTitle: "",
      publishedAt: "",
      error: false,
    };
  }

  //Get video information by fetching the api with video id
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.videoId}&key=${process.env.REACT_APP_API_KEY}&part=snippet,status`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        const totalResults = data.pageInfo.totalResults;
        let videoTitle = "";
        let publishedAt = "";
        let error = true;
        if (totalResults !== 0) {
          videoTitle = data.items[0].snippet.title;
          publishedAt = data.items[0].snippet.publishedAt;
          error = false;
        }

        this.setState({
          totalResults,
          videoTitle,
          publishedAt,
          error,
        });
      });
  }

  render() {
    const { videoId } = this.props;

    return (
      <section>
        <h3>Title: {this.state.videoTitle}</h3>
        <h4>Publsihed Date: {this.state.publishedAt}</h4>
        {/* If there is an error of the video id, go to the error page */}
        {this.state.error && <Navigate to="/error" replace={true} />}
        <Youtube videoId={videoId} />
      </section>
    );
  }
}

export default VideoDetail;
