var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(port, function(){
	// console.log(path.join(__dirname + '/dist/index.html'));
});
