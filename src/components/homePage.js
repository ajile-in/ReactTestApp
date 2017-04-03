"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Adminstration</h1>
                <p>React, React Router, and Flux for ultra-respoinsive web apps.</p>
            </div>
        );
    }
});

module.exports = Home;