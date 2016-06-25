var React = require('react');

var Title = React.createClass({
  render: function() {
    return (
      <span className="card-title">
        {this.props.title}
      </span>
    );
  }

})

module.exports = Title;
