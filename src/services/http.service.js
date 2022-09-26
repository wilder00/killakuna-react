import axios from "axios";

const baseApiUrl = import.meta.env.API_PATH
const timeout = 1000
const headers = {
  'Content-Type': 'application/json'
}
console.log("baseUrl: ",baseApiUrl);
const axiosInstance = axios.create({
  baseURL: baseApiUrl,
  timeout,
  headers
});


export const httpClient = (axiosI = axiosInstance)=>{
  return axiosI
}
