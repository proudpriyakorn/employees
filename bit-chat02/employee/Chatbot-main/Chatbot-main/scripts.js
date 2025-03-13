document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".send-button");
    const messageInput = document.querySelector(".chat-input input");

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return; // Don't send empty messages

        // Clear input field
        messageInput.value = "";
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
