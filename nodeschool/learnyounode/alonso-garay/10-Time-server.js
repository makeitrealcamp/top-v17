const net = require('net')  
const port = process.argv[2]

function zeroFill(i) {
    return (i < 10 ? "0" : "") + i;
  }

const server = net.createServer(function (socket) {  
    let date = new Date();

    let year = date.getFullYear()
    let month = zeroFill(date.getMonth()+1)
    let day = zeroFill(date.getDate())
    let hour = zeroFill(date.getHours())
    let minutes = zeroFill(date.getMinutes())

    let format = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes

    socket.write(format)
    socket.end('\n')
})

server.listen(port)  