const form = document.getElementById("formData");

async function signupUser(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    console.log("Error Occurs");
  }
  const data = await res.json();
  (this.name = ""), (this.email = ""), (this.password = "");
  console.log(data);
}
form.addEventListener("submit", signupUser);
