import axios from "axios";
export const API = axios.create({
    baseURL: "https://react-tailwind-update-eid-server.vercel.app",
    withCredentials: true
})