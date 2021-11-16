const fs = require("fs");
const file = process.argv[2];

fs.readFile(file, callback);

function callback(error, success) {
  if (error) {
    console.log("hubo un error al recibir los datos...", error);
  }
  const data = success.toString().split("\n").length - 1;
  console.log(data);
}
