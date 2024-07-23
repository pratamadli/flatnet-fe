import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrentPaketLayananPayload, ReturnState } from "../types";

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

const paketLayananSlice = createSlice({
  name: "paketLayanan",
  initialState,
  reducers: {
    setPaketLayananData(state, action: PayloadAction<ReturnState>) {
      state.success = action.payload.success;
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.date_start = action.payload.date_start;
      state.date_end = action.payload.date_end;
      state.description = action.payload.description;
    },
    setPaketLayananLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setPaketLayananError(state, action) {
      state.error = action.payload;
    },
    clearPaketLayananState(state) {
      state.success = false;
      state.data = null;
      state.message = null;
      state.date_start = null;
      state.date_end = null;
      state.description = null;
      state.loading = false;
      state.error = null;
    },
    setCurrentPaketLayananState(
      state,
      action: PayloadAction<CurrentPaketLayananPayload>
    ) {
      state.currentData = action.payload;
    },
    clearCurrentPaketLayananState(state) {
      state.currentData = null;
    },
  },
});

export const {
  clearPaketLayananState,
  setPaketLayananData,
  setPaketLayananError,
  setPaketLayananLoading,
  clearCurrentPaketLayananState,
  setCurrentPaketLayananState,
} = paketLayananSlice.actions;
export default paketLayananSlice.reducer;
