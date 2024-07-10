import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearAuthState,
  setAuthData,
  setAuthError,
  setAuthLoading,
} from "../slices";
import { getAuthApi, loginApi, logoutApi, registerApi } from "../api";
import { LoginPayload, RegisterPayload } from "../types";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (formData: RegisterPayload, thunkAPI) => {
    thunkAPI.dispatch(setAuthLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const response = await registerApi(formData);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setAuthError(error.response.data)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setAuthError(unexpectedError)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setAuthLoading(false));
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (formData: LoginPayload, thunkAPI) => {
    thunkAPI.dispatch(setAuthLoading(true));
    try {
      const response = await loginApi(formData);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setAuthError(error.response.data)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setAuthError(unexpectedError)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setAuthLoading(false));
    }
  }
);

export const getAuthThunk = createAsyncThunk(
  "auth/user",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setAuthLoading(true));
    try {
      const response = await getAuthApi(token);
      thunksAPI.dispatch(setAuthData(response.data));
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setAuthError(error.response.data)); // Dispatch setAuthError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setAuthError(unexpectedError)); // Dispatch setAuthError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setAuthLoading(false));
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setAuthLoading(true));
    try {
      const response = await logoutApi();
      thunkAPI.dispatch(clearAuthState()); // Clear authentication state
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setAuthError(error.response.data)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setAuthError(unexpectedError)); // Dispatch setAuthError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setAuthLoading(false));
    }
  }
);
