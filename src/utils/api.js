import axios from "axios";

export const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "9e13f939c6mshec3979ba5839793p1cd636jsnf537eb604fd2",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});
