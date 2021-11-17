const net = require ('net')

function zero(n) {
    if (n < 10) {
        return '0'+n
    }
    else {
        return n
    }
}

const server = net.createServer(function (socket){
    date = new Date();
    
    data = date.getFullYear() + '-' 
         + zero(date.getMonth()+1) + '-' 
         + zero(date.getDate()) + ' ' 
         + zero(date.getHours()) + ':' 
         + zero(date.getMinutes()) + '\n';

    socket.end(data)
})
server.listen(process.argv[2])