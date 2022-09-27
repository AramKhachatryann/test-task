import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getUserThunk = createAsyncThunk("getUser", async (user) => {
    const res = await axios.post("https://alignee.appspot.com/api/v1/accounts/login/", user)
    localStorage.setItem("userTokens", JSON.stringify(res.data))
})

const getUserThunkPending = (state) => {
  state.user = false
}

const getUserThunkFulfilled = (state, ) => {
  state.user = true
}

const getUserThunkRejected = (state) => {
  state.user = false
}

export const getUserExtraReducer = (builder) => {
  builder
    .addCase(getUserThunk.pending, getUserThunkPending)
    .addCase(getUserThunk.fulfilled, getUserThunkFulfilled)
    .addCase(getUserThunk.rejected, getUserThunkRejected)
}