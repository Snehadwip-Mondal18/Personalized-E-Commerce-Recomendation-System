import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// import api from "./api";

export const getDashboardAnalytics =
  async () => {
    const { data } =
      await axios.get(`${API_URL}/analytics/dashboard`);

    return data;
  };