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
function addEmoji(emoji) {
  messageInput.value += emoji;
  messageInput.focus();
}
function setTheme(theme) {
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(`${theme}-theme`);
  localStorage.setItem("theme", theme); // 👈 Seçilen temayı kaydet
}

// Sayfa yüklendiğinde önceki tema uygulanır
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.forEach((msg, index) => addMessageToChat(msg, index));
};
function handleMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (!message) return;

  addMessageToChat(message, "user");
  input.value = "";

  getAIBotResponse(message); // 🔥 Her mesajdan sonra bot cevap verir
}
function getAIBotResponse(userMessage) {
  let response = "";

  const msg = userMessage.toLowerCase();

  if (msg.includes("nasılsın")) {
    response = "Ben bir yapay zekayım ama iyi olduğumu varsayabiliriz 😊";
  } else if (msg.includes("saat")) {
    const now = new Date();
    response = `Şu an saat ${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
  } else if (msg.includes("selam") || msg.includes("merhaba")) {
    response = "Selam Furkan! Sohbete hoş geldin 👋";
  } else {
    response = "Bunu tam anlayamadım ama öğrenmeye açığım 🤖";
  }

  setTimeout(() => {
    addMessageToChat(response, "bot");
  }, 500);
}
addMessageToChat()
function addMessageToChat(message, sender) {
  const chatContainer = document.getElementById("chat-container");
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";

  if (sender === "bot") {
    msgDiv.style.backgroundColor = "#e0f0ff";
    msgDiv.style.color = "#003366";
    msgDiv.textContent = "🤖 FurkanBot: " + message;
  } else {
    msgDiv.textContent = message;
  }

  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
