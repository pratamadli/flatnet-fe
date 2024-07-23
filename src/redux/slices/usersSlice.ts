import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReturnState, CurrentUserDataPayload } from "../types";

const initialState: ReturnState = {
  success: false,
  data: null,
  message: null,
  date_start: null,
  date_end: null,
  description: null,
  loading: false,
  error: null,
  currentData: null,
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
    setUserCurrentData(state, action: PayloadAction<CurrentUserDataPayload>) {
      state.currentData = action.payload;
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
      state.currentData = null;
    },
    clearUserCurrentData(state) {
      state.currentData = null;
    },
    setPetugasData(state, action: PayloadAction<ReturnState>) {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.description = action.payload.description;
    },
  },
});

export const {
  clearUsersState,
  setUsersData,
  setUsersError,
  setUsersLoading,
  setUserCurrentData,
  clearUserCurrentData,
  setPetugasData,
} = usersSlice.actions;
export default usersSlice.reducer;
