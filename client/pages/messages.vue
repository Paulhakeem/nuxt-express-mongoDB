<template>
  <div
    class="flex flex-col items-center justify-center w-screen min-h-screen p-10"
  >
    <div
      class="flex flex-col flex-grow w-full max-w-4xl bg-white shadow-xl rounded-lg"
    >
      <div class="flex flex-col flex-grow h-0 p-4">
        <div class="flex w-full mt-2 space-x-3 max-w-xs">
          <img
            src="../assets/img/user.jpg"
            class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 object-cover"
          />
          <div>
            <div class="bg-gray-800 p-3 rounded-r-lg rounded-bl-lg">
              <p class="text-sm text-gray-200 text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
        </div>

        <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
          <div>
            <div class="bg-[#07d884] text-white p-3 rounded-l-lg rounded-br-lg">
              <p class="text-sm text-gray-200 text-pretty">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <img
            src="../assets/img/user.jpg"
            class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 object-cover"
          />
        </div>
      </div>

      <div class="flex w-full mt-2 space-x-3 max-w-xs">
        <img
          src="../assets/img/user.jpg"
          class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 object-cover"
        />
        <div>
          <div class="bg-gray-800 p-3 rounded-r-lg rounded-bl-lg">
            <p class="text-sm text-gray-200 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <span class="text-xs text-gray-500 leading-none">2 min ago</span>
        </div>
      </div>

      <div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
          <div class="bg-[#07d884] text-white p-3 rounded-l-lg rounded-br-lg">
            <p class="text-sm text-gray-200 text-pretty">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <span class="text-xs text-gray-500 leading-none">2 min ago</span>
        </div>
        <img
          src="../assets/img/user.jpg"
          class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 object-cover"
        />
      </div>

      <form class="w-full mx-auto pt-4 bg-gray-600">
        <div class="relative mx-4 mb-3">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
          </div>
          <input
            type="text"
            class=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            required
          />
          <button
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-[#07d884] focus:ring-4 font-medium rounded-lg text-sm px-4 py-2"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
