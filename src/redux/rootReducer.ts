import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
// import dataReducer from './slices/dataSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
