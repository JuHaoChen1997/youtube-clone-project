import Video from './Video';
import Nav from './Nav';

function VideoGallery(props) {
  const { searchedYoutubeVideos } = props;
  const videoDisplay = searchedYoutubeVideos.map((video) => {
    return <Video data={video} />;
  });

  return (
    <section>
      <Nav />
      {videoDisplay}
    </section>
  );
}

export default VideoGallery;
