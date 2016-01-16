// This module handles api requests.

var cards = require('./cards');

module.exports = function(request, response) {
    if (request.url == '/api/get') {
        var randomIndex = Math.floor(Math.random() * cards.length);
        var card = cards[randomIndex];

        response.statusCode = 200;
        response.setHeader('Content-type', 'application/json');
        response.end(JSON.stringify(card));
    }

    else {
        response.statusCode = 400;
        response.end('Method not found');
    }
};