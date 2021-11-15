const http = require('http');

const url = process.argv[2]

http.get(url, function (res) {
    res.setEncoding('utf-8')
    let body = ''
    res.on('data', chunk => {
        return body+=chunk;
    } )
    res.on('end', () => {
        console.log(body.length)
        console.log(body)
    })
}).on('error', console.error)