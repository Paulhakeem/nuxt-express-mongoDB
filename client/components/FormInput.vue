<template>
  <main>
    <div class="flex justify-center text-center mt-14">
      <form
        @submit.prevent="getUser"
        class="flex items-center max-w-sm mx-auto"
      >
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            v-model="search"
            type="text"
            id="simple-search"
            class="text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 outline-none"
            placeholder="Search user name..."
            required
          />
        </div>
        <button
          type="submit"
          class="text-center p-2.5 w-32 ms-2 text-sm font-medium text-white bg-[#07d884] rounded-lg"
        >
          <span>Search</span>
        </button>
      </form>
    </div>
    <!-- search user -->
    <div class="max-w-md m-auto">
      <div class="pt-4 flex space-x-4">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="#888888"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M8.5 9.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0m9.758 7.484A7.985 7.985 0 0 1 12 20a7.985 7.985 0 0 1-6.258-3.016C7.363 15.821 9.575 15 12 15s4.637.821 6.258 1.984"
              />
            </g>
          </svg>
        <div>
          <p class="text-[#07d884] text-md first-letter:uppercase font-medium">{{users.name}}</p>
        <span class="text-gray-300">{{users.email}}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { findUserByName } = findUser();

const search = useState("search", () => "");

const users = useState("user", () => []);

const getUser = async () => {
  try {
    const searchUser = await findUserByName(search.value);
    users.value = searchUser.data.user;
  } catch (error) {}
};
</script>
