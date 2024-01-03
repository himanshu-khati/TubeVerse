import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { v4 as uuidv4 } from "uuid";
import { sentence, lorem } from "txtgen";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(
        addMessage({
          name: lorem(1, 1),
          message: sentence(),
        })
      );
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  return (
    <div className="border-2 pt-2 px-2 mx-2 mt-2 w-full rounded-lg ">
      <p className="px-2 mx-2 font-semibold text-gray-800">Live Chat</p>
      <div className=" border-t w-full mt-2 "></div>
      <div className="  w-full pt-2 px-2  mt-2  overflow-y-auto  h-80 scroll-auto flex flex-col-reverse">
        {chatMessage.map((chat) => (
          <ChatMessage key={uuidv4()} name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="add-chat border  p-3 mx-2 my-2  rounded-lg flex gap-2 items-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "himanshu khati",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          type="text"
          className=" rounded-lg w-full py-1 px-2 bg-[#EAEAEA]"
          placeholder="Chat..."
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <input
          type="submit"
          value="Send"
          className=" px-3 py-1 rounded-lg bg-[#EAEAEA] cursor-pointer  focus:outline-none active:outline-none hover:outline-none"
        />
      </form>
    </div>
  );
};

export default LiveChat;
