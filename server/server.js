const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});


io.on('connection', (socket) => {
    socket.on('join-room',(roomCode)=>{      
        socket.join(roomCode)
    })


    socket.on('game-start',(roomCode)=>{
        socket.to(roomCode).emit("joined-the-room")
    }) 

   socket.on('errou', (roomCode) =>{
    socket.to(roomCode).emit("errouR")
   })

 socket.on('acertou', (roomCode) =>{
    socket.to(roomCode).emit("acertouR")
   })

})


http.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running 3000`);
});
