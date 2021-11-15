const http = require('http')
const url = require('url')
const server = http.createServer((req, res) => {
    let dir = new URLSearchParams(req.url, `http://127.0.0.1:${process.argv[2]}`)
    //console.log(dir)
    res.writeHead(200, {'Content-Type': 'application/json'})

    for(const [key, value] of dir)
    {
        const date = new Date(value)
        const unix = Math.floor(date/1)
        const hour = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds() 
        if (key == '/api/parsetime?iso'){
            res.write(JSON.stringify({'hour':hour, 'minute':minutes, 'second':seconds}))
        }
        else{
            res.write(JSON.stringify({'unixtime': unix}))
        }
    }
    
    //console.log(JSON.stringify(dir))

    req.pipe(res)
})


server.listen(process.argv[2])