var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

//require http so we can use http requests and responses
var http = require('http');

//so that we can parse post data through the req.body
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//This is out static content...for NO EJS
app.use(express.static(path.join(__dirname,'./client')));

//require the mongoose config file that connects to the db and loads all of the models
require('./server/config/mongoose');

//require the routes file and pass it the express app
require('./server/config/routes')(app);

//listen and also sets the port. For some reason this is required for deployment. 
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log("cool stuff on "+ app.get('port'));
});