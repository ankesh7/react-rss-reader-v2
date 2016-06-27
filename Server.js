var express = require('express');
var app = express();

var indexPath = path.join(__dirname, 'index.html');
var publicPath = express.static(path.join(__dirname, 'app'));

app.use('/app', publicPath);
app.get('/', function(_, res) {
    res.sendFile(indexPath);
});

app.listen(process.env.PORT || 8080);
