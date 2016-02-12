var data = require('../explore.json');

exports.view = function(req, res) { 
	console.log("Explore page testing...")
	res.render('explore', data);

}