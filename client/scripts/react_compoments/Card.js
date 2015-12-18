var React = require('react');

module.exports = React.createClass({
    checkAnswer: function(currentCard) {
        var onAnswer = this.props.onAnswer;
        onAnswer(this.state.answer == currentCard.rus, currentCard.eng);
        this.setState({ answer: '' });
    },

    getInitialState: function() {
        return { answer: '' };
    },

    handleAnswerChange: function(event) {
        this.setState({ answer: event.target.value });
    },

    render: function() {
        var currentCard = this.props.cardToDisplay;

        return (
            <div className="card">
                <span>{currentCard.eng}</span><br/>
                <input type="text" value={this.state.answer} onChange={this.handleAnswerChange} />
                <button onClick={this.checkAnswer.bind(this, currentCard)}>Ответить</button>
            </div>
        );
    }
});