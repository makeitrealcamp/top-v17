const http = require('http')
const arr = [];
let count = 0;
const url = process.argv.slice(2);

const showData = () => {
  count += 1
  if (count === arr.length) {
    arr.forEach(value => console.log(value))
  }
};

url.forEach( (value, index) => {
    arr[index] = ''
  http.get(value,(response) =>{
    response.setEncoding('utf8')
    response.on('data', (data) => {
        arr[index] += data
    })
    response.on('end',showData)
  })
});