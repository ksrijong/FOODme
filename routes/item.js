var data = require('../explore.json');

exports.view = function(req, res) {
	console.log("Item Page testing...")
	res.render('item', data);

}
