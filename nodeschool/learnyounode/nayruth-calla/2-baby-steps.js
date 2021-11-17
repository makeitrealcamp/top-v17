const arguments = process.argv.slice(2);
console.log(arguments.reduce((previousValue, currentValue)=>parseInt(previousValue)+parseInt(currentValue)));
