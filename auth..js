// Kayıt işlemi
function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
  window.location.href = "login.html";
}

// Giriş işlemi
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

// Giriş kontrolü (sohbet sayfasında çağrılır)
function checkLogin() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

// Çıkış işlemi
function logout() {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "login.html";
}