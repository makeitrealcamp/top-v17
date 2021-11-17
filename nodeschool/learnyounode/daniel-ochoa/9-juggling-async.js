const http = require('http');
const bl = require ('bl')
const results = []
let count = 0
const urls = process.argv.slice(2);


function httpGet (index) {
    http.get(urls[index],function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.log('El gran error es: ', err)
            }
            
            results[index]= data.toString();
            count++

            if (count === urls.length) {
                for (let i = 0; i < urls.length; i++) {
                    console.log(results[i])
                }
                
            }
        }));
    });
}

for (let i = 0; i < urls.length; i++) {
    httpGet(i)
}