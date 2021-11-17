const numbers = process.argv.slice(2);

const suma = numbers.reduce(function (previous, current) {
    return previous + Number(current);
}, 0)

console.log(suma)