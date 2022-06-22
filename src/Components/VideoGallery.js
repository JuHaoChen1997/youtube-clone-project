import React from "react";
import Video from "./Video";
import "./VideoGallery.css";
import SwitchPage from "./SwitchPage";

class VideoGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNum: 1,
    };
  }

  /**
   *The page number will be updated according to the operation of go to previous page or
   *go to next page.
   * @param {String} operation - operation of go to previous page or next page
   * @param {Number} videoListArrayLength - the length of total videos
   */
  updatePageNum = (operation, videoListArrayLength) => {
    let currentPage = this.state.pageNum;
    if (operation === "prevPage") {
      if (currentPage - 1 >= 1) {
        currentPage--;
      }
    } else if (operation === "nextPage") {
      if (currentPage * 10 < videoListArrayLength) {
        currentPage++;
      }
    }

    this.setState({ pageNum: currentPage });
  };

  render() {
    const { searchedYoutubeVideos } = this.props;

    const videoDisplay = searchedYoutubeVideos
      .filter((video, index) => {
        return (
          index >= (this.state.pageNum - 1) * 10 &&
          index <= this.state.pageNum * 10 - 1
        );
      })
      .map((video, index) => {
        return <Video data={video} key={index} />;
      });

    return (
      <>
        {/* If no search result, display the error */}
        <section className="noSearch">
          {searchedYoutubeVideos.length === 0 ? (
            <strong className="strong">
              <p>No videos searched yet!</p>
            </strong>
          ) : null}
        </section>
        <section className="videoDisplay">{videoDisplay}</section>
        {videoDisplay.length > 0 ? (
          <SwitchPage
            updatePageNum={this.updatePageNum}
            videoListArrayLength={searchedYoutubeVideos.length}
            pageNum={this.state.pageNum}
          />
        ) : null}
      </>
    );
  }
}

export default VideoGallery;
