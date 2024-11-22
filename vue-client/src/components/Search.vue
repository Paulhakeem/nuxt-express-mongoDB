<template>
  <main>
    <div class="flex justify-center text-center mt-4">
      <form
        @keyup="findUserByName"
        @submit.prevent="findUserByName"
        class="flex items-center max-w-sm mx-auto"
      >
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass']"
              class="text-gray-500"
            />
          </div>
          <input
            v-model="searchName"
            type="text"
            id="simple-search"
            class="text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 outline-none border border-1 border-gray-400"
            placeholder="Search user name..."
            required
          />
        </div>
        <button
          type="submit"
          class="text-center p-2.5 w-32 ms-2 text-sm font-medium text-[#07d884] bg-gray-800 rounded-lg"
        >
          <span>Search</span>
        </button>
      </form>
    </div>

    <!-- SEARCH FOR A USER -->
    <transition name="pop-fade">
      <div
        id="search-container"
        v-if="isUserExist"
        class="justify-center max-w-md m-auto bg-gray-800 h-auto mt-3 rounded-md"
      >
        <h1 class="text-md font-medium text-gray-200 pl-4">Search:</h1>
        <div class="py-4 pl-4 text-sm cursor-pointer">
          <div class="flex gap-4 items-center">
            <img
              id="img"
              :src="user.imageURL"
              alt="profile-image"
              class="size-10 rounded-full object-cover"
            />
            <div>
              <h4 class="text-gray-200 font-medium capitalize">
                {{ user.name }}
              </h4>
              <p class="text-xs text-gray-400">{{ user.email }}</p>
            </div>

            <!-- SEND MESSAGE TO A SPECIFIC USER -->
            <div id="chatIcons" class="flex gap-4 pl-32 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Popover>
                      <PopoverTrigger>
                        <font-awesome-icon
                          :icon="['fas', 'message']"
                          class="text-lg text-gray-300"
                      /></PopoverTrigger>
                      <PopoverContent>
                        <form @submit.prevent="chatUser" class="w-64">
                          <div class="relative w-full min-w-[200px]">
                            <textarea
                              v-model="message"
                              class="peer h-full min-h-[50px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                              placeholder="Write your text "
                            ></textarea>
                            <label
                              class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                            >
                              Message
                            </label>
                          </div>

                          <button
                            class="rounded-md bg-slate-700 py-2 px-4 capitalize items-right border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            send
                          </button>
                        </form>
                      </PopoverContent>
                    </Popover>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>send message</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div>
                <font-awesome-icon
                  :icon="['fas', 'thumbs-up']"
                  class="text-lg text-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    
  </main>
</template>

<script setup>
import { socket } from "../../socket";
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const searchName = ref("");
const user = ref([]);
const isUserExist = ref(false);
const $toast = useToast();
const message = ref("");

// SEARCH USER
const findUserByName = async () => {
  try {
    const searchUser = await axios.get(
      `http://localhost:5000/api/user/${searchName.value}`
    );
    if (searchUser) {
      user.value = searchUser.data.data.user;
    }
  } catch (error) {
    console.error("Error searching users:", error.message);
  } finally {
    isUserExist.value = true;
  }
};

// PRIVATE CHAT
const chatUser = async () => {
  try {
    if (user._id === searchName._id) {
      socket.emit("private-text", { message: message.value });
      message.value = "";
      return $toast.success("Message sent!");
    }
   
  } catch (error) {
    return $toast.error("Message Not Sent!");
  }
};
</script>

<style scoped>
.pop-fade-enter-active {
  transition: all 0.3s ease-out;
}
.pop-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.pop-fade-enter-from,
.pop-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media only screen and (max-width: 600px) {
  .search-container {
    width: 100%;
  }
  .img {
    object-fit: cover;
    border-radius: 9999px;
    height: 50%;
    width: 50%;
  }
  .chatIcons {
    padding-left: 5px;
  }
}

@media only screen and (min-width: 600px) {
  .search-container {
    width: 100%;
    background-color: aquamarine;
  }
  .img {
    object-fit: cover;
    border-radius: 9999px;
    height: 50%;
    width: 50%;
  }
  .chatIcons {
    padding-left: 5px;
  }
}
@media only screen and (min-width: 768px) {
  .search-container {
    width: 100%;
  }
  .img {
    object-fit: cover;
    border-radius: 9999px;
    height: 50%;
    width: 50%;
  }
  .chatIcons {
    padding-left: 5px;
  }
}
@media only screen and (min-width: 992px) {
  .chatIcons {
    padding-left: 5px;
  }
}
</style>
