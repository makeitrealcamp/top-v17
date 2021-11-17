//commit: node exercise 9 
const http = require('http');
const async = require("async");

const firstUrl = process.argv[2],
      secondUrl = process.argv[4],
      thirdUrl = process.argv[3];
    
const urlList = [firstUrl, secondUrl, thirdUrl]

async.forEach( urlList,(e, callback )=>{
    http.get(e, (res)=>{
        let data = ''
        res.on('data',(chunk)=>{
            data +=chunk;
        });    
        res.on('end',()=>{
            console.log(data);
        });
        callback();
    });

});


// other solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
