import Video from "./Video";

function VideoGallery(props) {
  const { searchedYoutubeVideos } = props;
  const videoDisplay = searchedYoutubeVideos.map((video) => {
    return <Video data={video} />;
  });

  return <section>{videoDisplay}</section>;
}

export default VideoGallery;
