const fs = require('fs')

const document = process.argv[2]

function confirmar(error, respuesta){
    if (error) {
        console.log("Error muy grave",error);
    } else {
        const rpta = respuesta.toString('utf8').split('\n').length - 1
        
        console.log(rpta);
    }
}

const bufferSteps = fs.readFile(document,confirmar)
