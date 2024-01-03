import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { title, channelTitle, thumbnails } = snippet;
  return (
    <div className="w-4/12 ">
      <Link to={`/watch?v=${id}`}>
        <div className="m-2 ">
          <div className="thumbnail w-full ">
            <img
              src={thumbnails.high.url}
              alt=""
              className="w-full h-[172px]  rounded-2xl object-cover"
            />
          </div>
          <div className="details flex flex-col py-2 px-3">
            <p className="font-semibold  text-gray-800">
              {title.substr(0, 35)}...
            </p>
            <p className="text-gray-500">
              {channelTitle} &bull;{"  "}
              <span>
                {Math.round(((statistics.viewCount / 1000000) * 100) / 100)}M
                Views
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
