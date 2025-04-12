const chatContent = document.getElementById("chatContent");

// Predefined conversation
const messages = [
  { sender: "parent", text: "What facilities are provided at Kinder Kares?" },
  { sender: "center", text: "We provide a safe and nurturing environment for your child." },
  { sender: "parent", text: "What about food and nap arrangements?" },
  { sender: "center", text: "We offer healthy meals and have a dedicated nap area." },
  { sender: "parent", text: "How do you ensure safety and hygiene?" },
  { sender: "center", text: "Our facility is cleaned daily, and staff are trained in first aid." },
];

let messageIndex = 0;

function displayMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("chat-message", sender);
  messageDiv.textContent = text;
  chatContent.appendChild(messageDiv);
  chatContent.scrollTop = chatContent.scrollHeight; // Auto-scroll to the latest message
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const userText = userInput.value.trim();
  
  if (userText !== "") {
    displayMessage("parent", userText);
    userInput.value = "";

    // Simulate response from the center
    if (messageIndex < messages.length) {
      setTimeout(() => {
        const response = messages[messageIndex];
        displayMessage("center", response.text);
        messageIndex++;
      }, 1000); // Add delay for a real-time effect
    }
  }
}

// Display initial messages
setTimeout(() => {
  messages.forEach((message, index) => {
    setTimeout(() => {
      displayMessage(message.sender, message.text);
    }, index * 1500);
  });
}, 500);
