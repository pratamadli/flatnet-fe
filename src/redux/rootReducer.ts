import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";
import roleSlice from "./slices/roleSlice";
// import dataReducer from './slices/dataSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  role: roleSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
