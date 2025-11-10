function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.username === username && storedUser.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Giriş başarılı!");
    window.location.href = "index.html";
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
}