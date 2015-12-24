var ReactDOM = require('react-dom');
var React = require('react');
var $ = require('jquery');

var Card = require('./Card');
var FailedGuesses = require('./FailedGuesses');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            currentCard: { eng: '', rus: '' },
            wrongAnswers: {}
        };
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

    handleUserAnswer: function(isCorrect) {
        var wrongAnswers = this.state.wrongAnswers;
        var word = this.state.currentCard.eng;

        if (isCorrect) {
            delete wrongAnswers[word];
        } else {
            wrongAnswers[word] = true;
        }

        this.getNextCard();
    },

    render: function() {
        return (
            <div className="field">
                <Card cardToDisplay={this.state.currentCard} onAnswer={this.handleUserAnswer} />
                <FailedGuesses wrongAnswers={this.state.wrongAnswers} />
            </div>
        );
    }
});