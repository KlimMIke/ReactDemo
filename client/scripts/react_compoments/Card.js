var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="card">
                This is a card.<br/>
                An image will go here.<br/>
                And here we'll have a form to submit user's guess.
            </div>
        );
    }
});