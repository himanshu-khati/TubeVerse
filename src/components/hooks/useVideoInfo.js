import { useEffect, useState } from "react";
import { VIDEO_INFO_API } from "../utils/constants";
const useVideoInfo = (videoId) => {
  const [videoData, setVideoData] = useState(null);
  const getInfo = async () => {
    const response = await fetch(VIDEO_INFO_API + videoId);
    const json = await response.json();
    setVideoData(json.items[0]);
  };
  useEffect(() => {
    getInfo();
  }, []);
  return videoData;
};
export default useVideoInfo;
