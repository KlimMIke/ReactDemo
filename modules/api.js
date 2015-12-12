// Module to handle api requests

var cards = require('./cards');

module.exports = function(request, response) {
    if (request.url == '/api/get') {
        //noinspection JSUnresolvedVariable
        var randomIndex = Math.floor(Math.random() * cards.length);

        response.statusCode = 200;
        response.setHeader('Content-type', 'application/json');
        response.end(JSON.stringify(cards[randomIndex]));
    }
    else {
        response.statusCode = 400;
        response.end('Method not found');
    }
};