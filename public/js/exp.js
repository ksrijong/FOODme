var data = require('../bookmarks.json');

exports.view = function(req, res) {
	console.log("Explore page testing...")
	res.render('explore', data);

}

exports.addBkmk = function(req, res) { 
	// Your code goes here
	res.render('bookmarks');
	var newBookmark = {
		'restaurantName': req.query.restaurantName,
		'dishName': req.query.dishName,
		'address': req.query.address,
		'imageURL': req.query.imgURL
	}
	console.log(newBookmark.name);
	console.log(newBookmark.description);
	data["bookmarks"].push(newBookmark);
 }
