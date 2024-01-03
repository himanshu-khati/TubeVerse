import useYoutubeSearch from "./hooks/useYoutubeSearch";
import { useRef } from "react";
import { setSearchString } from "./utils/displaySearchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Button = ({ value }) => {
  const query = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(setSearchString(query.current.value));
    navigate("/results");
  };
  return (
    <button
      className="py-1 px-3 rounded-md bg-[#E5E5E5]"
      onClick={handleClick}
      ref={query}
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
