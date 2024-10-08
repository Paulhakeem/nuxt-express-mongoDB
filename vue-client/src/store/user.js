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

const allUsers = ref([])
const users = async()=> {
  try {
    const user = await axios.get("http://localhost:5000/api/users");
    if (user) {
      allUsers.value = user.data.data.users;
    }
  } catch (error) {
    console.log(error);
  }
}

  return {
    getProfile,
    user,
    users,
    allUsers
  };
});
