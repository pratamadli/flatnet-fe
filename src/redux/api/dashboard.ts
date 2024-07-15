import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getDashboardApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getDashboardApi };
