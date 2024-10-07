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
            <div class="ml-2 font-bold text-2xl">LetsChat</div>
          </div>
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
            <div class="text-sm font-semibold mt-2">
              {{ profile.user.name }}
            </div>
            <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
            <div class="flex flex-row items-center mt-3">
              <div
                class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full"
              >
                <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
              </div>
              <div class="leading-none ml-1 text-xs">Active</div>
            </div>
          </div>
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold">Active Conversations</span>
              <span
                class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >4</span
              >
            </div>
            <div
              class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto"
            >
              <button
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div
                  class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full"
                >
                  H
                </div>
                <div class="ml-2 text-sm font-semibold">Henry Boyd</div>
              </button>
              <button
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div
                  class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
                >
                  M
                </div>
                <div class="ml-2 text-sm font-semibold">Marta Curtis</div>
                <div
                  class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none"
                >
                  2
                </div>
              </button>
              <button
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div
                  class="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full"
                >
                  P
                </div>
                <div class="ml-2 text-sm font-semibold">Philip Tucker</div>
              </button>
              <button
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div
                  class="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full"
                >
                  C
                </div>
                <div class="ml-2 text-sm font-semibold">Christine Reid</div>
              </button>
              <button
                class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              >
                <div
                  class="flex items-center justify-center h-8 w-8 bg-purple-200 rounded-full"
                >
                  J
                </div>
                <div class="ml-2 text-sm font-semibold">Jerry Guzman</div>
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-auto h-full p-6">
          <div
            class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
          >
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          asperiores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>I'm ok what about you?</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-6 col-end-13 p-3 rounded-lg">
                    <div
                      class="flex items-center justify-start flex-row-reverse"
                    >
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div
                          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                        >
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-start-1 col-end-8 p-3 rounded-lg">
                    <div class="flex flex-row items-center">
                      <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                      >
                        A
                      </div>
                      <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                      >
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              @submit.prevent="sendMessage"
              @keyup="sendMessage"
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

    <!-- <div v-for="msg in messages" :key="msg.date">
    </div> -->
    <p>State: {{ connected ? "Connected" : "Disconnected" }}</p>
  </div>
</template>

<script setup>
import { state } from "../../socket";
import { socket } from "../../socket";
import { useUsersStore } from "@/store/user";
import { computed, ref, onMounted } from "vue";

const connected = computed(() => {
  return state.connected;
});

const profile = useUsersStore();

const text = ref("");

const messages = ref([]);

onMounted(() => {
  socket.on("chat message", (msg) => {
    messages.value.push(msg);
  });
  console.log(messages.value);
});
onMounted(async () => {
  await profile.getProfile();
});

const sendMessage = async () => {
  socket.emit("chat message", { text: text.value });
  text.value = "";
};
</script>
