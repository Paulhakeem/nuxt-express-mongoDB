import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Darshboard from "@/views/Darshboard.vue";
import chatbody from "@/views/chatbody.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/darshboard",
      name: "darshboard",
      component: Darshboard,
    },
    {
      path: "/chat-body",
      name: "chat-body",
      component: chatbody,
    },
  ],
});

export default router;
