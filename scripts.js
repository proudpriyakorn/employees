document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".send-button");
    const messageInput = document.querySelector(".chat-input input");
    const chatWindow = document.querySelector(".chat-window");

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return; // Don't send empty messages

        // Create user message bubble
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("chat-message", "user-message");
        messageBubble.innerHTML = `<span class="message-text">${messageText}</span>`;

        // Append message to chat window
        chatWindow.appendChild(messageBubble);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to latest message

        // Clear input field
        messageInput.value = "";

        // Simulate bot response after 1 second
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "assistant");
            botMessage.innerHTML = `
                <span class="message-icon"><img src="images/icon.png"></span>
                I'm an AI assistant. You said: "${messageText}"
            `;

            chatWindow.appendChild(botMessage);
            chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
        }, 1000);
    }

    // Send message on button click
    sendButton.addEventListener("click", sendMessage);

    // Send message on Enter key press
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
