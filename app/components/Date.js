var React = require('react');

var RssDate = React.createClass({
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

module.exports = RssDate;
