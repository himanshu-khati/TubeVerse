import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="main-container  w-full px-3 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
