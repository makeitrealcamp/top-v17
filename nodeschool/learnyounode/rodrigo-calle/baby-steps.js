//commit: node exercise 2
const value = process.argv;
//console.log(value)
let result = 0;
for (let i = 2; i < value.length; i++) {
    result+=Number(value[i])
}

console.log(result)
