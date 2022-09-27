import { createSlice } from "@reduxjs/toolkit";
import { getObjectivesExtraReducer } from "../thunks/getObjectivesThunks";

const initialState = {
  objective: {},
};

const objectiveSlice = createSlice({
  name: "objective",
  initialState,
  reducers: {
    setObjective: (state, { payload }) => {
      state.objective = payload;
    },
  },
  extraReducers: (builder) => {
    getObjectivesExtraReducer(builder)
  }
});

export const objectiveSelector = (state) => state.objective.objective;

export const { setObjective } = objectiveSlice.actions;

export default objectiveSlice.reducer;
