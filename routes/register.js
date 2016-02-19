// Get all of our friend data
var data = "../json/myprofile.json";
exports.view = function(req, res){

	res.render('register', data);
};
