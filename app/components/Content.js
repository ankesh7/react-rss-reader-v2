var React = require('react');
var _ = require("underscore.string");

var Content = React.createClass({
  componentWillMount: function() {
    // this.props.content = $.parseHTML(this.props.content)
  },
  render: function() {
    var x = _.unescapeHTML(this.props.content).trim();
    return (
      <p>
        {x}
      </p>
    );
  }
})

module.exports = Content;
