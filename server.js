var http = require('http');
var router = require('./modules/router');

http.createServer(router).listen(8080);