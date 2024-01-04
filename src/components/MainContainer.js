import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const containerWidth = isMenuOpen ? "lg:w-10/12 w-full" : "w-full";
  return (
    <div className={`main-container  ${containerWidth} px-3 `}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
