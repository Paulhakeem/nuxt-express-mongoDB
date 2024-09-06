<template>
  <main>
    <div class="flex justify-center text-center mt-4">
      <form
        @submit.prevent="getUser"
        @keyup.enter="getUser"
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
            v-model="search"
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

    <div
      class="justify-center max-w-md m-auto bg-gray-800 h-auto mt-3 rounded-md"
    >
      <h1 class="text-md font-medium text-gray-200 pl-4">Search:</h1>
      <!-- user search response -->
      <div v-if="users" class="py-4 pl-4 text-sm cursor-pointer">
        <h4 class="text-gray-200 font-medium">{{ users.name }}</h4>
        <p class="text-xs text-gray-400">{{ users.email }}</p>
      </div>
      <p class="text-red-400 italic pl-4 pb-2">{{errorMessage}}</p>
    </div>
  </main>
</template>

<script setup>
const { findUserByName } = findUser();

const search = useState("search", () => "");

const errorMessage = useState("errorMessage", () => "")

const users = useState("user", () => []);

const getUser = async () => {
  try {
    const searchUser = await findUserByName(search.value);
    if (!searchUser) {
      const error = new Error("User Not Found!!😥")
      errorMessage.value = error
    }
    users.value = searchUser.data.user;
  } catch (error) {
    console.log(error.message);
    
  }
};
</script>
