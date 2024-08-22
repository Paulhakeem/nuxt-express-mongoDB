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

       if(data){
          return data.data  
        }
      
    } catch (error) {
      console.log(error);
    }
  };
  return {
    regesterUser,
  };
}
