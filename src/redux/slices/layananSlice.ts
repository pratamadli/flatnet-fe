import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentLayananPayload, ReturnState } from "../types";

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

const layananSlice = createSlice({
  name: "layanan",
  initialState,
  reducers: {
    setLayananData(state, action: PayloadAction<ReturnState>) {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.description = action.payload.description;
    },
    setLayananLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setLayananError(state, action) {
      state.error = action.payload;
    },
    clearLayananState(state) {
      state.success = false;
      state.data = null;
      state.message = null;
      state.date_start = null;
      state.date_end = null;
      state.description = null;
      state.loading = false;
      state.error = null;
    },
    setCurrentLayananState(
      state,
      action: PayloadAction<CurrentLayananPayload>
    ) {
      state.currentData = action.payload;
    },
    clearCurrentLayananState(state) {
      state.currentData = null;
    },
  },
});

export const {
  clearLayananState,
  setLayananData,
  setLayananError,
  setLayananLoading,
  clearCurrentLayananState,
  setCurrentLayananState,
} = layananSlice.actions;
export default layananSlice.reducer;
