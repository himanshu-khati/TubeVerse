import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
    let timerId = setTimeout(async () => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        let result = await getSearchSuggestions(searchQuery);
        dispatch(cacheResults({ [searchQuery]: result }));
        setSuggestions(result);
      }
    }, 300);
    return () => clearTimeout(timerId);
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = (data) => {
    setSearchQuery(data);
    dispatch(setSearchString(data));
    navigate("/results");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="w-full flex  justify-center items-center px-4 py-2">
        <div className=" logo-area  w-3/12 flex justify-center items-center  ">
          <div
            className="w-2/12 hamburger cursor-pointer font-thin text-xl"
            onClick={toggleMenuHandler}
          >
            &#9776;
          </div>

          <div className="logo w-10/12 flex items-center  ">
            <span className="material-icons me-1 text-[#FF0000] ">
              play_circle
            </span>
            <p className="text-xl tracking-widest  text-gray-800">
              <Link to="/" onMouseDown={() => toggleMenuHandler()}>
                TUBEVERSE
              </Link>
            </p>
          </div>
        </div>

        <div className="search-area relative border-  w-7/12 flex justify-center items-center px-3  ">
          <div className="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              className="py-2 px-4  w-full shadow-inner  border rounded-l-full"
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
            className=" border rounded-r-full py-2 px-4 flex justify-center items-center  bg-[#F0F0F0]"
            onClick={() => handleSearchClick(searchQuery)}
          >
            <span className="material-icons ">search</span>
          </button>
        </div>

        <div className="w-2/12  user-area ">
          <div className="user-icon flex justify-end">
            <img
              src="https://yt3.ggpht.com/yti/ADpuP3OgLFzT0W3iKwNzlzFXq-9fpjP8_2CfMdO2K3ZRaw=s88-c-k-c0x00ffffff-no-rj"
              alt=""
              className="w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
