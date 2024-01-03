import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" side-bar max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain  w-3/12 px-3 py-2 flex flex-col items-center   text-gray-900 text-sm sticky top-16 z-30 bg-white  ">
      <div className="nav w-full py-3  border-b ">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <Link to="/" className="flex items-center">
              <span className="material-icons-outlined me-5  ">home</span> Home
            </Link>
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">
              ondemand_video
            </span>
            Shorts
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">email</span>
            Subscriptions
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">music_note</span>
            Music
          </li>
        </ul>
      </div>
      <div className="you py-3 w-full border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">live_tv</span>Your
            Channel
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">history</span>
            History
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">
              ondemand_video
            </span>
            You Videos
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">watch_later</span>
            Watch Later
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">download</span>
            Downloads
          </li>
        </ul>
      </div>
      <div className="explore py-3 w-full border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">trending_up</span>
            Trending
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">
              shopping_basket
            </span>
            Shopping
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">music_note</span>
            Music
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <span className="material-icons-outlined me-5 ">
              ondemand_video
            </span>
            Films
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">live_tv</span>Live
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">games</span>Gaming
          </li>
        </ul>
      </div>
      <div className="contact-us w-full py-3 border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">settings</span>
            Settings
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">report</span>Report
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">help</span>Help
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            {" "}
            <span className="material-icons-outlined me-5 ">feedback</span>Send
            Feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
