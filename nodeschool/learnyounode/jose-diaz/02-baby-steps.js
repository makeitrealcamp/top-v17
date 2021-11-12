const arg = process.argv.slice(2)
const res = arg.reduce((acc,num) => acc+parseInt(num),0)
console.log(res)