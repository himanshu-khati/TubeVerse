import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import useVideoInfo from "./hooks/useVideoInfo";
import Shimmer from "./Shimmer";
import { HandThumbUpIcon, EyeIcon } from "@heroicons/react/24/solid";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const videoId = searchParams.get("v");
  const videoData = useVideoInfo(videoId);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  if (!videoData) return <Shimmer />;
  const { channelTitle, title } = videoData.snippet;
  const { likeCount, viewCount } = videoData.statistics;

  return (
    <div
      className={`${
        !isMenuOpen
          ? "w-full lg:px-4 py-6"
          : "container mx-auto px-4 py-6 fixed bg-white  opacity-50 "
      }`}
    >
      <div className="flex lg:flex-row flex-col ">
        <div className="video w-full  mt-2 ">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className=" w-full aspect-video lg:w-[640px] lg:h-[360px]"
          ></iframe>

          <div className="p-2 w-full  ">
            <p className="text-slate-900  text-lg">{title}</p>

            <div className="flex w-full justify-between my-2">
              <div className=" flex  text-gray-500 font-semibold  items-center">
                {channelTitle}
              </div>
              <div className="flex   gap-2 text-gray-800">
                <div className=" flex bg-[#EAEAEA] text-sm items-center rounded-3xl px-3 py-1">
                  <HandThumbUpIcon className="w-4 h-4 me-1" />
                  {Math.round(likeCount / 1000)}K
                </div>
                <div className=" flex items-center bg-[#EAEAEA] text-sm  rounded-3xl px-3 py-1">
                  <EyeIcon className="w-4 h-4 me-1" />
                  {Math.round(viewCount / 1000)}K
                </div>
              </div>
            </div>
          </div>
        </div>
        <LiveChat />
      </div>

      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
