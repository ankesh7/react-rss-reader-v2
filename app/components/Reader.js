var React = require('react');
var Main = require('./Main');
var Title = require('./Title');
var Rssdate = require('./Rssdate');
var Content = require('./Content');
var Link = require('react-router').Link;

var Reader = React.createClass({
  render: function() {
    var rssEntry = this.props.data.map(function(item, i) {
      return <div
        key={i}
        className="col m8 offset-m2">
        <div className="card cyan darken-3 hoverable">
          <a
            target="_blank"
            href={item.link}
            className="white-text waves-effect waves-dark">
            <div className="card-content white-text">
              <Title title={item.title} />
              <Rssdate date={item.publishedDate.slice(0, -9)} />
              <Content content={item.contentSnippet} />
            </div>
          </a>
        </div>

      </div>;
    });
    // console.log(rssEntry);
    return (
      <div className="container">
        <div className="row">
          {rssEntry}
        </div>
      </div>
    );
  }
});

module.exports = Reader;
