var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (request, response) {
  var inStream = fs.createReadStream(process.argv[3]);
  var buffers = [];
  inStream.on('data', function (chunk) {
    buffers[buffers.length] = chunk;
  });
  inStream.on('end', function () {
    response.end(buffers.join(''));
  });
});

server.listen(Number(process.argv[2]));

