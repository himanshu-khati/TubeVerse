import React, { useEffect } from "react";

const Shimmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen justify-center items-center flex flex-wrap gap-2 w-full ">
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
      <div className="bg-gray-400 h-[172px] w-full rounded-xl lg:w-3/12 animate-pulse "></div>
    </div>
  );
};

export default Shimmer;
