import useYoutubeSearch from "./hooks/useYoutubeSearch";
import { useSelector } from "react-redux";
import SearchCard from "./SearchCard";
const SearchResultsPage = () => {
  useYoutubeSearch();
  const results = useSelector(
    (store) => store.displaySearch.youtubeSearchResults
  );

  return (
    <div className="min-h-screen">
      {results.length &&
        results.map((info) => (
          <SearchCard key={info.id.videoId} cardInfo={info} />
        ))}
    </div>
  );
};

export default SearchResultsPage;
