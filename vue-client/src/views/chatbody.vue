<template>
  <div>
    <!-- component -->
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div class="flex flex-row items-center justify-center h-12 w-full">
            <div
              class="flex items-center justify-center rounded-2xl text-[#07d884] bg-indigo-100 h-10 w-10"
            >
              <font-awesome-icon :icon="['fas', 'message']" class="text-xl" />
            </div>
            <div class="ml-2 font-bold text-2xl text-gray-700">LetsChat</div>
          </div>

          <!-- USER PROFILE -->
          <div
            class="flex flex-col items-center bg-green-200 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
          >
            <div class="h-20 w-20 rounded-full border overflow-hidden">
              <img
                :src="profile.user.imageURL"
                alt="Avatar"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="text-sm font-semibold mt-2 capitalize">
              {{ profile.user.name }}
            </div>
            <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
            <div class="flex flex-row items-center mt-3">
              <div
                v-if="connected === true"
                class="size-2 bg-[#07d884] rounded-full mr-1"
              ></div>
              <div v-else class="size-2 bg-red-500 rounded-full mr-1"></div>
              <div class="leading-none ml-1 text-xs font-medium text-gray-600">
                {{ connected ? "Online" : "Offline" }}
              </div>
            </div>
          </div>

          <!-- OTHER USERS -->
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold text-gray-700">Active Users</span>
              <span
                class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{{ profile.allUsers.length }}</span
              >
            </div>
            <div v-for="users in profile.allUsers" :key="users.id" class="mt-4">
              <div class="flex gap-4">
                <div>
                  <img
                    :src="users.imageURL"
                    alt="profile-image"
                    class="size-8 rounded-full object-cover hover:size-9 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- GROUP CHAT -->
        <div class="flex flex-col flex-auto h-full p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="text-center pt-4 text-[#07d884] font-semibold">
              <h3 class="capitalize">group Chat🥳🤗</h3>
            </div>
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div
                v-for="chats in inbox"
                :key="chats.id"
                class="pt-10 scroll-auto"
              >
                <div class="w-96 bg-white h-auto rounded-lg">
                  <div class="p-3">
                    <h5 class="capitalize font-medium text-[#07d884]">
                      {{ profile.user.name }}
                    </h5>
                    <p class="first-letter:uppercase text-gray-700">
                      {{ chats.text }}
                    </p>
                    <span class="text-xs text-gray-400">{{ chats.date }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- FORM INPUT -->
            <form
              @submit.prevent="sendMessage"
              class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
            >
              <div>
                <button
                  class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                >
                  <font-awesome-icon :icon="['fas', 'link']" />
                </button>
              </div>
              <div class="flex-grow ml-4">
                <div class="relative w-full">
                  <input
                    v-model="text"
                    type="text"
                    class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                  <button
                    class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'face-smile']"
                      class="text-lg"
                    />
                  </button>
                </div>
              </div>
              <div class="ml-4">
                <button
                  class="flex items-center justify-center bg-[#07d884] hover:bg-gray-800 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span class="ml-2">
                    <font-awesome-icon :icon="['far', 'paper-plane']" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { state } from "../../socket";
import { socket } from "../../socket";
import { useUsersStore } from "@/store/user";
import { computed, ref, onMounted } from "vue";

const connected = computed(() => {
  return state.connected;
});

const userProfiles = computed((id) => {});

const profile = useUsersStore();

const text = ref("");

const inbox = ref([]);

onMounted(async () => {
  await profile.getProfile();
  await profile.users();
});



// getting client messages from db
socket.on("chats", (messages) => {
  inbox.value = messages;

  socket.on("createMessage", (msg) => {
    inbox.value.push(msg);
  });
});

// send message
const sendMessage = async () => {
  socket.emit("createMessage", {text: text.value, userID: profile.getProfile._id });
  text.value = "";
};
</script>
