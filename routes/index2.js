// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
		/*'name': 'Fake friend',
		'imageURL': 'http://lorempixel.com/500/500/people',
		'description': 'All my friends are imaginary'*/
};
