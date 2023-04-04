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
      state.ContinueWatching = action.payload.ContinueWatching;
      state.NewDisney = action.payload.NewDisney;
      state.Original = action.payload.Original;
      state.Trending = action.payload.Trending;
      state.Recommended = action.payload.Recommended;
    },
  },
});


export default movieSlice.reducer;
export const { setMovies } = movieSlice.actions;
