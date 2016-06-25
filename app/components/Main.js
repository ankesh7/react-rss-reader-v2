var React = require('react');
var Reader = require('./Reader');

var Main = React.createClass({

    getInitialState: function() {
        return {data:[]};
    },

    initialize: function() {
        var feed = new google.feeds.Feed(this.props.url);
        feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
        feed.setNumEntries(15);
        feed.load(function(result) {
            if (!result.error) {
                // console.log(result);
                var container = document.getElementById("app");
                var repo = [];

                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    repo.push(entry);
                }
                this.setState({data:repo
                })
            }
        }.bind(this));

    },

    componentWillMount: function() {
        google.load("feeds", "1");
        google.setOnLoadCallback(this.initialize);
    },

    render: function() {
         console.log(this.state);
        return (<Reader data={this.state.data} />);
    }
});

module.exports = Main;
