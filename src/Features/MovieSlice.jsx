import { createSlice, original } from "@reduxjs/toolkit";

const initialState = {
  ContinueWatching: [],
  NewDisney: [],
  Original: [],
  Trending: [],
  Recommended: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.ContinueWatching = [...state.ContinueWatching, ...action.payload.ContinueWatching];
      state.NewDisney = [...state.NewDisney, ...action.payload.NewDisney];
      state.Original = [...state.Original, ...action.payload.Original];
      state.Trending = [...state.Trending, ...action.payload.Trending];
      state.Recommended = [...state.Recommended, ...action.payload.Recommended];
    },
  },
});


export default movieSlice.reducer;
export const { setMovies } = movieSlice.actions;
