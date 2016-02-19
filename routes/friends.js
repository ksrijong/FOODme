var data = require('../public/json/friends.json');

exports.view = function(req, res) {
	console.log("Friends page testing...")
	res.render('friends', data);
	console.log(data);

}