document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".chat-input input");
  const button = document.querySelector(".chat-input button");
  const messages = document.querySelector(".chat-messages");

  button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text !== "") {
      const newMessage = document.createElement("div");
      newMessage.classList.add("message");
      newMessage.innerHTML = `<strong>Sen:</strong> ${text}`;
      messages.appendChild(newMessage);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  });
});