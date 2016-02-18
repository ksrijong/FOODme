// Get all of our friend data
var data = require('../bookmarks.json');

exports.view = function(req, res){
	console.log(data);
	console.log("TEST");
	res.render('bookmarks', data);
		/*'name': 'Fake friend',
		'imageURL': 'http://lorempixel.com/500/500/people',
		'description': 'All my friends are imaginary'*/
};
