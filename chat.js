const chatContainer = document.getElementById("chat-container");
const messageInput = document.getElementById("messageInput");
const currentUser = localStorage.getItem("username") || "Bilinmeyen";

function getUserColor(username) {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#1A535C", "#FF9F1C", "#6A4C93"];
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

window.onload = () => {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach((msg, index) => addMessageToChat(msg, index));
};

function sendMessage(event) {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (text === "") return;

  const message = {
    user: currentUser,
    text,
    time: new Date().toLocaleTimeString()
  };

  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));

  addMessageToChat(message, messages.length - 1);
  messageInput.value = "";
}

function addMessageToChat(message, index) {
  const div = document.createElement("div");
  div.className = "message";
  div.style.backgroundColor = getUserColor(message.user);
  div.style.color = "#fff";
  div.style.position = "relative";

  div.innerText = `[${message.time}] ${message.user}: ${message.text}`;

  // Sil butonu
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Sil";
  deleteBtn.style.position = "absolute";
  deleteBtn.style.right = "10px";
  deleteBtn.style.top = "5px";
  deleteBtn.style.background = "#fff";
  deleteBtn.style.color = "#000";
  deleteBtn.style.border = "none";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.padding = "2px 6px";
  deleteBtn.style.borderRadius = "4px";

  deleteBtn.onclick = () => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1); // mesajı sil
    localStorage.setItem("messages", JSON.stringify(messages));
    chatContainer.innerHTML = ""; // ekranı temizle
    messages.forEach((msg, i) => addMessageToChat(msg, i)); // kalanları yeniden yükle
  };

  div.appendChild(deleteBtn);
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}