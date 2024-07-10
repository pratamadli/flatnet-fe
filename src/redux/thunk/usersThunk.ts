import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearUsersState,
  setUsersData,
  setUsersError,
  setUsersLoading,
} from "../slices";
import { getUsersApi } from "../api";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const getUsersThunk = createAsyncThunk(
  "users/get",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setUsersLoading(true));
    try {
      const response = await getUsersApi(token);
      thunksAPI.dispatch(setUsersData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setUsersLoading(false));
    }
  }
);
