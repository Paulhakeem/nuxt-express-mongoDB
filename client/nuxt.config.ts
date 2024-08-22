// https://nuxt.com/docs/api/configuration/nuxt-configs
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@vesp/nuxt-fontawesome",
  ],

  css: ["~/assets/css/main.css"],

  // header
  app: {
    head: {
      title: "Authentication with Express And MongoDB",
    },
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MESS_ID: process.env.FIREBASE_MESS_ID,
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },

  compatibilityDate: "2024-08-20",
});