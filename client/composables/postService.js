export default function () {
  const regesterUser = async (name, email, password) => {
    
    try {
      const data = await $fetch("http://localhost:5000/api/signUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name,
          email,
          password,
        },
      });

      if (data) {
        const token = data.token;
        localStorage.setItem("token", token);
       console.log(data);
       
      }
    } catch (error) {
      console.log(error);
    }
  };


  // geting user profile
  const user = ref(null)
  const getProfile = async () => {
    await $fetch("http://localhost:5000/api/profile", {
      headers: {
        Authorization:  `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((result) => {
        user.value = result.userExist
        return result
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    regesterUser,
    getProfile,
    user
  };
}
