var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist")); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
