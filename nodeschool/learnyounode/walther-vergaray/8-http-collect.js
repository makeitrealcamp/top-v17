const http = require('http');
const bl = require('bl')

const result = http.get(process.argv[2], (resp) => {
    resp.pipe(bl(function (err,data) {
      console.log(data.toString().length)
      console.log(data.toString())
    }))
})



