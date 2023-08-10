// Create web server application

// Import modules
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Set the port number
var port = 3000;

// Set the path for static resources
app.use(express.static(path.join(__dirname, 'public')));

// Set the path for the views
app.set('views', path.join(__dirname, 'views'));

// Set the view engine
app.set('view engine', 'ejs');

// Set the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the routes
var routes = require('./routes/index');
app.use('/', routes);

// Start the server application
app.listen(port, function() {
    console.log('Server is running at port ' + port);
});
