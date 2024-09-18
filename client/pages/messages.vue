<template>
  <main class="">
    <div>
      <!-- Second Layer -->
      <div>
        <!-- Chatbox-header -->
        <div class="flex gap-3 flex-wrap py-3 px-4 bg-gray-800 top-0 sticky">
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

        <div
          class="text-center pt-4 capitalize text-gray-800 font-semibold text-xl"
        >
          <h4>group chat</h4>
        </div>
        <!-- Chatbox-body -->
        <div class="bg-white h-full">
          <div class="flex h-screen antialiased text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
              <div class="flex flex-col flex-auto h-full p-6">
                <div
                  id="chat-body"
                  class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
                >
                  <div class="flex flex-col h-full overflow-x-auto mb-4">
                    <div class="flex flex-col h-full">
                      <div class="grid grid-cols-12 gap-y-2">
                        <div
                          id="message"
                          class="col-start-1 col-end-8 p-3 rounded-lg"
                        >
                          <div class="flex flex-row items-center">
                            <div
                              class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                            >
                              A
                            </div>
                            <div
                              id="text"
                              class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                            >
                              <div>
                                {{ inbox}}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-start-6 col-end-13 p-3 rounded-lg">
                          <div
                            class="flex items-center justify-start flex-row-reverse"
                          >
                            <div
                              class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                            >
                              A
                            </div>
                            <div
                              class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                            >
                              <div>I'm ok what about you?</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    @submit.prevent="sendMessage"
                    class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 bottom-0 sticky"
                  >
                    <div>
                      <button
                        class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                      >
                        <font-awesome-icon :icon="['fas', 'paperclip']" />
                      </button>
                    </div>
                    <div class="flex-grow ml-4">
                      <div class="relative w-full">
                        <input
                          v-model="text"
                          type="text"
                          class="flex w-full border rounded-xl focus:outline-none focus:border-[#07d884] pl-4 h-10"
                        />
                        <button
                          class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                        >
                          <font-awesome-icon :icon="['fas', 'link']" />
                        </button>
                      </div>
                    </div>
                    <div class="ml-4">
                      <button
                        class="flex items-center justify-center bg-gray-800 hover:bg-gray-600 rounded-xl text-[#07d884] px-4 py-1 flex-shrink-0"
                      >
                        <span>Send</span>
                        <span class="ml-2">
                          <font-awesome-icon :icon="['fas', 'paper-plane']" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </main>
</template>

<script setup>
const { createMessage, showMessages, deleteMessages } = messages();

const text = useState("text", () => "");
const inbox = useState("inbox", () => 'hello');

const sendMessage = async () => {
  await createMessage(text.value)
    .then((result) => {
      console.log("message sent");
      text.value = "";
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// get messages
onMounted(async () => {
  const res = await showMessages();
  if (res) {
    console.log(res);
    
  }
});
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  #chat-body {
    width: 100%;
  }
  #message {
    width: 180%;
  }
  #text {
    padding: 1.3em;
  }
}

@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 992px) {
}
</style>
