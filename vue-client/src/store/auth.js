import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {

  
  const createUser = async (name, email, password) => {
    await axios
      .post("http://localhost:5000/api/signUp", name, email, password)
      .then((result) => {
        console.log(result);
        const token = data.token;
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
        
      });
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
