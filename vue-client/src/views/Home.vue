<template>
  <header
    class="bg-[url('../assets/images/space.jpg')] opacity bg-cover bg-no-repeat bg-center h-screen bg-fixed"
  >
    <main
      class="flex flex-wrap justify-around pt-20 pb-20 sm:flex-wrap md:flex-wrap"
    >
      <div class="relative flex h-80 w-2/5 items-center justify-center">
        <div class="text-pretty">
          <h2 class="text-2xl text-white font-semibold font-Roboto">
            Track Your Users
          </h2>
          <div class="text-white pt-8 text-md">
            <p class="">
              We provide services for mojar cargo distributors, corporates
              shippers and individuals, includes transportations of animals. We
              have specialist for cargo handling terminals in all major airpots.
            </p>
          </div>
          <div class="flex flex-wrap gap-6 pt-8 mb-4">
            <input
              class="flex items-center h-9 px-4 w-72 bg-gray-200 rounded focus:outline-none focus:ring-2"
              type="text"
              placeholder="Enter user name"
            />
            <button
              class="h-10 w-32 bg-[#07d884] rounded font-semibold text-sm text-blue-100"
            >
              Track
            </button>
          </div>
        </div>
      </div>

      <!-- form content -->
      <div class="w-80 h-auto bg-black opacity-70 justify-center items-center">
        <div class="pt-8 mb-4">
          <h4 class="text-center text-white font-semibold">Login</h4>
          <div class="flex flex-col justify-center items-center pt-6">
            <form @submit.prevent="signIn" method="post">
              <label
                class="font-semibold text-xs text-white"
                for="usernameField"
                >Email</label
              >
              <input
                v-model="email"
                class="flex items-center h-9 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="email"
              />
              <label
                class="font-semibold text-xs mt-3 text-white"
                for="passwordField"
                >Password</label
              >
              <input
                v-model="password"
                class="flex items-center h-9 px-4 w-72 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
                type="password"
              />
              <!-- forget password -->

              <div
                class="flex justify-around text-white text-sm font-light pt-4 items-center"
              >
                <div class="block min-h-[1.5rem] ps-[1.5rem]">
                  <input
                    class="relative float-left -ms-[1.5rem] me-[6px] mt-[0.1rem] h-[1.1rem] w-[1.1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <p>Remember Me</p>
                </div>
                <span>
                  <p class="hover:text-[#07d884] cursor-pointer">
                    Forget Your Password
                  </p>
                </span>
              </div>

              <div class="text-center">
                <button
                  class="h-10 px-6 w-64 bg-[#07d884] mt-8 rounded font-semibold text-sm text-blue-100"
                >
                  Login
                </button>
              </div>
              <!-- login using providers -->
              <Providers />
              <!--  -->
              <div class="flex justify-center text-xs text-white pt-4">
                <a>New user</a>
                <span class="mx-2 text-gray-300">/</span>
                <RouterLink to="/signup">
                  <a class="font-semibold hover:text-[#07d884]">Sign Up</a>
                </RouterLink>
              </div>
            </form>
            <!-- Component End  -->
          </div>
        </div>
      </div>
    </main>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import Providers from "@/components/Providers.vue";
import { useAuthStore } from "@/store/auth";
import { ref } from "vue";

const router = useRouter();

const email = ref("");
const password = ref("");

const { loginUser } = useAuthStore();

const signIn = async () => {
  await loginUser(email.value, password.value)
    .then((result) => {
      router.push({
        path: "/darshboard",
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
</script>
