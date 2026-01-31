import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAlerts = async (params = {}) => {
  const res = await axios.get(`${API_URL}/alerts`, { params });
  return res.data;
};

export const createAlert = async (data) => {
  const res = await axios.post(`${API_URL}/alerts`, data);
  return res.data;
};

export const updateAlertStatus = async (id, status) => {
  const res = await axios.put(`${API_URL}/alerts/${id}`, { status });
  return res.data;
};

export const deleteAlert = async (id) => {
  const res = await axios.delete(`${API_URL}/alerts/${id}`);
  return res.data;
};
