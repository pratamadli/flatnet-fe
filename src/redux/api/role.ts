import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getRolesApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/role`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getRolesApi };
