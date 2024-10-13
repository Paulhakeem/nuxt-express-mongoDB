import { ref } from "vue";

import { defineStore } from "pinia";
import axios from "axios";

export const updateUserStore = defineStore("update", () => {
  const updateUser = async (name, email, imageURL) => {
    await axios
      .patch(`http://localhost:5000/api/update/${id}`, {
        name,
        email,
        imageURL,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { updateUser };
});
