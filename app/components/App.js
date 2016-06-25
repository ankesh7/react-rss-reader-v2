var React = require('react');
var Main = require('./Main');

var App = React.createClass({

  render: function() {

    return (
      <Main url={this.props.url} />
    );
  }
});

module.exports = App;
