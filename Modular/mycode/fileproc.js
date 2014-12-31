var fs = require('fs'),
    path = require('path');

function processFile(dir, ext, callback) {
  var return_val = [];
  fs.readdir(dir, function(err, list) {
    if (err) { return callback(err); }
    list.forEach(function(file){
      if (path.extname(file) === '.' + ext) {
        return_val[return_val.length] = file;
      }
    });
    callback(null, return_val);
  });
}

module.exports = processFile;
