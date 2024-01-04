import React, { useRef } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Live",
    "Podcasts",
    "Mixes",
    "Sports",
    "Reels",
    "Cricket",
    "Movies",
    "Football",
    "Bollywood",
    "Tech",
    "React",
    "trailers",
    "Comedy",
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className="button-list-container w-full lg:py-3 lg:px-4 my-2 relative flex  ">
      <button className="scroll-button left-0" onClick={scrollLeft}>
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>
      <div
        className="button-scroll-content flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hide-scroll text-base "
        style={{ maxHeight: "200px" }}
        ref={containerRef}
      >
        {list.map((value) => (
          <Button key={value} value={value} />
        ))}
      </div>

      <button className="scroll-button right-0 " onClick={scrollRight}>
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </div>
  );
};

export default ButtonList;
