import { signInWithPopup } from "firebase/auth";
export default function () {
  const { $auth } = useNuxtApp();

  const user = useState("firebaseUser", () => null);

  const googleProvider = async (provider) => {
    try {
      const userCreds = await signInWithPopup($auth, provider);
      if (userCreds) {
        user.value = userCreds.user;
        console.log("login successully");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const gitLogin = async (provider) => {
    try {
      const userCreds = await signInWithPopup($auth, provider);
      if (userCreds) {
        user.value = userCreds.user;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    user,
    googleProvider,
    gitLogin,
  };
}
