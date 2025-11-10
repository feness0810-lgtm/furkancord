const chatContainer = document.getElementById("chat-container");
const messageInput = document.getElementById("messageInput");

// Sayfa yüklendiğinde eski mesajları getir
window.onload = () => {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach(msg => addMessageToChat(msg));
};

function sendMessage(event) {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (text === "") return;

  const message = {
    text,
    time: new Date().toLocaleTimeString()
  };

  // Mesajı kaydet
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));

  addMessageToChat(message);
  messageInput.value = "";
}

function addMessageToChat(message) {
  const div = document.createElement("div");
  div.className = "message";
  div.innerText = `[${message.time}] ${message.text}`;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
