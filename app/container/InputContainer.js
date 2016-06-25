var React = require('react');
var Link = require('react-router').Link;
var Styles = require('../styles/Styles');

var InputContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {feedURL: ''};
    },

    updateURL: function(e) {
        this.setState({
            feedURL: e.target.value,
        });
        // console.log(this.state.feedURL);

    },
    onSubmit: function(){
      this.context.router.push({
          pathname: '/feedpage',
          query: {
              url: this.state.feedURL
          }
      })
    },

    render: function() {
        return (
            <div className="mainContainer" style={Styles.mainContainer}>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="feedinput" type="text" onChange={this.updateURL} value={this.state.feedURL}/>
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
