const http = require("http");
const bl = require("bl");

const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];

let contador = 0

const HTTPMalabares = (url) => {

    http.get(url, (res) => {
        res.setEncoding("utf8");
  
        res.pipe(
          bl(function (err, data) {
            const dataString = data.toString('utf8')
            contador = contador + 1;

            if (contador == 1) {
                HTTPMalabares(url2)
            }
            if (contador ==2) {
                HTTPMalabares(url3)
            }
            
            console.log(dataString);
          })
        );
    
      });
}

 HTTPMalabares(url1)
