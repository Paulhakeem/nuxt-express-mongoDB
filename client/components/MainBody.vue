<template>
  <main>
    
    <aside class="float-left">
      <div
        class="rounded-r bg-[#090c28] xl:hidden flex justify-between w-full p-6 items-center"
      >
        <!-- MOBILE BAR -->
        <div class="flex justify-between items-center space-x-3">
          <font-awesome-icon
            :icon="['fas', 'comments']"
            class="text-[#07d884] text-3xl"
          />
          <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
        </div>
        <div
          v-bind="showmenu"
          aria-label="toggler"
          class="flex justify-center items-center"
        >
          <button
            @click="toggleMenu"
            id="open"
            class="hidden focus:outline-none focus:ring-2"
          >
            <font-awesome-icon
              :icon="['fas', 'bars']"
              class="text-white text-2xl"
            />
          </button>
          <button
            @click="toggleMenu"
            aria-label="close"
            id="close"
            class="focus:outline-none focus:ring-2"
          >
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="text-white text-2xl"
            />
          </button>
        </div>
      </div>

      <!-- MAIN SCREEN BAR -->
      <div
        id="Main"
        class="xl:rounded-r transform xl:translate-x-0 ease-in-out transition duration-500 flex justify-start items-start w-full sm:w-64 bg-gray-900 flex-col h-screen"
      >
        <div class="hidden xl:flex justify-start p-6 items-center space-x-3">
          <font-awesome-icon
            :icon="['fas', 'comments']"
            class="text-[#07d884] text-3xl"
          />
          <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
        </div>
        <div
          class="mt-6 flex flex-col justify-start items-center pl-4 w-full border-gray-600 border-b space-y-3 pb-5"
        >
          <button
            class="flex jusitfy-start items-center space-x-5 w-full focus:outline-none focus:text-[#07d884] text-white rounded"
          >
            <font-awesome-icon :icon="['fas', 'house']" />
            <p class="text-base leading-4">Dashboard</p>
          </button>
          <button
            class="flex jusitfy-start items-center w-full space-x-6 focus:outline-none text-white focus:text-[#07d884] rounded"
          >
            <font-awesome-icon :icon="['fas', 'user']" />
            <p class="text-base leading-4">Users</p>
          </button>
        </div>
        <div
          class="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full"
        >
          <button
            onclick="showMenu1(true)"
            class="focus:outline-none focus:text-[#07d884] text-left text-white flex justify-between items-center w-full py-5 space-x-14"
          >
            <p class="text-sm leading-5 uppercase">Profile Overview</p>
            <font-awesome-icon :icon="['fas', 'chevron-up']" class="pt-1" />
          </button>
          <div
            id="menu1"
            class="flex justify-start flex-col w-full md:w-auto items-start pb-1"
          >
            <button
              class="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#07d884] focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
            >
              <font-awesome-icon :icon="['fas', 'message']" />
              <p class="text-base leading-4">Messages</p>
            </button>

            <button
              class="flex justify-start items-center space-x-6 hover:text-white focus:bg-[#07d884] focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52"
            >
              <font-awesome-icon :icon="['fas', 'bell']" />
              <p class="text-base leading-4">Notifications</p>
            </button>
          </div>
        </div>

        <div
          class="flex flex-col justify-between items-center h-full pb-6 px-6 w-full"
        >
          <!--  -->
          <div class="flex justify-between items-center w-full pt-32">
            <div class="flex justify-center items-center space-x-2">
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
            <font-awesome-icon :icon="['fas', 'gear']" class="text-white" />
          </div>
        </div>
      </div>
    </aside>
  </main>
</template>

<script setup>
const showMenu1 = ref(false);

const toggleMenu = () => {
  showMenu1.value = !showMenu1.value;
};
</script>
