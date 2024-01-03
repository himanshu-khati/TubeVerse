import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import videosReducer from "./videoSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatSlice";
import displaySearchReducer from "./displaySearchSlice";
const store = configureStore({
  reducer: {
    app: appReducer,
    videos: videosReducer,
    search: searchReducer,
    chat: chatReducer,
    displaySearch: displaySearchReducer,
  },
});
export default store;
