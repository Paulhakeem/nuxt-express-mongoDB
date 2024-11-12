<template>
  <div>
    <!-- component -->
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <aside class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
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
                >{{ users.length }}</span
              >
            </div>
            <div v-for="users in users" :key="users.id" class="mt-4">
              <div class="flex gap-4 relative">
                <div>
                  <img
                    :src="users.imageURL"
                    alt="profile-image"
                    class="size-8 rounded-full object-cover hover:size-9 cursor-pointer"
                  />
                  
                    <div
                      v-if="connected === true"
                      class="size-2 bg-[#07d884] rounded-full mr-1 absolute top-0"
                    ></div>
                    <div
                      v-else
                      class="size-2 bg-red-500 rounded-full mr-1"
                    ></div>
                  
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- GROUP CHAT -->
        <div class="flex flex-col flex-auto h-full p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="text-center pt-4 text-[#07d884] font-semibold">
              <h3 class="capitalize">group Chat🥳🤗</h3>
            </div>
            <div class="h-full overflow-x-auto">
              <div
                v-for="(chats, index) in inbox"
                :key="index"
                class="scroll-auto pt-10"
              >
                <!-- sender -->
                <transition name="slide-fade">
                  <div
                    v-if="profile.user._id === profile.user._id"
                    class="w-96 bg-white h-auto rounded-lg"
                  >
                    <div class="p-3">
                      <h5 class="capitalize font-medium text-[#07d884]">
                        {{ profile.user.name }}
                      </h5>
                      <p class="first-letter:uppercase text-gray-700">
                        {{ chats.text }}
                      </p>
                      <span class="text-xs text-gray-400">{{
                        chats.timestamp
                      }}</span>
                    </div>
                  </div>
                </transition>
                <!-- reciver -->
                <div class="w-96 bg-white h-auto rounded-lg bt-2 float-right">
                  <div class="p-3">
                    <h5 class="capitalize font-medium text-[#07d884]">Admin</h5>
                    <p class="first-letter:uppercase text-gray-700">
                      Sorry! System is under maintainace
                    </p>
                    <span class="text-xs text-gray-400"> .. : .. </span>
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
import { state } from "../../socket";
import { socket } from "../../socket";
import { useUsersStore } from "@/store/user";
import { computed, ref, onMounted } from "vue";

const profile = useUsersStore();

const connected = computed(() => {
  return state.connected;
});

const text = ref("");

const inbox = ref([]);

onMounted(async () => {
  await profile.getProfile();
});

// getting client messages from db
socket.on("chats", (messages) => {
  inbox.value = messages;

  socket.on("createMessage", (text) => {
    inbox.value.push(text);
  });
});

// send message
const sendMessage = async () => {
  if (text.value === "") return;
  socket.emit("createMessage", { text: text.value });
  text.value = "";
};

// loading users
const users = ref([]);
socket.on("users", (joinusers) => {
  try {
    users.value = joinusers;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style>
@media only screen and (max-width: 600px) {
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
