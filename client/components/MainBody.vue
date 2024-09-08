<template>
  <!-- component -->
  <main>
    <div>
      <button
        @click="toggleMenu"
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="text-gray-800 text-2xl"
        />
      </button>
      <!-- profile -->
      <profile />
    </div>

    <aside
      v-if="showMenu"
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <div class="h-16 w-full flex items-center space-x-4 ml-4">
          <font-awesome-icon
            :icon="['fas', 'comment']"
            class="text-3xl text-[#07d884]"
          />
          <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
        </div>
        <ul class="space-y-2 ml-4">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 group"
            >
              <font-awesome-icon
                :icon="['fas', 'gauge']"
                class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900"
              />
              <span class="ms-3">Dashboard</span>
            </a>
          </li>
          <nuxt-link to="/users">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 group"
              >
                <font-awesome-icon
                  :icon="['fas', 'user']"
                  class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-800"
                />
                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full"
                  >10</span
                >
              </a>
            </li>
          </nuxt-link>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 group"
            >
              <font-awesome-icon
                :icon="['fas', 'message']"
                class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Messages</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-800 bg-blue-100 rounded-full"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 group"
            >
              <font-awesome-icon
                :icon="['fas', 'bell']"
                class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-gray-800 bg-blue-100 rounded-full"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 group"
            >
              <font-awesome-icon
                :icon="['fas', 'gear']"
                class="flex-shrink-0 text-gray-300 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 group"
            >
              <font-awesome-icon
                :icon="['fas', 'right-from-bracket']"
                class="flex-shrink-0 text-gray-300 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap text-gray-300"
                >Sign Up</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64 bg-gray-100 h-screen">
      <div class="p-4 rounded-lg">
        <form-input />
        <pie-chart />
      </div>
    </div>
  </main>
</template>

<script setup>
const showMenu = ref(true);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  console.log('hello');
  
};
</script>
