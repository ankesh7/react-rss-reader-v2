var React = require('react');

var Failure = React.createClass({

  render: function() {
    Materialize.toast('Invalid RSS URL Bruh !', 4000);
    setTimeout(function () {
      Materialize.toast('Retry or Select from the feeds', 4000);
    }, 2500);
    return (
    <div></div>
    );
  }

});

module.exports = Failure;
