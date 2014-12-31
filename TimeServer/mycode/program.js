var net = require('net'),
    port = process.argv[2],
    server = null;

function now() {
  var n = new Date();
  return n.getFullYear()+"-"+
         (n.getMonth()+1)+"-"+
         n.getDate()+" "+
         n.getHours()+":"+n.getMinutes();
}

server = net.createServer(function (socket) {
  socket.end(now()+"\n");
});

server.listen(port);
