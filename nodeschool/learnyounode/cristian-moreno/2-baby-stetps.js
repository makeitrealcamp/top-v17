const numbers = process.argv.slice(2);

const suma = numbers.reduce(function(previous, current) {
  return previous + Number(current);
}, 0)

console.log(numbers)

// 'use strict'

// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)
