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

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersData(state, action: PayloadAction<ReturnState>) {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.description = action.payload.description;
    },
    setUsersLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setUsersError(state, action) {
      state.error = action.payload;
    },
    clearUsersState(state) {
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

export const { clearUsersState, setUsersData, setUsersError, setUsersLoading } =
  usersSlice.actions;
export default usersSlice.reducer;
