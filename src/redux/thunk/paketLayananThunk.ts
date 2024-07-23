import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearPaketLayananState,
  setCurrentPaketLayananState,
  setPaketLayananData,
  setPaketLayananError,
  setPaketLayananLoading,
} from "../slices";
import { getPaketLayananApi, getPaketLayananByIdApi } from "../api";

const isAxiosError = (error: unknown): error is { response: { data: any } } => {
  return (error as { response: { data: any } }).response !== undefined;
};

export const getPaketLayananThunk = createAsyncThunk(
  "paketLayanan/get",
  async (token: string, thunksAPI) => {
    thunksAPI.dispatch(setPaketLayananLoading(true));
    try {
      const response = await getPaketLayananApi(token);
      thunksAPI.dispatch(setPaketLayananData(response.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setPaketLayananError(error.response.data)); // Dispatch setPaketLayananError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setPaketLayananError(unexpectedError)); // Dispatch setPaketLayananError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setPaketLayananLoading(false));
    }
  }
);

export const getPaketLayananFilterThunk = createAsyncThunk(
  "paketLayananFilter/get",
  async (id: string, thunksAPI) => {
    thunksAPI.dispatch(setPaketLayananLoading(true));
    try {
      const token = localStorage.getItem("access_token")?.toString() || "";
      const response = await getPaketLayananByIdApi(token, id);
      thunksAPI.dispatch(setCurrentPaketLayananState(response.data.data));
      return response.data;
    } catch (error) {
      console.log("ERROR", error);
      if (isAxiosError(error)) {
        thunksAPI.dispatch(setPaketLayananError(error.response.data)); // Dispatch setPaketLayananError action
        return thunksAPI.rejectWithValue(error.response.data);
      } else {
        const unexpectedError = { message: "An unexpected error occurred" };
        thunksAPI.dispatch(setPaketLayananError(unexpectedError)); // Dispatch setPaketLayananError action
        return thunksAPI.rejectWithValue(unexpectedError);
      }
    } finally {
      thunksAPI.dispatch(setPaketLayananLoading(false));
    }
  }
);
