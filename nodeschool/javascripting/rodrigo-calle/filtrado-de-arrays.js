//commit: js exercise 12

const numbers = [1,2,3,4,5,6,7,8,9,10]

let filtered = numbers.filter((n)=>{
    return n%2 === 0;
})

console.log(filtered);