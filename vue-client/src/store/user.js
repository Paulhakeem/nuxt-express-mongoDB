import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", () => {
  const user = ref([]);
  const token = localStorage.getItem("token");
  const getProfile = async () => {
    await axios
      .get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        localStorage.getItem("token");
        user.value = result.data.userExist
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    getProfile,
    user
  };
});
