import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearLayananState,
  setLayananData,
  setLayananError,
  setLayananLoading,
  setCurrentLayananState,
  clearCurrentLayananState,
} from "../slices";
import {
  getLayananAllApi,
  getLayananFilterApi,
  tolakLayananApi,
  createLayananApi,
  selesaiLayananApi,
  validasiLayananApi,
  verifikasiLayananApi,
} from "../api";
import {
  LayananFilterPayload,
  TolakLayananPayload,
  CreateLayananPayload,
  CurrentLayananPayload,
  SelesaiLayananPayload,
  ValidasiLayananPayload,
  VerifikasiLayananPayload,
} from "../types";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const getLayananThunk = createAsyncThunk(
  "layanan/get",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setLayananLoading(true));
    try {
      const response = await getLayananAllApi(token);
      thunksAPI.dispatch(setLayananData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setLayananLoading(true));
    }
  }
);

export const getLayananFilterThunk = createAsyncThunk(
  "layananFilter/get",
  async (formData: LayananFilterPayload, thunksAPI) => {
    thunksAPI.dispatch(setLayananLoading(true));
    try {
      const token = localStorage.getItem("access_token")?.toString() || "";
      const response = await getLayananFilterApi(formData, token);
      console.log("RESPONSE", response);
      thunksAPI.dispatch(setLayananData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setLayananLoading(true));
    }
  }
);

export const setCurrentLayananThunk = createAsyncThunk(
  "users/setCurrent",
  async (formData: CurrentLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      thunkAPI.dispatch(setCurrentLayananState(formData));
      return null;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);

export const tolakLayananThunk = createAsyncThunk(
  "layanan/tolak",
  async (formData: TolakLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await tolakLayananApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);

export const verifikasiLayananThunk = createAsyncThunk(
  "layanan/verifikasi",
  async (formData: VerifikasiLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await verifikasiLayananApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);

export const validasiLayananThunk = createAsyncThunk(
  "layanan/validasi",
  async (formData: ValidasiLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await validasiLayananApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);

export const selesaiLayananThunk = createAsyncThunk(
  "layanan/selesai",
  async (formData: SelesaiLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await selesaiLayananApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);

export const createLayananThunk = createAsyncThunk(
  "layanan/create",
  async (formData: CreateLayananPayload, thunkAPI) => {
    thunkAPI.dispatch(setLayananLoading(true));
    try {
      console.log("THUNKAPI", thunkAPI);
      const token = localStorage.getItem("access_token") || ""; // Provide a fallback value
      if (!token) {
        throw new Error("No access token found");
      }
      const response = await createLayananApi(formData, token);
      console.log("RESPONSE THUNK", response);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        thunkAPI.dispatch(setLayananError(error.response.data)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunkAPI.dispatch(setLayananError(unexpectedError)); // Dispatch setLayananError action
        return thunkAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunkAPI.dispatch(setLayananLoading(false));
    }
  }
);
