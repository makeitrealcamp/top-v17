const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    let dir = new URLSearchParams(req.url, `http://example.com:${process.argv[2]}`)
    res.writeHead(200, {'Content-Type': 'application/json'});
    const {pathname,query} =url.parse(req.url);
    const UTCTimeString = query.split("iso=")[1];
    const date = new Date(UTCTimeString);
    if(pathname==='/api/parsetime'){
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }))
    }else if(pathname==='/api/unixtime'){
        res.end(JSON.stringify({
            "unixtime" : date.getTime()
        }));
    }
})
server.listen(process.argv[2])