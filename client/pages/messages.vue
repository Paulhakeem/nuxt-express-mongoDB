<template>
  <main class="bg-gray-200 h-screen">
    <div>
      <!-- Second Layer -->
      <div>
        <!-- Chatbox-header -->
        <div class="flex gap-3 flex-wrap py-3 px-4 bg-gray-800">
          <!--Group of Images -->
          <div class="flex space-x-10 justify-evenly">
            <div class="h-16 w-full flex items-center space-x-4">
              <font-awesome-icon
                :icon="['fas', 'comment']"
                class="text-3xl text-[#07d884]"
              />
              <p class="text-2xl leading-6 text-[#07d884]">LetsChat</p>
            </div>
            <div
              class="flex items-center [&>*]:w-[2.7rem] [&>*]:h-[2.7rem] [&>*]:rounded-full [&>*]:bg-[#07d884] [&>*]:p-0.5 [&>*]:-ml-2 [&>*:hover]:z-20 [&>*:hover]:scale-105 [&>*>img]:h-full [&>*>img]:w-full [&>*>img]:rounded-full [&>*>img]:object-cover transition-all duration-300"
            >
              <div>
                <img src="../assets//img/user.jpg" alt="" />
              </div>
              <div>
                <img src="../assets//img/user.jpg" alt="" />
              </div>
              <div>
                <img src="../assets//img/user.jpg" alt="" />
              </div>
              <div>
                <img src="../assets//img/user.jpg" alt="" />
              </div>
              <div>
                <img src="../assets//img/user.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <!-- Chatbox-body -->
        <div class="bg-white-800 h-[29rem] relative">
          <!-- Chatbox-body message-box-->
          <div class="px-4 py-8">
            <div class="flex gap-3">
              <!-- Icon image -->
              <div class="w-12 h-12 rounded-full bg-[#07d884] p-0.5">
                <img
                  src="../assets/img/user.jpg"
                  alt=""
                  class="h-full w-full object-cover rounded-full"
                />
              </div>
              <div
                class="text-sm p-5 w-[75%] bg-slate-600 text-slate-100 rounded-lg relative before:absolute before:content-[''] before:w-3 before:h-3 before:bg-slate-600 before:rotate-45 before: before:-left-1 before:top-4"
              >
                <p>Hi There!</p>
                <p>
                  Looking to get Started? I can help answer to your personal
                  questions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
