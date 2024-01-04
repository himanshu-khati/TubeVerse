import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const SearchCard = ({ cardInfo }) => {
  const { videoId } = cardInfo.id;
  const { title, channelTitle, description, thumbnails, publishedAt } =
    cardInfo.snippet;
  const { url } = thumbnails.high;
  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="w-full flex-col sm:flex-row flex p-2 ">
        <div className="thumbnail w-full sm:w-6/12  lg:w-5/12 flex justify-center">
          <img
            src={url}
            alt="thumbnail"
            className="w-full h-[172px]  lg:w-[500px] lg:h-[240px] rounded-t-3xl sm:rounded-xl object-cover"
          />
        </div>
        <div className="details w-full sm:w-6/12 lg:w-7/12 bg-[#F0F0F0] sm:bg-white rounded-b-3xl sm:rounded-none  p-2">
          <p className="  sm:text-lg font-normal  text-gray-900">{title}</p>
          <p className="text-gray-500 text-sm">
            1M views &#9679; &nbsp;
            <span>
              {(
                Math.abs(new Date(publishedAt) - new Date()) /
                (60 * 60 * 24 * 1000)
              ).toFixed(1)}{" "}
              days ago
            </span>
          </p>
          <p className="text-gray-500 flex text-sm sm:text-base items-center my-3">
            {channelTitle}
            <CheckBadgeIcon className="h-5 w-5 text-blue-600 ms-1" />
          </p>
          <p className="text-sm sm:block hidden text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
