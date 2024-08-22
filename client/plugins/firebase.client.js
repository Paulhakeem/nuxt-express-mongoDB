// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDTS1YaDC9noWM-bQGnraWQVHTEPiYg0bM",
    authDomain: "drag-drop-9c025.firebaseapp.com",
    projectId: "drag-drop-9c025",
    storageBucket: "drag-drop-9c025.appspot.com",
    messagingSenderId: "380332659219",
    appId: "1:380332659219:web:7bbe761b7de308cc04e5e6",
    measurementId: "G-VDLH1ES94X",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});

