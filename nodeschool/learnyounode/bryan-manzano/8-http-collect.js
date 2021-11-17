const http = require('http')
const bl = require('bl') //bufferList
http.get(process.argv[2], function (response){
    response.pipe(bl(function (err, data){
        if (err){
            return err
        }
        let arr = data.toString().split('\n')
        let x = arr[0].trim()
        let y = arr[1].trim()

        console.log(data.toString().length)
        console.log(data.toString())
        //console.log(y)
    }))
})