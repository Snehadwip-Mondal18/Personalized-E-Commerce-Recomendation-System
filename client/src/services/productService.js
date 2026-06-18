import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.data;
};

export const getFeaturedProducts = async () => {
  const response = await axios.get(`${API_URL}/featured`);
  return response.data.data;
};

export const getTrendingProducts = async () => {
  const response = await axios.get(
    `${API_URL}/trending`
  );

  return response.data.data;
};

export const getProductsByCategory = async (slug) => {

  const response = await axios.get(
    `${API_URL}/category/${slug}`
  );

  return response.data.data;
};

export const getFlashSaleProducts = async () => {

  const response = await axios.get(
    `${API_URL}/flash-sale`
  );

  return response.data.data;
};

export const searchProducts = async (keyword) => {

  const response = await axios.get(
    `${API_URL}/search?keyword=${keyword}`
  );

  return response.data.data;
};

export const getRelatedProducts = async (productId) => {
  const response = await axios.get(
    `${API_URL}/related/${productId}`
  );

  return response.data.data;
};

export const deleteProduct = async (
  id
) => {

  const response =
    await axios.delete(
      `${API_URL}/${id}`
    );

  return response.data;
};

export const updateProduct = async (id, productData) => {
  const { data } = await axios.put(
    `${API_URL}/${id}`,
    productData
  );

  return data;
};