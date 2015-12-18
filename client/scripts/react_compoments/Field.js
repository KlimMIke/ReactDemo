var ReactDOM = require('react-dom');
var React = require('react');
var $ = require('jquery');

var Card = require('./Card');
var FailedGuesses = require('./FailedGuesses');

module.exports = React.createClass({
    getInitialState: function() {
        // this.state.card = {}
        return { currentCard: { eng: '', rus: '' } };
    },

    componentDidMount: function() {
        this.getNextCard();
    },

    getNextCard: function() {
        $.ajax({
            url: this.props.nextCardUrl,
            dataType: 'json',
            type: 'GET',
            success: function(newCard) {
                this.setState({ currentCard: newCard });
            }.bind(this)
        })
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