const http = require('http'); 


let counter = 0; 
let urls = process.argv.slice(2);
let results = []; 

function logAll() {
results.forEach(ele => console.log(ele))
}

//accept index(for process.argv) as parameter
function httpGet(url,i) {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    results[i]=""
    res.on('data', chunk => {
      results[i] += chunk;
    });
    res.on('end', function() {
      counter++;
      if (counter === urls.length) {
        logAll();
      }
    });
  })
};


//inputs are recieved from here

urls.forEach((url,i) => httpGet(url,i))