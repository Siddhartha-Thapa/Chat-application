const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageInp');
const messagecontainer = document.querySelector(".container");
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
}
const uname = prompt("Enter your name to join the chat");
socket.emit('new-user', uname);

socket.on('user-joined', uname=>{
    append(`${uname} joined the chat`, 'right');

})