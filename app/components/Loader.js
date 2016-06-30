var React = require('react');
var Styles = require('../styles/Styles');

var Loader = React.createClass({

    render: function() {
        return (
          <div style={Styles.loaderContainer}>
            <div style={Styles.myloader}>
              <div className="preloader-wrapper big active">
                  <div className="spinner-layer spinner-cyan-only">
                      <div className="circle-clipper left">
                          <div className="circle"/>
                      </div>
                      <div className="gap-patch">
                          <div className="circle"/>
                      </div>
                      <div className="circle-clipper right">
                          <div className="circle"/>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        );
    }
});

module.exports = Loader;
