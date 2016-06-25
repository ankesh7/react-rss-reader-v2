var React = require('react');

var Rssdate = React.createClass({
  render: function() {
    return (
      <p>
        <small>
          {this.props.date}
        </small>
      </p>
    );
  }

})

module.exports = Rssdate;
