<template>
  <div>
    <!-- component -->
    <div class="py-16 px-10">
      <div id="chart" class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
        <div
          id="performance"
          class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
        >
          <div
            class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"
          >
            <svg
              class="w-32 h-32 transform translate-x-1 translate-y-1"
              x-cloak
              aria-hidden="true"
            >
              <circle
                class="text-gray-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
              <circle
                class="text-[#07d884]"
                stroke-width="10"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="(10 / 100) * circumference"
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
            </svg>
            <span
              class="absolute text-2xl text-[#07d884]"
              x-text="`${percent}%`"
            >
              80%
            </span>
          </div>
            <p class="ml-10 text-gray-600 sm:text-xl">Insights</p>

            <span
              class="ml-auto text-xl font-medium text-[#07d884] sm:block"
              >+20%</span
            >
        </div>
        <!-- messages -->
        <div
          id="performance"
          class="flex items-center flex-wrap max-w-md px-10 bg-white shadow-xl rounded-2xl h-20"
          x-data="{ circumference: 50 * 2 * Math.PI, percent: 90 }"
        >
          <div
            class="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full"
          >
            <svg
              class="w-32 h-32 transform translate-x-1 translate-y-1"
              x-cloak
              aria-hidden="true"
            >
              <circle
                class="text-gray-300"
                stroke-width="10"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
              <circle
                class="text-gray-800"
                stroke-width="10"
                :stroke-dasharray="circumference"
                :stroke-dashoffset="(90 / 100) * circumference"
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
            </svg>
            <span class="absolute text-2xl text-gray-800" x-text="${percent}%"
              >60%</span
            >
          </div>
          <p class="ml-10 text-gray-600 sm:text-xl">Messages</p>

          <span
            class="ml-auto text-xl font-medium text-gray-800 sm:block"
            >+10%</span
          >
        </div>
      </div>
    </div>
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
