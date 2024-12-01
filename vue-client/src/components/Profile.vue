<template>
  <div>
    <div class="float-right mr-3 my-2">
      <button @click="toggleModal">
        <img
          class="rounded-full size-10 object-cover"
          :src="profile.user.imageURL"
          alt="profile"
        />
      </button>
    </div>

    <UserModal :modalActive="modalActive" @close-modal="toggleModal">
      <div class="flex items-center justify-center">
        <form>
          <input :file="file" type="file"/>
          <button @click="uploadProfile" type="submit">Upload Image</button>
        </form>
      </div>
      <!--  -->
      <div>
        <div class="text-center pt-3">
          <h3 class="text-xl font-semibold text-gray-800 capitalize">
            {{ profile.user.name }}
          </h3>
          <p class="text-sm text-gray-500">{{ profile.user.email }}</p>
        </div>

        <div class="pt-5">
          <div class="flex gap-2 items-center pb-2 cursor-pointer">
            <font-awesome-icon
              :icon="['fas', 'message']"
              class="text-[#07d884]"
            />
            <p class="text-gray-800">Inbox</p>
            <div class="items-center font-medium">0</div>
          </div>

          <div class="flex gap-2 items-center pb-2 cursor-pointer">
            <font-awesome-icon :icon="['fas', 'bell']" class="text-[#07d884]" />
            <p class="text-gray-800">Notifications</p>
            <div class="items-center font-medium">0</div>
          </div>

          <div class="text-center pt-6">
            <button
              class="rounded-md bg-slate-800 py-2 px-8 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </UserModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import UserModal from "./UserModal.vue";
import { useUsersStore } from "@/store/user";
import { socket } from "../../socket";

const modalActive = ref(null);
const file = ref(null)

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const profile = useUsersStore();

onMounted(async () => {
  await profile.getProfile();
});

const uploadProfile = async()=> {
  socket.emit("uploadImage", {
    imageURL: file.value
  })
}
</script>

<style lang="scss" scoped></style>
