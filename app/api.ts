import axios from "axios"; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const apiInstance = axios.create({
  baseURL : API_URL,
  headers: {
    'api-key': API_KEY,
  }, 
});

export default apiInstance;