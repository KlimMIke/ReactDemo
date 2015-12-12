// Module that handles requests for static files

var fs = require('fs');

module.exports = function(request, response) {
    var fileName = request.url == '/' ? '/index.html' : request.url;

    fs.readFile('client' + fileName, { encoding: 'utf-8' }, function(err, data) {
        if (!err) {
            response.statusCode = 200;
            response.end(data);
        } else {
            response.statusCode = 404;
            response.end();
        }
    });
}