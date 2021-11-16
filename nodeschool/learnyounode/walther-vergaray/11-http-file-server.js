const fs = require('fs')
const http = require('http')
portNumber = process.argv[2]
const read = fs.createReadStream(process.argv[3])

const server = http.createServer(function (req, res) {
    read.pipe(res)
  })
  server.listen(portNumber) 