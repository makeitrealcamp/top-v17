const { createReadStream } = require('fs');
const http = require('http');
const port = process.argv[2]
const file = process.argv[3]
const server = http.createServer( (request,response) => {
    const src = createReadStream(file,'utf-8')
    src.pipe(response)
} )
server.listen(port);