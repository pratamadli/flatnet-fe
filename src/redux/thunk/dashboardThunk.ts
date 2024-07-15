import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearDashboardState,
  setDashboardData,
  setDashboardError,
  setDashboardLoading,
} from "../slices";
import { getDashboardApi } from "../api";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const getDashboardThunk = createAsyncThunk(
  "dashboard/get",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setDashboardLoading(true));
    try {
      const response = await getDashboardApi(token);
      thunksAPI.dispatch(setDashboardData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setDashboardError(error.response.data)); // Dispatch setDashboardError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setDashboardError(unexpectedError)); // Dispatch setDashboardError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setDashboardLoading(false));
    }
  }
);
