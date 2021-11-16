const http = require('http')
const url = require('url')
portNumber = process.argv[2]

const parseTime = time => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

const unixTime = time => {
    return {unixtime: time.getTime()}
}

const parseQuery = url => {
    if(url.pathname === '/api/parsetime')
        return parseTime(new Date(url.query.iso))
    else
        return unixTime(new Date(url.query.iso))
}

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'application/json'})
    const result = url.parse(request.url, true)
    response.end(JSON.stringify(parseQuery(result)))
    
  }).listen(portNumber)
