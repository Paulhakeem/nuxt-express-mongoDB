import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const findUserByName = async (name) => {
    try {
      const searchUser = await $fetch(`http://localhost:5000/api/user/${name}`);
      return searchUser;
    } catch (error) {
      console.error("Error searching users:", error.message);
    }
  };
  return {
    findUserByName,
  };
});
