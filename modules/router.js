// Router

var fs = require('fs');
var static = require('./static');

module.exports = function(request, response) {
    if (request.url.startsWith('/api')) {

    }
    else {
        static(request, response);
    }
};