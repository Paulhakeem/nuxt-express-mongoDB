const login = document.getElementById("loginForm");

async function loginUser(e) {
  e.preventDefault();
  try {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      console.log("Something went wrong");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}

login.addEventListener("submit", loginUser)
