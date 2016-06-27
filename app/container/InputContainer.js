var React = require('react');
var Link = require('react-router').Link;
var Styles = require('../styles/Styles');
var Store = require('../stores/Store');

function getFeed(){
  return {
    url: Store.getFeed(),
  };
}

function setFeed(data){
  Store.setFeed(data);
}

var InputContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return getFeed();
    },

    _onChange: function(e) {
        this.setState({
            value: e.target.value,
        });
        // console.log(this.state.feedURL);

    },
    _onSubmit: function(e){
      // e.preventDefault();
      setFeed(this.state.value);
      this.context.router.push({
          pathname: '/feedpage',
          query: {
              url: this.state.value
          }
      })

    },

    render: function() {
        return (
            <div className="mainContainer" style={Styles.mainContainer}>
                <form onSubmit={this._onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="feedinput" type="text" onChange={this._onChange} value={this.state.value}/>
                            <label htmlFor="feedinput">
                                Enter RSS URL
                            </label>
                            <button className="btn waves-effect waves-light" type="submit">
                                Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = InputContainer;
