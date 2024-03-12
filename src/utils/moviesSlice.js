import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailorVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
