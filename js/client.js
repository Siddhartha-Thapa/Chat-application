const socket = io('https://sidyoochat.onrender.com');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageInp');
const messagecontainer = document.querySelector(".container");
var audio = new Audio('ring.mp3');
const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    if(position==='left'){
        audio.play();
    }
}
const uname = prompt("Enter your name to join the chat");
socket.emit('new-user', uname);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageinput.value.trim();
    if (message === "") {
        // Optionally, show a warning or shake the input
        return; // Do not send empty messages
    }
    append(`You: ${message}`, 'right');
    socket.emit('send', message);
    messageinput.value = '';
});

socket.on('user-joined', uname=>{
    append(`${uname} joined the chat`, 'right');

})

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left');
} )

socket.on('user-left', name=>{
    append(`${name} left the chat`,'left');
})