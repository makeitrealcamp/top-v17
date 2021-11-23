const numbers = process.argv.slice(2);
let result=0;
for (let i = 0; i < numbers.length; i++) {
    result+=Number(numbers[i]);
}
console.log(result);

