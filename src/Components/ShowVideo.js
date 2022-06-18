import React from "react";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";
import Comments from "./Comments";
import CommentSection from "./comments/CommentSection";

function ShowVideo(props) {
  const videoId = useParams().id;
  console.log("show video", props);
  const { comments, updateComments } = props;

  return (
    <section>
      {/* <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe> */}
      <Youtube videoId={videoId} />
      {/* <Comments
        videoId={videoId}
        updateComments={updateComments}
        comments={comments}
      /> */}
      <CommentSection videoId={videoId} />
    </section>
  );
}

export default ShowVideo;
