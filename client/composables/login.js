export default function () {
  const loginUser = async (email, password) => {
    try {
      const res = await $fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email,
          password,
        },
      });
      if (res) {
        return res.data;
      } else {
        console.log("An error has occurs");
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  return {
    loginUser,
  };
}
