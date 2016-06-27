var React = require('react');
var Main = require('../components/Main');
var Store = require('../stores/Store');
var FeedActions = require('../actions/FeedActions');

function getFeed() {
    return Store.getFeed()
}

var FeedContainer = React.createClass({
    // getInitialState: function() {
    //     return getFeed();
    // },
    contextTypes: {
        router: React.PropTypes.object.isRequired,
    },
    render: function() {
      
        return (<Main url={this.props.location.query.url}/>);
    }

});

module.exports = FeedContainer;
