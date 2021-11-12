const array = process.argv.slice(2)
const arrayNum = array.map(num => parseInt(num,10))
const sum = arrayNum.reduce(function(prev, curr){
    return prev + curr;
},0)
console.log(sum)