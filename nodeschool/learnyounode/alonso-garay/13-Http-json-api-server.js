const http = require('http')
const url = require('url')

const port = process.argv[2]

function parseTime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime (time) {
    return {unixtime: time.getTime()}
}

function parseQuery (url) {
    if(url.pathname === '/api/parsetime')
        return parseTime(new Date(url.query.iso))
    else
        return unixTime(new Date(url.query.iso))
}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    let result = url.parse(req.url, 'http://example.com')
    res.end(JSON.stringify(parseQuery(result)))
    
  }).listen(port)