import axios from "axios";
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://medical-dashboard12.herokuapp.com",
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default instance;
