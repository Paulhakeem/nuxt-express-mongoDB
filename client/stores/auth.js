import { defineStore } from "pinia";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const { googleProvider, gitLogin } = providers();
  const google = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  const signUpWithGoogle = async () => {
    const user = await googleProvider(google);
    if (user) {
      useNuxtApp().$toast.success("Google login successfull");
    }
    await navigateTo({ path: "/home" });
  };

  const signUpWithGithub = async () => {
    const user = await gitLogin(github);
    if (user) {
      useNuxtApp().$toast.success("Done!!👍");
    }
    await navigateTo("/home");
  };

  return {
    signUpWithGoogle,
    signUpWithGithub,
  };
});
