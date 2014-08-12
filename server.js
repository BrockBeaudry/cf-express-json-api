'use strict';

// Dependencies

var http = require('http');
var express = require('express');

// Dependency instances

var app = express();
var server = http.createServer(app);

// Server config

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: %d', app.get('port'));
});

// Routing

app.get('/name/:name', function(request, response) {
    response.json({ msg: 'Hello, ' + request.param('name') });
});