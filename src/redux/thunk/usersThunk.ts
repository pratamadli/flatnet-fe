import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearUsersState,
  setUsersData,
  setUsersError,
  setUsersLoading,
  setUserCurrentData,
} from "../slices";
import {
  getUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
} from "../api";
import { CreateUserPayload, CurrentUserDataPayload } from "../types";

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

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (formData: CreateUserPayload, thunkAPI) => {
    thunkAPI.dispatch(setUsersLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await createUserApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setUsersLoading(false));
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  "users/update",
  async (formData: CreateUserPayload, thunkAPI) => {
    thunkAPI.dispatch(setUsersLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await updateUserApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setUsersLoading(false));
    }
  }
);

export const deleteUserThunk = createAsyncThunk(
  "users/delete",
  async (id: string, thunkAPI) => {
    thunkAPI.dispatch(setUsersLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await deleteUserApi(id, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setUsersLoading(false));
    }
  }
);

export const setCurrentUserThunk = createAsyncThunk(
  "users/setCurrent",
  async (formData: CurrentUserDataPayload, thunkAPI) => {
    thunkAPI.dispatch(setUsersLoading(true));
    try {
      thunkAPI.dispatch(setUserCurrentData(formData));
      return null;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setUsersLoading(false));
    }
  }
);

export const clearCurrentUserThunk = createAsyncThunk(
  "users/clearCurrent",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setUsersLoading(true));
    try {
      thunkAPI.dispatch(clearCurrentUserThunk());
      return null;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setUsersError(error.response.data)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setUsersError(unexpectedError)); // Dispatch setUsersError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setUsersLoading(false));
    }
  }
);
