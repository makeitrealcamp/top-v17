const net = require('net')
portNumber = process.argv[2]
const date = new Date();

const server = net.createServer(function (socket) {
    const year = date.getFullYear()
    const month = date.getMonth()+1 
    const day = date.getDate() 
    const hours = date.getHours()
    const minutes = date.getMinutes()

    
    
    const result = `${year}-${month}-${day} ${hours}:${minutes<10?'0':''}${minutes}` 
    
    socket.write(result)
    socket.end("\n")   
})

server.listen(portNumber) 
