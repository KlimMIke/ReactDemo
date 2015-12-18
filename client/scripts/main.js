var ReactDOM = require('react-dom');
var React = require('react');
var Field = require('./react_compoments/Field');

ReactDOM.render(
    <Field nextCardUrl="/api/get" />,
    document.getElementById('container')
);