const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, response => {
    response.pipe(bl((err, data) => {
        if (err) return console.error(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});

// // Another example
// http.get(url, (response) => {
//     let body = ''
//     response.setEncoding('utf8')
//     response.on('data', data => {
//         return body += data
//     })
//     response.on('error', console.error)
//     response.on('end', () => {
//         console.log(body.length)
//         console.log(body)
//     })
// })