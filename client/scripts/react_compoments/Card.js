var React = require('react');

module.exports = React.createClass({
    checkAnswer: function(currentCard) {
        if (currentCard.eng == currentCard.rus) {
            alert('correct');
        }
    },

    handleAnswerChange: function(event) {
        this.setState({ answer: event.target.value });
    },

    render: function() {
        var currentCard = this.props.cardToDisplay;

        return (
            <div className="card">
                <span>{currentCard.eng}</span><br/>
                <input type="text" onChange={this.handleAnswerChange} />
                <button>Ответить</button>
            </div>
        );
    }
});