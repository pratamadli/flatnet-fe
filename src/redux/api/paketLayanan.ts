import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getPaketLayananApi = async (token: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/paket-layanan`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getPaketLayananByIdApi = async (token: string, id: string) => {
  if (!token) {
    throw new Error("No access token found");
  }

  return await axios.get(`${apiUrl}/paket-layanan/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { getPaketLayananApi, getPaketLayananByIdApi };
