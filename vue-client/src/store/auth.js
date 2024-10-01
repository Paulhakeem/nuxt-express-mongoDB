import { defineStore } from "pinia";
import axios from "axios";


export const useAuthStore = defineStore("auth", () => {
  const createUser = async (name, email, password) => {
    try {
      const data = await axios.post("http://localhost:5000/api/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name,
          email,
          password,
        },
      });

      if (data) {
        console.log(data);
        const token = data.token;
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
      });
      if (res) {
        return res.data;
      } else {
        console.log("An error has occurs");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return { createUser, loginUser };
});
