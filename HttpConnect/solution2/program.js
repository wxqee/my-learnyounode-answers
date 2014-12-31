var http = require('http'),
    bufferlist = require('bl');

http.get(process.argv[2], function(response) {
  response.pipe(bufferlist(function(err, data){
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
