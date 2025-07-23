import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); /// Stores token here
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// fetch transaction

export const getTransactions = () => API.get("/transactions");

// Add transaction
export const addTransactions = (transaction) =>
  API.post("/transactions", transaction);

/// Delete Transaction
export const deleteTransactions = (id) => API.delete(`/transactions/${id}`);
