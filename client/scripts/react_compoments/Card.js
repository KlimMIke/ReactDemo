var React = require('react');

module.exports = React.createClass({
    render: function() {
        var currentCard = this.props.cardToDisplay;

        return (
            <div className="card">
                <span>{currentCard.eng}</span><br/>
                <input type="test" />
                <button>Ответить</button>
            </div>
        );
    }
});