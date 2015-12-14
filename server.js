var http = require('http');
var router = require('./modules/router');

var PORT = 8080;
http.createServer(router).listen(PORT);

console.log('Server is running! Go to http://localhost:' + PORT + ' to see your app');