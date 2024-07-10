import axios from "axios";
import { LoginPayload, RegisterPayload } from "../types";

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

export { getUsersApi };
