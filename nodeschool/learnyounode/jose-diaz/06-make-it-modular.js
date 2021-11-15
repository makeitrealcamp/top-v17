const myModule = require('./06-mymodule.js')

const folderPath = process.argv[2];
const fileExt = process.argv[3];

myModule(folderPath,fileExt, (err,files) => {
    if(err){
        return console.log(`Error: ${err}`)
    }
    files.forEach(file => console.log(file))
})
