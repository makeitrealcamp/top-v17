const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) =>{
    req.pipe(map(function (chunk){
        let res = chunk.toString().toUpperCase()
        return (res)
    })).pipe(res)

    //res.end()
})
server.listen(process.argv[2])
