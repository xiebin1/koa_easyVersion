const express = require("express");
const app = express();
const http = require("http").Server(app);
var io = require("socket.io")(http);


app.use(express.static(__dirname));

app.get('/',(req,res) => {
    // console.log(res);
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('a use connection');

    // 相应某用户f发送消息
    socket.on("chat message", (msg) => {
        console.log("chat message" + msg);

        //广播给所有人
        io.emit("chat message", msg);

        //广播给除了发送者之外的所有人
        //socket.broadcast.emit('chat message', msg);
    })

    socket.on("disconnect", () => {
        console.log("use disconnect")
    })


})

http.listen(3000, () => {
    console.log("connect start");
})