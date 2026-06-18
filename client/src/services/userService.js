import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// import api from "./api";

export const getAllUsers =
  async () => {
    const { data } =
      await axios.get(`${API_URL}/users`);

    return data;
  };

export const deleteUser =
  async (id) => {
    const { data } =
      await axios.delete(`${API_URL}/users/${id}`);


    return data;
  };

export const updateUserRole =
  async (id, role) => {
    const { data } =
      await axios.put(`${API_URL}/users/${id}/role`, { role });

    return data;
  };