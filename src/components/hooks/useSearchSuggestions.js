import { YOUTUBE_SEARCH_API } from "../utils/constants";

const useSearchSuggestions = async (searchQuery) => {
  const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await response.json();
  return json[1];
};
export default useSearchSuggestions;
