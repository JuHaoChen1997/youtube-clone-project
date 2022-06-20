import React from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./comments/CommentSection";
import VideoDetail from "./VideoDetail";

function ShowVideo(props) {
  const videoId = useParams().id;

  return (
    <section>
      <VideoDetail videoId={videoId} />
      <CommentSection videoId={videoId} />
    </section>
  );
}

export default ShowVideo;
