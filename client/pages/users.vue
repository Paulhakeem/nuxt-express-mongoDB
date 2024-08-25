<template>
  <div class="bg-[#f4f5f7] mt-8 p-6">
    <div v-if="isLoading" class="text-center justify-center pt-4">
      <loading />
    </div>
    <div v-for="user in allUsers" :key="user.id" class="border-b-2">
      <ul class="flex flex-wrap justify-between space-x-6 border-gray-300 p-2">
        <li class="flex space-x-3">
            <font-awesome-icon :icon="['fas', 'user']" class="text-3xl pt-2"/>
          <div>
            <h1 class="text-[#2c2e32] font-medium first-letter:uppercase">
              {{ user.name }}
            </h1>
            <p class="text-xs text-[#8f9aac]">{{ user.email }}</p>
          </div>
        </li>
        <div class="flex gap-2 pt-2">
            <span class="text-sm text-gray-500">Joined:</span>
            <p class="text-[#2c2e32] text-sm">4/7/2024</p>
        </div>
        <button
          class="bg-gray-800 p-2 w-42 uppercase text-[#07d884] text-sm rounded-sm"
        >
          send message
        </button>
      </ul>
    </div>
  </div>
</template>

<script setup>
const allUsers = useState("users", () => {});
const isLoading = ref(true);
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
</script>

<style lang="scss" scoped></style>
