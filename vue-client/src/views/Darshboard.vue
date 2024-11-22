<template>
  <!-- component -->
  <main>
    <div class="pb-10">
      <span
        class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        @click="openMenu"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="px-2 text-gray-800" />
      </span>
      <Profile />
    </div>

    <!-- SIDEBAR -->
   <transition name="slide">
    <div
      v-if="isMenuOpen"
      class="fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 sm:translate-x-0 z-50"
    >
      <div class="text-gray-100 text-xl">
        <div class="p-2.5 mt-1 flex items-center">
          <font-awesome-icon
            :icon="['fas', 'comment']"
            class="text-3xl text-[#07d884]"
          />
          <h1 class="font-bold text-gray-200 text-[15px] ml-3">LetsChat</h1>
          <font-awesome-icon
            @click="openMenu"
            :icon="['fas', 'xmark']"
            class="text-gray-300 text-2xl cursor-pointer ml-28 lg:hidden"
          />
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <font-awesome-icon
          :icon="['fas', 'gauge']"
          class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900"
        />
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</span>
      </div>

      <RouterLink to="/chat-body">
        <div
          class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
        >
          <font-awesome-icon
            :icon="['fas', 'message']"
            class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
          />
          <span class="text-[15px] ml-4 text-gray-200 font-bold">Messages</span>
          <span
            class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-200 bg-[#07d884] rounded-full"
            >3</span
          >
        </div>
      </RouterLink>

      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <font-awesome-icon
          :icon="['fas', 'bell']"
          class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <span class="text-[15px] ml-4 text-gray-200 font-bold"
          >Notifications</span
        >
        <span
          class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-200 bg-[#07d884] rounded-full"
          >3</span
        >
      </div>

      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600 text-white"
      >
        <font-awesome-icon
          :icon="['fas', 'right-from-bracket']"
          class="flex-shrink-0 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>
   </transition>
    <!-- END OF SIDEBAR -->
    <!-- DASHBOARD -->

    <div class="p-4 sm:ml-64 bg-gray-100 h-auto">
      <div class="p-4 rounded-lg">
        <Search />
        <Chart />

        <!-- users -->
        <div class="">
          <div v-if="loadUsers" class="">
            <Loading />
          </div>
          <div class="flex flex-wrap gap-6 justify-center">
            <div v-for="users in users" :key="users.id">
              <div
                class="flex gap-2 items-center bg-white w-full rounded-md mt-6 h-auto p-4 cursor-pointer"
              >
                <img
                  :src="users.imageURL"
                  alt="profile-image"
                  class="size-10 rounded-full object-cover border border-1 border-[#07d884]"
                />
                <div>
                  <p class="capitalize font-medium text-gray-600">
                    {{ users.name }}
                  </p>
                  <span class="text-sm text-gray-600">{{ users.email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Search from "@/components/Search.vue";
import Chart from "@/components/Chart.vue";
import Profile from "@/components/Profile.vue";
import Loading from "@/components/Loading.vue";
import { ref } from "vue";
import { socket } from "../../socket";

const isMenuOpen = ref(true);

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const users = ref([]);

const loadUsers = ref(true);

socket.on("users", (joinusers) => {
  try {
    users.value = joinusers;
  } catch (error) {
    console.log(error);
  } finally {
    loadUsers.value = false;
  }
});
</script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}


.slide-enter {
  transform: translateX(-300px);
}

.slide-enter-active {
  transition: all .3s ease-in;
}

.slide-leave-active {
  transition: all .3s ease-in;
}
.slide-leave-to {
  transform: translateX(-300px);
}
</style>
