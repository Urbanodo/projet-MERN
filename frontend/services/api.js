import axios from "axios";

const API = axios.create({
  baseURL: "https://projet-mern-5rqu.onrender.com"
});

export default API;