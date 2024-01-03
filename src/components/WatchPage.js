import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import useVideoInfo from "./hooks/useVideoInfo";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  const videoId = searchParams.get("v");
  const videoData = useVideoInfo(videoId);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  if (!videoData) return <p>shimmer ui...</p>;
  const { channelTitle, title } = videoData.snippet;
  const { likeCount, viewCount } = videoData.statistics;

  return (
    <div
      className={`${
        !isMenuOpen
          ? "w-full px-4 py-6"
          : "container mx-auto px-4 py-6 fixed bg-white  opacity-50 "
      }`}
    >
      <div className="flex ">
        <div className="video  w-full  mt-2 ">
          <iframe
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
          <div className="p-2 w-full ">
            <p className="text-slate-900 font-semibold text-lg">{title}</p>

            <div className="flex w-full justify-between my-2">
              <div className="w-6/12 flex  text-gray-500 font-semibold  items-center">
                {channelTitle}
              </div>
              <div className="flex w-4/12 gap-2 text-gray-800">
                <div className=" flex bg-[#EAEAEA]  items-center rounded-3xl px-3 py-1">
                  <span className="material-icons me-1 ">thumb_up</span>
                  {Math.round(likeCount / 1000)}K
                </div>
                <div className=" flex items-center bg-[#EAEAEA]  rounded-3xl px-3 py-1">
                  <span className="material-icons me-1 ">remove_red_eye</span>
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
