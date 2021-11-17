const fs = require('fs')
const http = require('http')
const read = fs.createReadStream(process.argv[3])

const server = http.createServer(function(req, res) {
    const src = read
    //src.pipe(dst)
    
    src.pipe(res)
})
server.listen(process.argv[2])
