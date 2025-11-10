// Sayfa yüklendiğinde bot mesajı göster
window.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const botMessage = document.createElement("p");
  botMessage.textContent = "🤖 Bot: Hoş geldin! Sohbete başlayabilirsin.";
  botMessage.style.color = "#555";
  chatBox.appendChild(botMessage);
});

// Kullanıcı mesaj gönderdiğinde ekrana yaz
function sendMessage(event) {
  event.preventDefault();
  const input = document.getElementById("message-input");
  const message = input.value;
  const chatBox = document.getElementById("chat-box");

  const messageElement = document.createElement("p");
  messageElement.textContent = "Sen: " + message;
  chatBox.appendChild(messageElement);

  input.value = "";
}