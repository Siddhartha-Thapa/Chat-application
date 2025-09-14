const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageInp');
const messagecontainer = document.querySelector('.container');
const uname = prompt("Enter your name to join the chat");
socket.on('connect', () => {
    socket.emit('new-user', uname);
});