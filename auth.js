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