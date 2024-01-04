import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import useSearchSuggestions from "./hooks/useSearchSuggestions";
import { cacheResults } from "./utils/searchSlice";
import { setSearchString } from "./utils/displaySearchSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getSearchSuggestions = useSearchSuggestions;
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your API call here
        const result = await getSearchSuggestions(searchQuery);
        dispatch(cacheResults({ [searchQuery]: result }));
        setSuggestions(result);
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    };

    const timerId = setTimeout(fetchData, 300);

    return () => clearTimeout(timerId);
  }, [searchQuery, searchCache, dispatch, getSearchSuggestions]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = (data) => {
    setSearchQuery(data);
    dispatch(setSearchString(data));
    navigate("/results");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white  ">
      <div className="w-full flex justify-between lg:gap-6 items-center px-4 py-2">
        <div className="sm:flex items-center justify-center sm:gap-2 lg:gap-4 ">
          <div onClick={toggleMenuHandler}>
            <Bars3Icon className="w-7 h-7  hamburger cursor-pointer hidden lg:block" />
          </div>

          <Link to="/">
            <PlayCircleIcon className="w-8 h-8 text-[#FF0000]" />
          </Link>

          <p className="lg:text-xl sm:text-lg  justify-center items-center  tracking-widest  text-gray-800 sm:flex hidden">
            <Link to="/">TUBEVERSE</Link>
          </p>
        </div>

        <div className="search-area relative sm:w-7/12 md:w-8/12 lg:w-7/12 flex justify-center items-center px-3   ">
          <div className="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              className=" py-1 lg:py-2 px-4  w-full   shadow-inner  border  border-gray-300 focus:outline-blue-400 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {suggestions.length !== 0 && showSuggestions && (
              <div className="suggestions overflow-y-scroll border w-10/12 z-50 rounded mx-3 absolute bg-white shadow">
                <ul>
                  {suggestions.map((data, index) => (
                    <li
                      key={data}
                      className="hover:bg-gray-100"
                      onMouseDown={() => handleSearchClick(data)}
                    >
                      <div className="flex items-center p-2 cursor-pointer gap-1">
                        <span className="material-icons flex items-center text-gray-900">
                          search
                        </span>
                        <p>{data}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            className=" border rounded-r-full py-1 px-3 lg:py-2 lg:px-4 flex justify-center items-center  bg-[#F0F0F0]"
            onClick={() => handleSearchClick(searchQuery)}
          >
            <MagnifyingGlassIcon className=" h-6 w-6 " />
          </button>
        </div>

        <div className="user-icon flex justify-end">
          <img
            src="https://yt3.ggpht.com/yti/ADpuP3OgLFzT0W3iKwNzlzFXq-9fpjP8_2CfMdO2K3ZRaw=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
