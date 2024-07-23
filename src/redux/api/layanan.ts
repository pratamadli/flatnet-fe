import axios from "axios";
import {
  CreateLayananPayload,
  LayananFilterPayload,
  SelesaiLayananPayload,
  TolakLayananPayload,
  ValidasiLayananPayload,
  VerifikasiLayananPayload,
} from "../types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getLayananAllApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/layanan`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getLayananFilterApi = async (
  payload: LayananFilterPayload,
  token: string
) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.post(`${apiUrl}/layanan/filter`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const createLayananApi = async (
  payload: CreateLayananPayload,
  token: string
) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.post(`${apiUrl}/layanan`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const verifikasiLayananApi = async (
  payload: VerifikasiLayananPayload,
  token: string
) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.put(`${apiUrl}/layanan/verifikasi`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const validasiLayananApi = async (
  payload: ValidasiLayananPayload,
  token: string
) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.put(`${apiUrl}/layanan/validasi`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const tolakLayananApi = async (payload: TolakLayananPayload, token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.put(`${apiUrl}/layanan/tolak`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const selesaiLayananApi = async (
  payload: SelesaiLayananPayload,
  token: string
) => {
  if (!token) {
    throw new Error("No access token found");
  }
  return await axios.put(`${apiUrl}/layanan/selesai`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  createLayananApi,
  getLayananAllApi,
  getLayananFilterApi,
  selesaiLayananApi,
  tolakLayananApi,
  validasiLayananApi,
  verifikasiLayananApi,
};
