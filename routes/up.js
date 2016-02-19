var data = require("../public/json/explore.json");

exports.view = function(req, res){

	res.render('uploadDish', data);
	};

exports.addExplore = function(req, res) { 

	var addDish = { 
			'id': '6',
			'dishName': req.body.name, 
			'restaurantName': req.body.restaurant, 
			'address': req.body.address, 
			'imgURL': req.body.imgURL
		};
	console.log(addDish);
	data['dishes'].push(addDish);
	console.log(data);
	// res.render('explore', data);
};

exports.getExplore = function (req, res) {
	res.json(data);	
};