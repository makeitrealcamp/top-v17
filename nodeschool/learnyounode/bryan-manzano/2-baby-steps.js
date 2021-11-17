let array = process.argv.slice(2)

let suma = array.reduce(function (a, b) {
    return Number(a) + Number(b)
}, 0)

console.log(suma)