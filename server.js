var http = require('http');
var api = require('./modules/api');
var static = require('./modules/static');

var PORT = 8080;
http.createServer(function(req, res) {
    console.log('Request: ' + req.url);

    if (req.url.startsWith('/api')) {
        api(req, res);
    }
    else {
        static(req, res);
    }

}).listen(PORT);

console.log('Server is running! Go to http://localhost:' + PORT + ' to see your app');