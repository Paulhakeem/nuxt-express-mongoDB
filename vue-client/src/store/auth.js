import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const createUser = async (name, email, password) => {
    await axios
      .post("http://localhost:5000/api/signUp", { name, email, password })
      .then((result) => {
        console.log(result.data.token);
        const token = result.data.token;
        localStorage.setItem("token", token);
      })
  };

  const loginUser = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {email, password});
      if (res) {
        return res
      }
      
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return { createUser, loginUser };
});
