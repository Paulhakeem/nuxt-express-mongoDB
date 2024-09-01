<template>
  <transition name="modal-outer">
    <div
      class="bg-black z-50 bg-opacity-25 top-0 left-0 w-full h-screen absolute flex justify-center"
    >
      <transition name="modal-inner">
        <div class="w-[20em] bg-white self-start mt-32 p-4 rounded-md">
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup></script>

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
