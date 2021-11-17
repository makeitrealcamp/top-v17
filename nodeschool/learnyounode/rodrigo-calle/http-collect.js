//commit: node exercise 8

const http = require('http')
const url = process.argv[2]

http.get(url, (res)=>{
    let data = ''
    res.on('data', (chunk)=>{
        data +=chunk;
    })
    res.on('end', ()=>{
        console.log(data.length)
        console.log(data)
    })
})

//other solution

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })


