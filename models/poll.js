var mongoose = require('mongoose');

var pollSchema = mongoose.Schema({
	name: String,
	options: [{
		name: String,
		votes: Number
	}];
});

module.exports = mongoose.model("Poll", pollSchema);