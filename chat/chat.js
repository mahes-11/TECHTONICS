
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const attachBtn = document.getElementById('attach-btn');
const fileInput = document.getElementById('file-input');


function addMessage(text, self = true) {
    const messageElem = document.createElement('div');
    messageElem.classList.add('message', self ? 'self' : 'other');
    messageElem.textContent = text;
    chatMessages.appendChild(messageElem);
    chatMessages.scrollTop = chatMessages.scrollHeight; 
}


sendBtn.addEventListener('click', () => {
    const messageText = messageInput.value;
    if (messageText.trim()) {
        addMessage(messageText);
        messageInput.value = ''; 
    }
});

r
attachBtn.addEventListener('click', () => {
    fileInput.click();
});


fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        addMessage(`Sent file: ${file.name}`, true);
    }
});
