// Router

var static = require('./static');
var api = require('./api');

module.exports = function(request, response) {
    if (request.url.startsWith('/api')) {
        api(request, response);
    }
    else {
        static(request, response);
    }
};