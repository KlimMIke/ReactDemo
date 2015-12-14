var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="failed-guesses">
                <span>Words you didn't know:</span><br/>
                <ul>
                    <li>There will be shown the words that the users didn't guess.</li>
                    <li>Just to show how to work with lists of data</li>
                    <li>There will be shown the words that the users didn't guess.</li>
                    <li>Just to show how to work with lists of data</li>
                    <li>There will be shown the words that the users didn't guess.</li>
                    <li>Just to show how to work with lists of data</li>
                </ul>
            </div>
        );
    }
});