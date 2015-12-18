var React = require('react');

module.exports = React.createClass({
    render: function() {
        var wrongAnswers = this.props.wrongAnswers;

        return (
            <div className="failed-guesses">
                <span>Words you didn't know:</span><br/>
                {
                    Object.keys(wrongAnswers).map(function(wa) {
                        return (
                            <ul>
                                <li>{wa}</li>
                            </ul>
                        );
                    })
                }

            </div>
        );
    }
});