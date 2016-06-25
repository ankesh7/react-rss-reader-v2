var React = require('react');
var App = require('../components/App');

var FeedContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired,
  },

  render: function() {

    return (
      <App url={this.props.location.query.url} />
    );
  }

});

module.exports = FeedContainer;
