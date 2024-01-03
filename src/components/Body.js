import SideBar from "./SideBar";
// import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="body w-full flex relative">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
