const http = require("http");
const bl = require("bl");

const urls = process.argv.slice(2);
let count = 0;
let res = [];

urls.forEach((el, index) => {
  http_res(el, index);
});

function http_res(element, index) {
  http.get(element, function (response) {
    response.pipe(
      bl(function (err, data) {
        if (err) return console.log(err);
        res[index] = data.toString();
        count++;
        if (count === 3) {
          res.forEach((el) => console.log(el));
        }
      })
    );
  });
}
