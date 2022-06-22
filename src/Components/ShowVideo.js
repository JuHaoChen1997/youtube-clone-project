import React from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './comments/CommentSection';
import VideoDetail from './VideoDetail';

function ShowVideo(props) {
  const videoId = useParams().id;

  return (
    <section id='videoSection'>
      <VideoDetail videoId={videoId} id='videoPlayer' />
      <CommentSection videoId={videoId} id='commentsSection' />
    </section>
  );
}

export default ShowVideo;
