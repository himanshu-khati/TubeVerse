import React from "react";
import {
  HomeIcon,
  PlusCircleIcon,
  EnvelopeIcon,
  MusicalNoteIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const ResponsiveBottomMenu = () => {
  return (
    <div className="w-full flex  border-gray-400 justify-around items-center border-t bg-white py-2 px-3 lg:hidden sticky bottom-0 z-50 ">
      <PlusCircleIcon className="w-6 h-6" />
      <EnvelopeIcon className="w-6 h-6" />
      <Link to="/">
        <HomeIcon className="w-6 h-6" />
      </Link>
      <MusicalNoteIcon className="w-6 h-6" />
      <ShareIcon className="w-6 h-6" />
    </div>
  );
};

export default ResponsiveBottomMenu;
