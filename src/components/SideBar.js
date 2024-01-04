import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomeIcon,
  FilmIcon,
  EnvelopeIcon,
  MusicalNoteIcon,
  TvIcon,
  ClockIcon,
  CloudArrowDownIcon,
  ArrowTrendingUpIcon,
  ShoppingCartIcon,
  PuzzlePieceIcon,
  Cog6ToothIcon,
  FlagIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" side-bar max-h-screen min-w-fit hover:overflow-y-scroll overflow-hidden overscroll-contain  w-2/12 ps-2 py-2 lg:flex flex-col items-center   text-gray-900 text-sm sticky top-16 z-30 bg-white hidden  ">
      <div className="nav w-full py-3  border-b ">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <Link to="/" className="flex items-center">
              <HomeIcon className="h-6 w-6 me-5" /> Home
            </Link>
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <FilmIcon className="h-6 w-6 me-5" />
            Shorts
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <EnvelopeIcon className="h-6 w-6 me-5" />
            Subscriptions
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <MusicalNoteIcon className="h-6 w-6 me-5" />
            Music
          </li>
        </ul>
      </div>
      <div className="you py-3 w-full border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <TvIcon className="h-6 w-6 me-5" />
            Channel
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <ClockIcon className="h-6 w-6 me-5" />
            History
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <FilmIcon className="h-6 w-6 me-5" />
            You Videos
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <ClockIcon className="h-6 w-6 me-5" />
            Watch Later
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <CloudArrowDownIcon className="h-6 w-6 me-5" />
            Downloads
          </li>
        </ul>
      </div>
      <div className="explore py-3 w-full border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <ArrowTrendingUpIcon className="h-6 w-6 me-5" />
            Trending
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <ShoppingCartIcon className="h-6 w-6 me-5" />
            Shopping
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <MusicalNoteIcon className="h-6 w-6 me-5" />
            Music
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <FilmIcon className="h-6 w-6 me-5" />
            Films
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <TvIcon className="h-6 w-6 me-5" />
            Live
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <PuzzlePieceIcon className="h-6 w-6 me-5" />
            Gaming
          </li>
        </ul>
      </div>
      <div className="contact-us w-full py-3 border-b">
        <ul>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <Cog6ToothIcon className="h-6 w-6 me-5" />
            Settings
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <FlagIcon className="h-6 w-6 me-5" />
            Report
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <QuestionMarkCircleIcon className="h-6 w-6 me-5" />
            Help
          </li>
          <li className="flex items-center   my-1 cursor-pointer  hover:bg-[#efefef] py-2 px-2 rounded-xl">
            <EnvelopeIcon className="h-6 w-6 me-5" />
            Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
