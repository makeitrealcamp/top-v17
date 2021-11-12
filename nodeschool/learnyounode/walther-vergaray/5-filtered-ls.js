const fs = require('fs')
const file = process.argv[2]

console.log

const readMyFile = (err,list) => {
    if(err){
        console.log(err)
    }
    else{
        list = list.filter((el) => {
            return el.indexOf("."+process.argv[3]) > -1
        });
        for (let i = 0; i < list.length; i++) {            
            console.log(list[i])
        }
    }
}

fs.readdir(file, readMyFile)