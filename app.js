var express  = require('express'),
	app      = express(),
	path     = require('path'),
	mongoose = require('mongoose'),
	Poll     = require('./models/poll'),
	seedDB   = require('./seeds');

seedDB();

app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.render("index");
});

// =============
//   START APP
// =============
app.listen(8080, function() {
	console.log("App is listening on port 8080");
});