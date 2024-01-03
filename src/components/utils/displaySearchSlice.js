import { createSlice } from "@reduxjs/toolkit";

const displaySearchSlice = createSlice({
  name: "displaySearch",
  initialState: {
    searchString: null,
    youtubeSearchResults: [],
  },
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    addYoutubeSearchResults: (state, action) => {
      state.youtubeSearchResults = action.payload;
    },
  },
});

export default displaySearchSlice.reducer;
export const { setSearchString, addYoutubeSearchResults } =
  displaySearchSlice.actions;
