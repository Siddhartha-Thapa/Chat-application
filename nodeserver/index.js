

//server that handles socket.io connection
const io = require('socket.io')(8000, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const users = {};

io.on('connection',socket=>{
    socket.on('new-user', name=>{
        console.log("New user", name);
        users[socket.id]= name;
        socket.broadcast.emit('user-joined',name);
    });

    socket.on('send', message=>{
        socket.broadcast.emit('receive', {message:message , name:users[socket.id]});

    });
})