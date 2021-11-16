//commit node exercise 11
const http = require('http')
const fs = require('fs')

const port = Number(process.argv[2])
const route = process.argv[3]

const content = fs.createReadStream(route)    

http.createServer((req, res)=>{
   content.on('data', (data)=>{
       res.writeHead(200, { 'Content-Type': 'text/plain'})
       res.end(Buffer.from(data))
   })

}).listen(port)

//other solution
// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
