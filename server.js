var http = require('http');
var static = require('node-static');

var fileServer = new static.Server('./public');

var port = 8080;

http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(port);

console.log("Node server is running on localhost:"+ port)
