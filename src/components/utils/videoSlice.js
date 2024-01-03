import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    mostPopularVideos: [],
    pageToken: "",
  },
  reducers: {
    addMostPopularVideos: (state, action) => {
      state.mostPopularVideos.push(...action.payload);
    },
    addPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const { addMostPopularVideos, addPageToken } = videoSlice.actions;
