<template>
  <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 pt-14 lg:gap-4">
    <!---== Second Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-[#07d884] flex items-center justify-between">
          <div class="text-center flex items-center pl-2">
            <font-awesome-icon
              :icon="['fas', 'user']"
              class="text-lg text-white"
            />
            <p class="mr-0 text-white text-lg pl-5 uppercase">users joined</p>
          </div>
        </div>
        <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5 text-gray-600">{{ users.length }}</p>
      </div>
    </div>

    <!---== Third Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-gray-700 flex items-center justify-between">
          <div class="text-center flex items-center pl-2">
            <font-awesome-icon
              :icon="['fas', 'user']"
              class="text-lg text-white"
            />
            <p class="mr-0 text-white text-lg pl-5 uppercase">users online</p>
          </div>
        </div>
        <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5 text-[#07d884]">711</p>
      </div>
    </div>

    <!---== Fourth Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-gray-800 flex items-center justify-between">
          <div class="text-center flex items-center pl-2">
            <font-awesome-icon
              :icon="['fas', 'message']"
              class="text-lg text-white"
            />
            <p class="mr-0 text-white text-lg pl-5 uppercase">total messages</p>
          </div>
        </div>
        <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5 text-gray-600">0</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { socket } from "../../socket";

const users = ref([]);

socket.on("users", (joinusers) => {
  try {
    users.value = joinusers;
  } catch (error) {
    console.log(error);
  }
});

</script>

<style scoped>
</style>
