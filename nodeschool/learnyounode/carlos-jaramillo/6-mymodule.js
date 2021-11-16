const fs = require("fs");
const path = require("path");

module.exports = function (dir, fileExt, cb) {
  fs.readdir(dir, function (err, list) {
    if (err) return cb(err);
    list = list.filter((file) => {
      return path.extname(file) === "." + fileExt;
    });
    cb(null, list);
  });
};
