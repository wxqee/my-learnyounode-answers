var http = require('http');

http.get(process.argv[2], function(response) {
  var buffers = [];
  response.on('data', function(chunk) {
    buffers[buffers.length] = chunk;
  });
  response.on('end', function() {
    var str = buffers.join('');
    console.log(str.length);
    console.log(str);
  });
});
