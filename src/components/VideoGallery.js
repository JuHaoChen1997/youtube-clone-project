import Video from './Video';
import './VideoGallery.css';

function VideoGallery(props) {
  const { searchedYoutubeVideos } = props;
  const videoDisplay = searchedYoutubeVideos.map((video) => {
    return <Video data={video} />;
  });

  return <section className='videoDisplay'>{videoDisplay}</section>;
}

export default VideoGallery;
