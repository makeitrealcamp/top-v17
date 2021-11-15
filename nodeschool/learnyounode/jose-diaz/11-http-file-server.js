const { createReadStream } = require('fs');
const http = require('http');
const PORT = process.argv[2]
const filePath = process.argv[3]

const server = http.createServer( (req,res) => {
    const src = createReadStream(filePath,'utf-8')
    src.pipe(res)
} )

server.listen(PORT);