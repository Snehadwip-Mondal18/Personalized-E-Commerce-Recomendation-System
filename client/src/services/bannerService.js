import axios from "axios";

export const getBanner = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/banner"
  );

  return response.data.data;
};