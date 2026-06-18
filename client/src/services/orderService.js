import axios from "axios";

const API_URL = "http://localhost:5000/api/orders";

const api = axios.create({
  baseURL: API_URL,
});

export const getMyOrders = async () => {
  const { data } =
    await api.get("/my-orders");

  return data;
};

// import api from "./api";

export const getAllOrders =
  async () => {
    const { data } =
      await api.get("/orders");

    return data;
  };

export const updateOrderStatus =
  async (orderId, status) => {
    const { data } =
      await api.put(
        `/orders/${orderId}`,
        { status }
      );

    return data;
  };