<template>
    <div>
      <div class="float-right mr-3 my-2">
        <button @click="toggleModal">
          <img
            class="rounded-full size-10 object-cover"
            src="../assets/img/user.jpg"
            alt="avatar"
          />
        </button>
      </div>
  
      <UserModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="flex items-center justify-center">
          <div class="relative">
            <img
              class="rounded-full size-28 object-cover"
              id="profileImage"
              src="../assets//images/space.jpg"
              alt="Profile Image"
            />
            <div
              class="absolute inset-0 bg-gray-500 rounded-full opacity-50"
            ></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <label for="profileImageInput" class="cursor-pointer">
                <font-awesome-icon :icon="['fas', 'image']" />
              </label>
              <input
                type="file"
                id="profileImageInput"
                class="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <!--  -->
        <div>
          <div class="text-center pt-3">
            <h3 class="text-xl font-semibold text-gray-800 capitalize">
            Paul
            </h3>
            <p class="text-sm text-gray-500">
             paul@gmail.com
            </p>
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
  import { ref } from 'vue';

  import UserModal from './UserModal.vue';
  
  const modalActive = ref(null);
  
  const toggleModal = () => {
    modalActive.value = !modalActive.value;
  };
  

  </script>
  
  <style lang="scss" scoped></style>
  