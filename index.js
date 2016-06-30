var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var port = process.env.PORT || 8080;
var indexPath = path.join(__dirname, '/dist/index.html');
var publicPath = express.static(path.join(__dirname, '/dist/'));


app.use(publicPath);
app.get('/', function (_, res) {
	res.sendFile(indexPath);
});

app.listen(port);
