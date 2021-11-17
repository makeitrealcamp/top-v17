const { utimes } = require('fs');
const http = require('http');
const url = require('url');

const PORT = process.argv[2];

const server = http.createServer((req,res)=>{

    if (req.method!='GET'){
        res.end("Wrong Method")
    }

    const queryObject = url.parse(req.url)
    const {pathname} =  queryObject
    let {query} = queryObject
    UTCTimeString = query.split("iso=")[1]


    res.writeHead(200, { 'Content-Type': 'application/json' })
    
    const date = new Date(UTCTimeString)

    if(pathname=='/api/parsetime'){
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }))

    } else if(pathname=='/api/unixtime'){
        res.end(JSON.stringify({
            "unixtime" : date.getTime()
        }))
    } else{
        res.writeHead(404)
        res.end()
    }

    res.end()
})

server.listen(PORT)