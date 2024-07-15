import axios from "axios";
import { CreateUserPayload, LoginPayload, RegisterPayload } from "../types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getUsersApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const createUserApi = async (payload: CreateUserPayload, token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }
  console.log("PAYLOAD", payload);
  return await axios.post(`${apiUrl}/user`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getUsersApi, createUserApi };
