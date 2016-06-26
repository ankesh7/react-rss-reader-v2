var React = require('react');
var Main = require('../components/Main');

var FeedContainer = React.createClass({
  contextTypes: {
      router: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <Main url={this.props.location.query.url} />
    );
  }

});

module.exports = FeedContainer;
