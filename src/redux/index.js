import { combineReducers } from "@reduxjs/toolkit";
import objectiveSlice from "./slices/objectiveSlice";
import userSlice from "./slices/userSlice"

export const rootReducer = combineReducers({
    user: userSlice,
    objective: objectiveSlice
})