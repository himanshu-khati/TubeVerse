import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex flex-col   justify-center  p-1 rounded-lg border mb-2">
      <div className="flex  items-center">
        <UserCircleIcon className="h-5 w-5 text-gray-400 me-1" />
        <span className="text-gray-500 text-sm lg:text-base">{name}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
