var http = require('http'),
    url = require('url');

var server = http.createServer(function(req, res) {

  var stUrl = {};
  switch (req.method) {
    case 'GET':
      res.writeHead(200, { 'Content-Type': 'application/json' });

      stUrl = url.parse(req.url, false);
      switch (stUrl.pathname) {
        case '/api/parsetime':
        {
          var iso = stUrl.query.split('=')[1],
              dt = new Date(iso),
              result = {};
          result = {
                hour: dt.getHours(),
                minute: dt.getMinutes(),
                second: dt.getSeconds()
              };
          res.end(JSON.stringify(result));
          break;
        }
        case '/api/unixtime':
          var iso = stUrl.query.split('=')[1],
              dt = new Date(iso),
              result = {};
          result = {
            unixtime: Math.floor(dt.getTime())
          };
          res.end(JSON.stringify(result));
          break;
      }
      break;
    default:
      res.end('I need a GET request.');
      break;
  }
});

server.listen(Number(process.argv[2]));
