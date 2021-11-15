const http = require('http')
const url = require('url')
 
const port = Number(process.argv[2])

var parseTime = function (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
      text: console.log(time)    
    }
  }
  
  function unixTime (time) {
    return {unixtime: time.getTime()}
  }
  
  var parseQuery = (url)=> {

    if(url.pathname == '/api/parsetime'){
        return parseTime(new Date(url.query.iso))
    }else if(url.pathname == '/api/unixtime'){
        return unixTime(new Date(url.query.iso))
    }else{
        return console.log("Ha ocurrido un error")
    }
  }

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    let route = url.parse(req.url, true)
    res.end(JSON.stringify(parseQuery(route)))   
}).listen(port)


// other solution


// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
