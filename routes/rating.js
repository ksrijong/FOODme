// Get all of our friend data
var data = require('../explore.json');

exports.view = function(req, res){
	console.log(data);
	console.log("TEST");
	res.render('rateform', data);
		
};