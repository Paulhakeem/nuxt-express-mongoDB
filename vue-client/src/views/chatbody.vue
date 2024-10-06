<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="text" />

      <button type="submit">Submit</button>
      <p>{{ messages.text }}</p>
    </form>
    <p>State: {{ connected }}</p>
  </div>
</template>

<script setup>
import { state } from "../../socket";
import { socket } from "../../socket";
import axios from "axios";

import { computed, ref, onMounted } from "vue";

const connected = computed(() => {
  return state.connected;
});

const text = ref("");

const messages = ref([]);

const onSubmit = async () => {
  await axios
    .post("http://localhost:5000/api/message", { text: text.value })
    .then((result) => {
      messages.value = result.data.newMessage;
    })
    .catch((err) => {
      alert(err);
    });
  text.value = "";
};
</script>
