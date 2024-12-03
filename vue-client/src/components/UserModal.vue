<template>
    <transition name="modal-outer">
      <div
        v-show="modalActive"
        class="bg-black z-50 bg-opacity-25 top-0 left-0 w-full h-screen absolute flex justify-center"
      >
        <transition name="modal-inner">
          <div
            v-if="modalActive"
            class="w-[20em] bg-white self-start mt-28 p-4 rounded-md"
          >
            <div class="flex justify-between">
              <font-awesome-icon
                @click="$emit('close-modal')"
                :icon="['fas', 'xmark']"
                class="cursor-pointer"
              />
            </div>
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </template>
  
  <script setup>
  defineEmits(["close-modal"]);
  defineProps({
    modalActive: {
      type: Boolean,
      default: false,
    },
  });
  </script>
  
  <style>
  .modal-outer-enter-active,
  .modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-outer-enter-from,
  .modal-outer-leave-to {
    opacity: 0;
  }
  
  .modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
  }
  
  .modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
  }
  
  .modal-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }
  
  .modal-inner-leave-to {
    transform: scale(0.8);
  }
  </style>
  