import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getObjectivesThunk = createAsyncThunk(
  "getObjective",
  async () => {
    const token = JSON.parse(localStorage.getItem("userTokens"));
    const res = await axios.get(
      "https://alignee.appspot.com/api/v1/okr/objectives",
      {
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
      }
    );
    return res.data;
  }
);

const getObjectivesThunkPending = (state) => {
  state.objective = {}
};

const getObjectivesThunkFulfilled = (state, {payload}) => {
  state.objective = payload
};

const getObjectivesThunkRejected = (state) => {
  state.objective = {}
};

export const getObjectivesExtraReducer = (builder) => {
  builder
    .addCase(getObjectivesThunk.pending, getObjectivesThunkPending)
    .addCase(getObjectivesThunk.fulfilled, getObjectivesThunkFulfilled)
    .addCase(getObjectivesThunk.rejected, getObjectivesThunkRejected);
};
