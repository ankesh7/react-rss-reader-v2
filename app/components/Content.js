var React = require('react');

var Content = React.createClass({
  componentWillMount: function() {
    // this.props.content = $.parseHTML(this.props.content)
  },
  render: function() {
    
    return (
      <p>
        {this.props.content}
      </p>
    );
  }
})

module.exports = Content;
