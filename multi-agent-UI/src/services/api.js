import axios from "axios";

const API = axios.create({
  baseURL: "https://backend-fastapi-6p4e.onrender.com",
});

export default API;