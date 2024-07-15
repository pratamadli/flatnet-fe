import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReturnState } from "../types";

const initialState: ReturnState = {
  success: false,
  data: null,
  message: null,
  date_start: null,
  date_end: null,
  description: null,
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardData(state, action: PayloadAction<ReturnState>) {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.description = action.payload.description;
    },
    setDashboardLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setDashboardError(state, action) {
      state.error = action.payload;
    },
    clearDashboardState(state) {
      state.success = false;
      state.data = null;
      state.message = null;
      state.date_start = null;
      state.date_end = null;
      state.description = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  clearDashboardState,
  setDashboardData,
  setDashboardError,
  setDashboardLoading,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
