import { useEffect } from "react";
import { SEARCH_YOUTUBE_lIST_API } from "../utils/constants";
import { addYoutubeSearchResults } from "../utils/displaySearchSlice";
import { useDispatch, useSelector } from "react-redux";

const useYoutubeSearch = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(
    (store) => store.displaySearch.addYoutubeSearchResults
  );
  const query = useSelector((store) => store.displaySearch.searchString);
  const getSearchResults = async () => {
    const response = await fetch(SEARCH_YOUTUBE_lIST_API + query);
    const json = await response.json();
    dispatch(addYoutubeSearchResults(json.items));
  };
  useEffect(() => {
    !searchResults && getSearchResults();
  }, [query]);
  
};

export default useYoutubeSearch;
 