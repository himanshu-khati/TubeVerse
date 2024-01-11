import useYoutubeSearch from "./hooks/useYoutubeSearch";
import { useSelector } from "react-redux";
import SearchCard from "./SearchCard";
import Shimmer from "./Shimmer";
import { v4 as uuidv4 } from "uuid";
const SearchResultsPage = () => {
  useYoutubeSearch();
  const results = useSelector(
    (store) => store.displaySearch.youtubeSearchResults
  );

  if (results === 0 || results === null || !results || results === "")
    return <Shimmer />;
  return (
    <div className="min-h-screen">
      {results.length &&
        results.map((info) => <SearchCard key={uuidv4()} cardInfo={info} />)}
    </div>
  );
};

export default SearchResultsPage;
