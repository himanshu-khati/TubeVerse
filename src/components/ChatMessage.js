import React from "react";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex gap-3 items-start  p-2 rounded-lg border my-1">
      <img
        src="https://icons.iconarchive.com/icons/graphicloads/flat-finance/256/person-icon.png"
        alt=""
        className="w-6 h-6 rounded-full"
      />
        <span className="text-gray-500 font-medium">{name}</span>
      <div className="flex items-center gap-2 text-sm">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
