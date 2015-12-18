var http = require('http');
var router = require('./modules/router');

var PORT = 8080;
http.createServer(function(req, res) {
    console.log('Request: ' + req.url);
    router(req, res);
}).listen(PORT);

console.log('Server is running! Go to http://localhost:' + PORT + ' to see your app');