import React from "react";
import Button from "./Button";
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
  ];
  return (
    <div className="button-list w-full py-3 px-4 my-2 flex items-center  gap-2 ">
      {list.map((value) => (
        <Button key={value} value={value} />
      ))}
    </div>
  );
};

export default ButtonList;
