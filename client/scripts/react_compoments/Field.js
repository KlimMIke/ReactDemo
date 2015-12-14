var ReactDOM = require('react-dom');
var React = require('react');

var Card = require('./Card');
var FailedGuesses = require('./FailedGuesses');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="field">
                <Card />
                <div className="currentScore">
                    Score will be here
                </div>
                <FailedGuesses />
            </div>
        );
    }
});