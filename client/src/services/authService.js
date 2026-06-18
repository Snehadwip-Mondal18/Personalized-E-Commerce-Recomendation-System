import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const loginUser =
  async (credentials) => {

    const { data } =
      await axios.post(
        `${API}/login`,
        credentials
      );

    return data;
  };

export const registerUser =
  async (userData) => {

    const { data } =
      await axios.post(
        `${API}/register`,
        userData
      );

    return data;
  };