document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            fetch('/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `user_input=${encodeURIComponent(message)}`,
            })
            .then(response => response.json())
            .then(data => {
                addMessage('ai', data.response);
            });
            userInput.value = '';
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // تغيير لون الخلفية كل 5 ثواني
    setInterval(() => {
        const randomColor = `hsl(${Math.random() * 360}, 50%, 50%)`;
        document.body.style.backgroundColor = randomColor;
    }, 5000);
});
