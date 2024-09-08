<template>
  <!-- component -->
  <div class="w-full h-screen">
    <!-- <button
      v-if="showMenu"
      @click="toggleMenu"
      class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
    >
      <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-300" />
    </button>
    <main>
      <div class="flex flex-no-wrap">
        <div
          style="min-height: 716px"
          class="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
        >
          <div class="px-8">
            <div class="h-16 w-full flex items-center space-x-4">
              <font-awesome-icon
                :icon="['fas', 'comment']"
                class="text-3xl text-[#07d884]"
              />
              <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
            </div>
            <ul class="mt-12">
              <li
                class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
              >
                <a
                  href="javascript:void(0)"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'gauge']" />
                  <span class="text-sm ml-2">Dashboard</span>
                </a>
              </li>
              <nuxt-link to="/users">
                <li
                  class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
                >
                  <p
                    class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <font-awesome-icon :icon="['fas', 'user']" />
                    <span class="text-sm ml-2">Users</span>
                  </p>
                  <div
                    class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                  >
                    8
                  </div>
                </li>
              </nuxt-link>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'message']" />
                  <span class="text-sm ml-2">Messages</span>
                </p>
                <div
                  class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                >
                  5
                </div>
              </li>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'bell']" />
                  <span class="text-sm ml-2">Notifications</span>
                </p>
                <div
                  class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                >
                  5
                </div>
              </li>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'gear']" />
                  <span class="text-sm ml-2">Settings</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-if="showMenu"
          class="w-64 z-40 absolute h-screen bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <button
            @click="toggleMenu"
            class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
          >
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-gray-300" />
          </button>
          <div class="px-8">
            <div class="h-16 w-full flex items-center space-x-4">
              <font-awesome-icon
                :icon="['fas', 'comment']"
                class="text-3xl text-[#07d884]"
              />
              <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
            </div>
            <ul class="mt-12">
              <li
                class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'gauge']" />
                  <span class="text-sm ml-2">Dashboard</span>
                </p>
              </li>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <NuxtLink
                  to="users"
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'user']" />
                  <span class="text-sm ml-2">Users</span>
                </NuxtLink>
                <div
                  class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                >
                  8
                </div>
              </li>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'message']" />
                  <span class="text-sm ml-2">Messages</span>
                </p>
                <div
                  class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                >
                  5
                </div>
              </li>
              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'bell']" />
                  <span class="text-sm ml-2">Notifications</span>
                </p>
                <div
                  class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
                >
                  5
                </div>
              </li>

              <li
                class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center"
              >
                <p
                  class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <font-awesome-icon :icon="['fas', 'gear']" />
                  <span class="text-sm ml-2">Settings</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
          <profile />
          <div class="w-full h-full">
            <form-input />
            <div>
              <darshboard />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div> -->

    <button
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <font-awesome-icon
                :icon="['fas', 'gauge']"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <font-awesome-icon
                :icon="['fas', 'user']"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
              <span
                class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >10</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <font-awesome-icon
                :icon="['fas', 'message']"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <font-awesome-icon
                :icon="['fas', 'bell']"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
                />
                <path
                  d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
                />
                <path
                  d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64">
      <div
        class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
      >
        <profile />
        <form-input />
        <pie-chart />
      </div>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(true);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
