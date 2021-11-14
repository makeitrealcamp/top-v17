const http = require('http')
const bl = require('bl')

const arr = [process.argv[2], process.argv[3], process.argv[4]]
let count = 0
let res = []
arr.forEach((element, index) =>{
    http_res(element, index)
})
function http_res(element, index){
    http.get(element, function (response){
        response.pipe(bl(function(err, data){
            if (err) {return err}
            res[index]=data.toString()
            count++
            if (count == 3){
                res.forEach(element=>console.log(element))
            }
        }))
    })
}