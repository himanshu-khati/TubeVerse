import React from "react";
import useMostPopularVideos from "./hooks/useMostPopularVideos";
import { v4 as uuidv4 } from "uuid";

import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  useMostPopularVideos();
  const videoData = useSelector((store) => store.videos.mostPopularVideos);
  return (
    <div className="video-container w-full  flex flex-wrap ">
      {videoData &&
        videoData.map((videoData) => (
          <VideoCard key={uuidv4()} info={videoData} />
        ))}
    </div>
  );
};

export default VideoContainer;
