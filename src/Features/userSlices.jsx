import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
  isVerfied: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isVerfied = true;
    },
    logOut: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.isVerfied = false;
    },
  },
});
export default userSlice.reducer;
export const { login, logOut } = userSlice.actions;
