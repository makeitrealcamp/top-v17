const net = require('net')
const date = new Date()

const server = net.createServer(function listener (socket){
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()

    const formatted = `${year}-${month}-${day} ${hour}:${minutes}`
    socket.write(formatted)
    socket.end('\n')
})
server.listen(process.argv[2])