import axios from "axios";

const api = axios.create({
  baseURL: "https://api-proto-capitacao.vercel.app/",
});

export default api;

