import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
 

  const findUserByName = async (name) => {
    try {
      const searchUser = await axios.get(
        `http://localhost:5000/api/user/${name}`
      );
      return searchUser;
    } catch (error) {
      console.error("Error searching users:", error.message);
    }
  };

  const getUsers = async () => {
    await axios
      .get("http://localhost:5000/api/users")
      .then((result) => {
        users.value = result;
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    findUserByName,
    getUsers,
  };
});
