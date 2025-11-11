function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Sabit kullanıcı bilgileri
  const correctUsername = "admin";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    localStorage.setItem("loggedIn", "true");
    alert("Giriş başarılı!");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

function logout() {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "login.html";
}
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    alert("Giriş başarılı!");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}

function logout() {
  localStorage.setItem("loggedIn", "false");
  window.location.href = "login.html";
}
function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username); // 👈 kullanıcı adını kaydet
    alert("Giriş başarılı!");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}
function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("auth-message");

  if (!username || !password) {
    message.textContent = "Lütfen kullanıcı adı ve şifre girin.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username]) {
    message.textContent = "Bu kullanıcı zaten kayıtlı.";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  message.style.color = "#38a169";
  message.textContent = "Kayıt başarılı! Artık giriş yapabilirsin.";
}

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("auth-message");

  const users = JSON.parse(localStorage.getItem("users") || "{}");

  if (users[username] === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "chat.html";
  } else {
    message.textContent = "Kullanıcı adı veya şifre yanlış.";
  }
}