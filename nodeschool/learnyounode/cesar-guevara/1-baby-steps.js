//Process.argv: te da los argumentos del llamado desde la consola

let numbers = process.argv.slice(2);

let suma = numbers.reduce((a, b) => Number(a)+Number(b))

console.log(suma);

