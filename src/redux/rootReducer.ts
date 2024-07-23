import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";
import roleSlice from "./slices/roleSlice";
import layananSlice from "./slices/layananSlice";
import paketLayananSlice from "./slices/paketLayananSlice";
import dashboardSlice from "./slices/dashboardSlice";
// import dataReducer from './slices/dataSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  users: usersSlice,
  role: roleSlice,
  layanan: layananSlice,
  paketLayanan: paketLayananSlice,
  dashboard: dashboardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
