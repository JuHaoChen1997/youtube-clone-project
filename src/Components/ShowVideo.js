import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./comments/CommentSection";
import VideoDetail from "./VideoDetail";

//Get the video id from the url, and pass it to VideoDetail, and CommentSection,
//Because useParams only apply for functional component. So use ShowVideo Component
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
