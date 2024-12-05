<template>
  <div>
    <div class="float-right mr-3 my-2">
      <button @click="toggleModal">
        <img
          class="rounded-full size-10 object-cover"
          :src="profile.user.profileImage"
          alt="profile"
        />
      </button>
    </div>

    <UserModal :modalActive="modalActive" @close-modal="toggleModal">
      <form @submit.prevent="uploadProfile" method="POST">
      <div class="flex items-center justify-center">
       
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            class="hidden"
          />
          <label
            for="profileImageInput"
            class="size-24 rounded-full border-2 border-dashed border-gray-300 flex justify-center items-center cursor-pointer bg-no-repeat bg-center bg-cover"
          >
            <img
              :src="profile.user.profileImage"
              alt="profile-image"
              class="size-20 object-cover rounded-full"
            />
          </label>
       
      </div>
      <!--  -->
      <div>
        <div class="text-center">
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
    </form>
    </UserModal>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import UserModal from "./UserModal.vue";
import { useUsersStore } from "@/store/user";
import { socket } from "../../socket";

let toast = useToast();

const modalActive = ref(null);
const profileImage = ref(
  "https://img.freepik.com/free-photo/african-american-student-walking-street_1303-12700.jpg?t=st=1733058626~exp=1733062226~hmac=26ed34dc1f08e424f3c36c0623b7e1f516d9cb1ee2668ec435bb862a04c3d62d&w=826"
);

const toggleModal = () => {
  modalActive.value = !modalActive.value;
};

const profile = useUsersStore();

onMounted(async () => {
  await profile.getProfile();
});

const uploadProfile = async () => {
  socket.emit("profileImageUpdated", profile.user._id, profileImage.value);
};

socket.on("userUpdated", (updatedUser) => {
  console.log(updatedUser);
  return toast.success("Profile picture updated!");
});
</script>

<style lang="scss" scoped></style>
