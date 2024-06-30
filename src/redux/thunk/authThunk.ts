import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearAuthState,
  setAuthData,
  setAuthError,
  setAuthLoading,
} from "../slices";
import { getAuthApi, loginApi, logoutApi, registerApi } from "../api";
import { RegisterPayload } from "../types";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData: RegisterPayload, thunkAPI) => {
    try {
      console.log("THUNKAPI", thunkAPI);
      const response = await registerApi(formData);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue({
          message: "An unexpected error occurred",
        });
      }
    }
  }
);
