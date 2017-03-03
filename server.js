var express = require("express");
var app = express();
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
