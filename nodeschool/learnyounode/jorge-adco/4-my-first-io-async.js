const fs = require('fs')
const document = process.argv[2]
function confirmar(error, data){
    if (error) {
        console.log("Error muy grave",error);
    } else {
        const res = data.toString('utf8').split('\n').length - 1
        console.log(res);
    }
}
const bufferSteps = fs.readFile(document,confirmar)
