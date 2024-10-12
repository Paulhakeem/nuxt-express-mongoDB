import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const createUser = async (name, email, password) => {
    await axios
      .post("http://localhost:5000/api/signUp", { name, email, password })
      .then((result) => {
        const token = result.data.token;
        localStorage.setItem("token", token);
      });
  };

  const loginUser = async (email, password) => {
    await axios
      .post("http://localhost:5000/api/login", {
        email,
        password,
      })
      .then((result) => {
        const token = result.data.token;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { createUser, loginUser };
});
