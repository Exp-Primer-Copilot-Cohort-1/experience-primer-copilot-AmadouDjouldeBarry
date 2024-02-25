// create a web sever
// 1. load the http module
var http = require('http');

// 2. create a server
http.createServer(function (req, res) {
  // 3. set the response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!\n');
}).listen(8124, "");