import axios from "axios";

console.log(import.meta.env.VITE_BASE_URL);

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000
})

export default http