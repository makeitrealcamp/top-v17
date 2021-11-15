const http = require('http');
const bl = require('bl')
const urls = [process.argv[2],process.argv[3],process.argv[4]]
let results = []
let count = 0

const fetch = (url, index) => {
    http.get(url, (resp) => {
        resp.pipe(bl(function (err,data) {   
            if(err) return err         

            results[index] = data.toString()
            count++

            if(count === 3) results.forEach( result => console.log(result)) 
          }))
     })
}

urls.forEach((url, index) => {
    fetch(url,index)
});
