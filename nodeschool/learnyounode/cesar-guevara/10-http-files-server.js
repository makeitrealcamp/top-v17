const fs = require('fs');
const http = require('http');


const PORT = process.argv[2]
const ubicacionArchivo = process.argv[3]




const server = http.createServer((request, response)=>{
    fs.createReadStream(ubicacionArchivo).pipe(response);

})

server.listen(PORT)


