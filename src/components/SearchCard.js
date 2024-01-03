import React from "react";
import { Link } from "react-router-dom";
const SearchCard = ({ cardInfo }) => {
  const { videoId } = cardInfo.id;
  const { title, channelTitle, description, thumbnails, publishedAt } =
    cardInfo.snippet;
  const { url } = thumbnails.high;
  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="w-full flex p-2 ">
        <div className="thumbnail  w-5/12 flex justify-center">
          <img
            src={url}
            alt="thumbnail"
            className="w-[500px] h-[240px] rounded-xl object-cover"
          />
        </div>
        <div className="details w-7/12  p-2">
          <p className="text-lg font-normal  text-gray-900">{title}</p>
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
          <p className="text-gray-500 flex items-center my-3">
            {channelTitle}
            <span className="material-icons ms-1 text-blue-700 ">
              check_circle
            </span>
          </p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchCard;
