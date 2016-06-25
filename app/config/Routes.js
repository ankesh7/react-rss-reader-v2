var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var InputContainer = require('../container/InputContainer');
var FeedContainer = require('../container/FeedContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={InputContainer}></Route>
        <Route path='/feedpage' component={FeedContainer}></Route>
    </Router>
);

module.exports = routes;
