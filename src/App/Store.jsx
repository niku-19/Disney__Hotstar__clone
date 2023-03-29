import {configureStore } from '@reduxjs/toolkit';
import userSlice from '../Features/userSlices';
import movieSlice from '../Features/MovieSlice';

export default configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
});
