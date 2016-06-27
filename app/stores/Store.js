var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FeedConstants = require('../constants/FeedConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _urls = {
    url: {},
};

var _data = {
    data: []
}

function fetchRSS(url) {
    // Hand waving here -- not showing how this interacts with XHR or persistent
    // server-side storage.
    // Using the current timestamp + random number in place of a real id.
    google.load("feeds", "1");

    function init() {
        var feed = new google.feeds.Feed(url);
        feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
        feed.setNumEntries(15);
        feed.load(function(result) {
            if (!result.error) {
                // console.log(result);
                var repo = [];
                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    repo.push(entry);
                }
                // repo is the output
                _data = {
                    data: repo
                }
            }
        });
    }
    google.setOnLoadCallback(init);
}

var Store = assign({}, EventEmitter.prototype, {

    getFeed: function() {
        return _urls;
    },

    setFeed: function(data) {
        _urls = {
            url: data,
        }
        // debugger;
        // this.getData();
    },

    initialize: function() {
        var feed = new google.feeds.Feed(_urls.url);
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

                _data = {
                    data: repo
                }

            }
        }.bind(this));
        console.log(_data);
    },

    getData: function() {

        google.load("feeds", "1");
        google.setOnLoadCallback(this.initialize);
    },

    fetchRSS: function(data) {
        fetchRSS(data);
        console.log(_data);
        return _data;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
    var url;

    switch (action.actionType) {
        case FeedConstants.LOAD_FEED:
            fetchRSS(action.url);
            TodoStore.emitChange();
            break;

        default:
            // no op
    }
});

module.exports = Store;
