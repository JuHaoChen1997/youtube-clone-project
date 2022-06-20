import React from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import CommentSection from "./comments/CommentSection";

function ShowVideo(props) {
  const videoId = useParams().id;

  return (
    <section>
      <Youtube videoId={videoId} />
      <CommentSection videoId={videoId} />
    </section>
  );
}

export default ShowVideo;
