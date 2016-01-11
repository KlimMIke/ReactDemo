/* This module handles api requests.
*  TODO: return images or add support on the client side
*  TODO: remove answer checking from here since it's been moved to the client side to make the app simpler
*/

var cards = require('./cards');

module.exports = function(request, response) {
    if (request.url == '/api/get') {
        var randomIndex = Math.floor(Math.random() * cards.length);
        var card = cards[randomIndex];
        if (card.imgName && !card.imageContent) {
            var imageContent = require('fs').readFileSync('images/' + card.imgName, { encoding: 'base64' });
            card.imageContent = imageContent;
        }

        response.statusCode = 200;
        response.setHeader('Content-type', 'application/json');
        response.end(JSON.stringify(card));
    }
	
    else if (request.url == '/api/check' && request.method.toUpperCase() == 'POST') {
        var body = '';

        request.on('data', function(chunk) { body += chunk; })
        request.on('end', function() {
            var data;
            try {
                data = JSON.parse(body);
            } catch (e) {
                response.statusCode = 400;
                response.end('Invalid JSON');
                return;
            }

            var found = cards.filter(function(c) {
                return c.eng == data.eng;
            });

            response.statusCode = 200;
            response.setHeader('Content-type', 'application/json');
            response.end(JSON.stringify({ correct: found.length > 0 && found[0].rus == data.rus }));
        });
    }

    else {
        response.statusCode = 400;
        response.end('Method not found');
    }
};