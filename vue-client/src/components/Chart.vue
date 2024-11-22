<template>
  <!---===================== FIRST ROW CONTAINING THE  STATS CARD STARTS HERE =============================-->
  <div class="flex justify-center bg-gray-100 py-10 p-14">
    <!---== Second Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-[#07d884] flex items-center justify-between">
          <p class="mr-0 text-white text-lg pl-5 uppercase">users joined</p>
        </div>
        <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5">19,694</p>
      </div>
    </div>

    <!---== Third Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-gray-700 flex items-center justify-between">
          <p class="mr-0 text-white text-lg pl-5 uppercase">users online</p>
        </div>
        <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5">711</p>
      </div>
    </div>
    <!---== Third Stats Container ====--->

    <!---== Fourth Stats Container ====--->
    <div class="container mx-auto pr-2">
      <div
        class="w-64 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer"
      >
        <div class="h-10 bg-gray-800 flex items-center justify-between">
          <p class="mr-0 text-white text-lg pl-5 uppercase">total messages</p>
        </div>
        <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
          <p>TOTAL</p>
        </div>
        <p class="py-4 text-3xl ml-5">0</p>
      </div>
    </div>
    <!---== Fourth Stats Container ====--->
  </div>
</template>

<script setup></script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #chart {
    justify-items: center;
    margin-left: 5px;
    margin-right: 5px;
  }
  #performance {
    width: 150%;
    flex-wrap: nowrap;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
</style>
