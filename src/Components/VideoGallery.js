import Video from './Video';
import './VideoGallery.css';

function VideoGallery(props) {
  const { searchedYoutubeVideos } = props;
  const videoDisplay = searchedYoutubeVideos.map((video) => {
    return <Video data={video} />;
  });

  return (
    <>
      <section className='noSearch'>
        {searchedYoutubeVideos.length === 0 ? (
          <strong className='strong'>
            <p>No videos searched yet!</p>
          </strong>
        ) : null}
      </section>
      <section className='videoDisplay'>{videoDisplay}</section>
    </>
  );
}

export default VideoGallery;
