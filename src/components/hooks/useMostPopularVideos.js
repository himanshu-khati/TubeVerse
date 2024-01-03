import { useEffect } from "react";
import { MOST_POPULAR_VIDEO_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMostPopularVideos, addPageToken } from "../utils/videoSlice";

const useMostPopularVideos = () => {
  const dispatch = useDispatch();
  const popularVideos = useSelector((store) => store.videos.mostPopularVideos);
  const nextPageToken = useSelector((store) => store.videos.pageToken);

  const getVideos = async (token = "") => {
    try {
      const response = await fetch(
        `${MOST_POPULAR_VIDEO_API}${token && `&pageToken=${token}`}`
      );
      const { items, nextPageToken: newPageToken } = await response.json();

      if (items && items.length > 0) {
        dispatch(addMostPopularVideos(items));

        // Check if the newPageToken is different from the current nextPageToken
        if (newPageToken && newPageToken !== nextPageToken) {
          dispatch(addPageToken(newPageToken));
        }
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // Check if the nextPageToken is different from the current nextPageToken
        if (nextPageToken !== "") {
          getVideos(nextPageToken);
        }
      }
    } catch (error) {
      console.error("Error handling infinite scroll:", error);
    }
  };

  useEffect(() => {
    if (popularVideos.length === 0) {
      getVideos();
    }

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [popularVideos]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };
  }, [nextPageToken]);

  return { popularVideos, nextPageToken };
};

export default useMostPopularVideos;
