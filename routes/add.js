var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	res.render('add');
	var newFriend = {
		'name': req.query.name,
		'description': req.query.description,
		'imageURL': 'http://lorempixel.com/400/400/people/'
	}
	console.log(newFriend.name);
	console.log(newFriend.description);
	data["friends"].push(newFriend);
 }
