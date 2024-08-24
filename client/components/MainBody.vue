<template>
  <!-- component -->
  <div class="w-full h-screen">
    <dh-component>
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
            <div class="flex space-x-4 pt-20">
              <div>
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div class="flex justify-start flex-col items-start">
                <p class="cursor-pointer text-sm leading-5 text-white">
                  Alexis Enache
                </p>
                <p class="cursor-pointer text-xs leading-3 text-gray-300">
                  alexis81@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- OPEN CLOSE MENU -->
        <div
          class="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <button
            aria-label="toggle sidebar"
            id="openSideBar"
            class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800"
            onclick=""
          >
            <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-300" />
          </button>
          <button
            aria-label="Close sidebar"
            id="closeSideBar"
            class="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white"
            onclick=""
          >
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-gray-300" />
          </button>
          <!-- OPEN CLOSE MENU ENDS-->

          <!-- MOBILE VIEW -->
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
            <div class="flex space-x-4 pt-20">
              <div>
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div class="flex justify-start flex-col items-start">
                <p class="cursor-pointer text-sm leading-5 text-white">
                  Alexis Enache
                </p>
                <p class="cursor-pointer text-xs leading-3 text-gray-300">
                  alexis81@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Sidebar ends -->

        <!-- CONTENT -->
        <div class="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
          <div class="w-full h-full">
            <form-input />

            <div>
              <user-home />
            </div>
          </div>
        </div>
      </div>
    </dh-component>
  </div>
</template>

<script setup>
const showMenu1 = ref(false);

const toggleMenu = () => {
  showMenu1.value = !showMenu1.value;
};
</script>
