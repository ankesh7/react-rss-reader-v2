var AppDispatcher = require('../dispatcher/AppDispatcher');
var FeedConstants = require('../constants/FeedConstants');

var FeedActions = {

  loadFeedAPI: function(url) {
    AppDispatcher.dispatch({
      actionType: FeedConstants.LOAD_FEED,
      url: url
    });
  }

};

module.exports = FeedActions;
