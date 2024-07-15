import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearRoleState,
  setRoleData,
  setRoleError,
  setRoleLoading,
} from "../slices";
import { getRolesApi } from "../api";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const getRoleThunk = createAsyncThunk(
  "role/get",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setRoleLoading(true));
    try {
      const response = await getRolesApi(token);
      thunksAPI.dispatch(setRoleData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setRoleError(error.response.data)); // Dispatch setRoleError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setRoleError(unexpectedError)); // Dispatch setRoleError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setRoleLoading(false));
    }
  }
);
