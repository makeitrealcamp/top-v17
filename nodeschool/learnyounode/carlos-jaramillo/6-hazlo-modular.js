const mymodule = require("./6-mymodule");

const dir = process.argv[2];
const filterExt = process.argv[3];

mymodule(dir, filterExt, function (err, success) {
  if (err) return console.log("Ocurrió un error ", err);
  success.forEach((element) => {
    console.log(element);
  });
});
