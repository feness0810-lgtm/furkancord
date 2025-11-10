function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Kayıt verileri:", username, email, password); // Test için

  const user = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Kayıt başarılı!");
  window.location.href = "login.html";
}