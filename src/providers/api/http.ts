import axios from "axios";

export const http = axios.create({
  baseURL: `https://bmihealth.ir/EGW`,
  headers: {
    "Content-type": "application/json",
  },
});
