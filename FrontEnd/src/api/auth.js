import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend URl
});

//register
export const registerUser = (FormData) => API.post("/auth/register", FormData);

//login
export const loginUser = (FormData) => API.post("/auth/login", FormData);
