const myModule = require('./06-mymodule.js')
const file = process.argv[2];
const ext = process.argv[3];
myModule(file,ext, (err,files) => {
    if(err){
        return console.log(`Error: ${err}`)
    }
    files.forEach(file => console.log(file))
})
