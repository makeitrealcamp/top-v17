const net = require('net')
var strftime = require('strftime')


const PORT = process.argv[2]

const server = net.createServer((socket)=>{
    let data  = strftime('%F %R', new Date())

    socket.write(data + '\n')
    socket.end("")
})

server.listen(PORT)

//console.log(strftime('%F %T', new Date(1307472705067))) // => 2011-06-07 18:51:45
