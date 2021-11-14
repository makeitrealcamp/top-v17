//commit: node exercise 7
const http = require('http')

const url = process.argv[2]


http.get(url, (res) => {
    let data = [];
    res.on('data',(chunk)=>{
        data.push(chunk.toString());
    });    
    res.on('end',()=>{
        data.forEach(e=>{
            console.log(e)
        })
    })
})


// Other solution

// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
