const http = require('http');
const through2 = require('through2-map');
http.createServer((req,res)=>{
    if(req.method !== 'POST'){
        return res.end('Solo metod POST')
    }
    req.pipe(through2(chunk=> 
        chunk.toString().toUpperCase())).pipe(res)
}).listen(process.argv[2]);
