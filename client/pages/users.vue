<template>
  <main class="flex flex-nowrap gap-4">
    <div
      v-bind="menu"
      class="relative h-screen w-72 max-w-[20rem] p-4 text-gray-300 shadow-xl bg-gray-800"
    >
      <font-awesome-icon
        @click="taggleMenu"
        :icon="['fas', 'xmark']"
        class="hidden float-right text-xl cursor-pointer"
      />
      <div class="h-16 w-full flex items-center space-x-4 ml-4">
        <font-awesome-icon
          :icon="['fas', 'comment']"
          class="text-3xl text-[#07d884]"
        />
        <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
      </div>
      <nav
        class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700"
      >
        <nuxt-link to="/home">
          <div
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div class="grid mr-4 place-items-center text-sm">
              <font-awesome-icon :icon="['fas', 'gauge']" />
            </div>
            <p class="text-sm">Dashboard</p>
          </div>
        </nuxt-link>
        <div
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="grid mr-4 place-items-center">
            <font-awesome-icon :icon="['fas', 'message']" />
          </div>
          <p class="text-sm">Messages</p>
          <div class="grid ml-auto place-items-center justify-self-end">
            <div
              class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900"
            >
              <span class="">14</span>
            </div>
          </div>
        </div>
        <div
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="grid mr-4 place-items-center">
            <font-awesome-icon :icon="['fas', 'bell']" />
          </div>
          <p class="text-sm">Notifications</p>
          <div class="grid ml-auto place-items-center justify-self-end">
            <div
              class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900"
            >
              <span class="">14</span>
            </div>
          </div>
        </div>

        <div
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="grid mr-4 place-items-center">
            <font-awesome-icon :icon="['fas', 'gear']" />
          </div>
          <p class="text-sm">Settings</p>
        </div>
        <div
          role="button"
          class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          <div class="grid mr-4 place-items-center">
            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
          </div>
          <p class="text-sm">Log Out</p>
        </div>
      </nav>
    </div>

    <!--  -->
    <div class="bg-[#f4f5f7] mt-8 p-6 w-full">
      <div v-if="isLoading" class="text-center justify-center pt-4">
        <loading />
      </div>
      <div v-for="user in allUsers" :key="user.id" class="border-b-2">
        <ul
          class="flex flex-wrap justify-between space-x-6 border-gray-300 p-2"
        >
          <li class="flex space-x-3">
            <img
              :src="user.imageURL"
              alt="user"
              class="size-12 rounded-full object-cover"
            />
            <div>
              <h1 class="text-[#2c2e32] font-medium first-letter:uppercase">
                {{ user.name }}
              </h1>
              <p class="text-xs text-[#8f9aac]">{{ user.email }}</p>
            </div>
          </li>
          <div class="flex gap-2 pt-2">
            <span class="text-sm text-gray-500">Joined:</span>
            <p class="text-[#2c2e32] text-sm">{{ user.date }}</p>
          </div>
          <button
            class="bg-gray-800 p-2 w-42 uppercase text-[#07d884] text-sm rounded-md hover:bg-[#f4f5f7] hover:border-2 hover:border-gray-800 hover:text-gray-800"
          >
            send message
          </button>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
const allUsers = useState("users", () => {});
const isLoading = ref(true);
const menu = ref(false);
onMounted(async () => {
  try {
    const data = await $fetch("/api/users");
    const users = await data.res.data.users;
    if (users) {
      allUsers.value = users;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    isLoading.value = false;
  }
});

const taggleMenu = () => {
  menu.value = !menu.value;
};
</script>

<style lang="scss" scoped></style>
