export default function () {
  const findUserByName = async (name) => {
    const user = await $fetch(`http://localhost:5000/api/user/${name}`, {
      method: "GET",
      headers: { "content-Type": "application/json" },
      body: { name }
    })
      .then((result) => {
        return user;
      })
      .catch((err) => {
        return new Error(err.message);
      });
  };
  return {
    findUserByName,
  };
}
