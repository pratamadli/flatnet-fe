import axios from "axios";
import { LoginPayload, RegisterPayload } from "../types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const loginApi = async (payload: LoginPayload) => {
  return await axios.post(`${apiUrl}/auth/login`, payload);
};

const registerApi = async (payload: RegisterPayload) => {
  console.log("PAYLOAD", payload);
  return await axios.post(`${apiUrl}/auth/register`, payload);
};

const getAuthApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const logoutApi = async () => {
  const token = localStorage.getItem("access_token");
  return await axios.post(
    `${apiUrl}/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export { loginApi, registerApi, getAuthApi, logoutApi };
