const numbers = process.argv.slice(2)
const res = numbers.reduce((acc,num) => acc + Number(num),0)
console.log(res)