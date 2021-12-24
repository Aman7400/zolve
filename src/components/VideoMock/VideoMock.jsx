import React from "react";
// import { Video } from "reactjs-media";
import ReactPlayer from "react-player";

const VideoMock = () => {
  return (
    <div>
      <video width="315" height="555" autoplay playsInline loop muted>
        <source src="/assets/hero/home-ui.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoMock;
