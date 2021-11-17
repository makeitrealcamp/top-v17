const net = require('net');
const dateFormat = require("strftime");
const PORT = process.argv[2];
const server = net.createServer((socket) =>{
    socket.write(dateFormat("%F %H:%M", new Date()));
    socket.write('\n');
    socket.end();

})
server.listen(PORT)
