var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var Styles = require('../styles/Styles');
var Reader = require('../components/Reader');

var InputContainer = React.createClass({
    getInitialState: function() {
        return {loading:false,failed:false, feedtitle: '', data: [], value: 'https://www.engadget.com/rss.xml'}
    },
    _reInit:function(url){
      var feed = new google.feeds.Feed(url);
      feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
      feed.setNumEntries(20);
      feed.load(function(result) {
        console.log(result.error);
          if (!result.error) {
              var repo = [];
              var title = result.feed.title;
              for (var i = 0; i < result.feed.entries.length; i++) {
                  var entry = result.feed.entries[i];
                  repo.push(entry);
              }
              this.setState({loading:true,failed:false,feedtitle: title, data: repo});
          }
          else{
            this.setState({loading:false,failed:true, feedtitle: title, data: repo});
          }
      }.bind(this));
    },
    _onChange: function(e) {
        this.setState({ loader:false,failed:false, value: e.target.value});
    },

    _onSubmit: function(e) {
      e.preventDefault();
      this.setState({loading:false, failed:false});
      setTimeout(function () {
        this._reInit(this.state.value);
      }.bind(this), 800);
    },

    _linkClick: function(e) {
        e.preventDefault();
        var url = $(e.target).attr('data-url');
        this.setState({loading:false,failed:false});
        setTimeout(function () {
          this._reInit(url);
        }.bind(this), 800);
    },

    initialize: function() {
        var feed = new google.feeds.Feed(this.state.value);
        feed.setResultFormat(google.feeds.Feed.JSON_FORMAT);
        feed.setNumEntries(15);
        feed.load(function(result) {

            if (!result.error) {
                var repo = [];
                var title = result.feed.title;
                for (var i = 0; i < result.feed.entries.length; i++) {
                    var entry = result.feed.entries[i];
                    repo.push(entry);
                }
                this.setState({loading:true,failed:false,feedtitle: title, data: repo});
            }
        }.bind(this));
    },

    componentWillMount: function() {
        google.load("feeds", "1");
    },

    componentDidMount: function() {
        $('.dropdown-button').dropdown({
            inDuration: 1500, outDuration: 1500, constrain_width: true,
            hover: false,
            gutter: 0,
            belowOrigin: true,
            alignment: 'center'   });
        $('.modal-trigger').leanModal({
          ready: function(){
            $('#feedinput').val('');
          }
        });
    },

    render: function() {
        google.setOnLoadCallback(this.initialize);
        return (
            <div className="mainContainer" style={Styles.mainContainer}>
                <div className="dropdown-container">
                    <div className="row">
                        <div className="col m6 offset-m3">
                            <a className="dropdown-button cyan darken-3 col m12 btn hoverable waves-effect waves-dark" href="javascript:;" data-activates="dropdown1">
                                Select feeds here !
                                <i className="material-icons right">send</i>
                            </a>
                            <ul id="dropdown1" className="dropdown-content">

                                <li>
                                    <a onClick={this._linkClick} data-url="http://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" href="javascript:;">
                                        New York Times Tech News
                                    </a>
                                </li>
                                <li>
                                    <a onClick={this._linkClick} data-url="http://forbesindia.com/rssfeed/rss_life.xml" href="javascript:;">
                                        Forbes India
                                    </a>
                                </li>

                                <li>
                                    <a onClick={this._linkClick} data-url="https://www.engadget.com/rss.xml" href="javascript:;">Engadget</a>
                                </li>
                                <li>
                                    <a onClick={this._linkClick} data-url="http://feeds.feedburner.com/TechCrunch/" href="javascript:;">TechCrunch</a>
                                </li>
                                <li>
                                    <a onClick={this._linkClick} data-url="https://www.smashingmagazine.com/feed/" href="javascript:;">
                                        Smashing Magazine
                                    </a>
                                </li>

                                <li>
                                    <a onClick={this._linkClick} data-url="http://www.ctvnews.ca/rss/ctvnews-ca-canada-public-rss-1.822284
                          " href="javascript:;">
                                        CTV News
                                    </a>
                                </li>

                                <li>
                                    <a onClick={this._linkClick} data-url="http://www.uefa.com/rssfeed/news/rss.xml" href="javascript:;">UEFA.com</a>
                                </li>
                                 <li className="divider"></li>
                                <li>
                                    <a className="modal-trigger" href="#modal1">Wanna fetch something else ?</a>
                                </li>    </ul>
                        </div>
                    </div>

                </div>
                <Reader loader={this.state.loading} failed={this.state.failed} data={this.state.data} title={this.state.feedtitle}/>
                <div id="modal1" className="modal">
                    <form onSubmit={this._onSubmit}>
                        <div className="modal-content">

                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="feedinput" type="text" onChange={this._onChange} value={this.state.value || ''}/>
                                    <label htmlFor="feedinput">
                                        Enter RSS URL
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="modal-action modal-close waves-effect waves-green btn-flat" type="submit">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = InputContainer;
