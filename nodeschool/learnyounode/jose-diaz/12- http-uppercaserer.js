const { createReadStream } = require('fs');
const http = require('http');
const PORT = process.argv[2]

const server = http.createServer( (req,res) => {
    if(req.method=='POST'){
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString().toUpperCase()
          })

        req.on('end', () => {
            res.writeHead(200, { "content-type": "text/plain" })
            res.write(body)
        })
    } else {
        return res.end("Not a post Method")
    }
} )

server.listen(PORT);