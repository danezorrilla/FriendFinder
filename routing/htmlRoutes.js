// Problem 1: we don't have access to app

// var express = require('express');
// var bodyParser = require('body-parser');

// import the path module
var path = require('path');

// var server = require('../../server.js');

// var app = server();
// var PORT = process.env.PORT || 3000;

// app.get("/")
// Problem 2: what do we export

module.exports = function(app){
    // gets request when use visits a page

    // home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // survey page
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}
