export default function () {
  const getProfile = async () => {
    await $fetch("http://localhost:5000/api/profile")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { getProfile };
}
