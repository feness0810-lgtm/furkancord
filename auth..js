function registerUser() {
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;

  if (username && email && password) {
    localStorage.setItem("user", JSON.stringify({ username, email, password }));
    alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
    window.location.href = "login.html";
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
}

function loginUser() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && username === storedUser.username && password === storedUser.password) {
    alert("Giriş başarılı!");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı.");
  }
}