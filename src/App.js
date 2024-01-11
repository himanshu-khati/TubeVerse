import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultsPage from "./components/SearchResultsPage";
import ResponsiveBottomMenu from "./components/ResponsiveBottomMenu";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <div className="font-roboto container mx-auto  ">
      <Header />
      <Body />
      <ResponsiveBottomMenu />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <WatchPage /> },
      { path: "/results", element: <SearchResultsPage /> },
    ],
  },
]);

export default App;
