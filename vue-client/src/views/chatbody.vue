<template>
  <div>
    <form @submit.prevent="sendMessage">
      <input v-model="text" />

      <button type="submit">Submit</button>
    </form>

    <div v-for="msg in messages" :key="msg.id"></div>
    <p>State: {{ connected ? "Connected" : "Disconnected" }}</p>
  </div>
</template>

<script setup>
import { state } from "../../socket";
import { socket } from "../../socket";

import { computed, ref, onMounted } from "vue";

const connected = computed(() => {
  return state.connected;
});

const text = ref("");

const messages = ref([]);

onMounted(() => {
  socket.on("chat message", (text) => {
    messages.value.push(text);
  });
});

const sendMessage = async () => {
  socket.emit("chat message", { text: text.value });
  text.value = "";
};
</script>
