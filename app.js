var express = require('express'),
	app     = express(),
	path    = require('path');

app.set("view engine", 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
	res.render("index");
});

app.listen(8080, function() {
	console.log("App is listening on port 8080");
});