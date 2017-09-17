var mongoose = require('mongoose'),
	Poll     = require('./models/poll');

mongoose.connect("mongodb://localhost/voting_app", {useMongoClient: true});

// Poll.create({
// 	name: "Votam PrimMinistru",
// 	options: [
// 		{
// 			name: "Ponta",
// 			votes: 412
// 		}, 
// 		{
// 			name: "Johannis",
// 			votes: 5615
// 		}
// 	]
// }, function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });

var data = [{
	name: "Votam Presedinte",
	options: [{
		name: "Basescu",
		votes: 4521 
	}, {
		name: "Antonescu",
		votes: 651613
	}, {
		name: "Geoana",
		votes: 250
	}]
}, {
	name: "Mijloc de transport",
	options: [{
		name: "Bicicleta",
		votes: 545661
	}, {
		name: "Masina",
		votes: 65161331
	}]
}, {
	name: "Unde sa plec?",
	options: [{
		name: "Grecia",
		votes: 200
	}, {
		name: "Spania",
		votes: 58
	}, {
		name: "USA",
		votes: 2943
	}]
}];


var seedDB = function() {
	Poll.remove({}, function(err) {
		if (err) {
			console.log(err);
		} else {
			data.forEach(function(seed) {
				Poll.create(seed, function(err, votePoll) {
					if (err) {
						console.log(err);
					} else {
						console.log("Added poll -> " + votePoll.name);
					}
				});
			});
		}
	});
};

module.exports = seedDB;