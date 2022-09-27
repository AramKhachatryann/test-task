import { createSlice } from "@reduxjs/toolkit";
import { getUserExtraReducer } from "../thunks/getUserThunk";

const initialState = {
  user: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
  extraReducers: (builder) => {
    getUserExtraReducer(builder)
  }
});

export const userSelector = (state) => state.user.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
