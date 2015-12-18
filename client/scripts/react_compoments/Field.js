var ReactDOM = require('react-dom');
var React = require('react');

var Card = require('./Card');
var FailedGuesses = require('./FailedGuesses');

module.exports = React.createClass({
    getInitialState: function() {
        // this.state.card = {}
        return { currentCard: { eng: 'asdf', rus: 'zxcv' } };
    },

    render: function() {
        return (
            <div className="field">
                <Card cardToDisplay={this.state.currentCard} />
                <div className="currentScore">
                    Score will be here
                </div>
                <FailedGuesses />
            </div>
        );
    }
});

// this.state.card