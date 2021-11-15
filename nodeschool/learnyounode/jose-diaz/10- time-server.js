const net = require('net');

const PORT = process.argv[2]

const server = net.createServer(function (socket) {
    let dateTime = new Date()
    dateTime.setHours(dateTime.getHours()-5)
    dateTime = dateTime.toISOString().replace(/T/,' ').replace(/:[0-9]+\..+/,'')
    socket.write(dateTime+'\n')
    socket.end()

})
server.listen(PORT)
