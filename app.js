var settings = require('./settings'),
    express = require('express'),
    app = express(),
    server = require('http').createServer(app); 
settings(app);
