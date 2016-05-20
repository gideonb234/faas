var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var routes = require('./routes');

app.use('/api', routes);

app.listen(port);
console.log('Fuckboy as a service listening on port ' + port);