var data = require('../public/json/explore.json');

exports.view = function(req, res) { 
  // Get data from form
  var ups = req.body.ups; // Get ups field
  var downs = req.body.downs; // Get downs field
  var happy = req.body.happy;
  var eh = req.body.eh;
  var unhappy = req.body.unhappy;

  // Modify item using data from form
  data.dishes[0].u4 = ups;
  data.dishes[0].d4 = downs;
  data.dishes[0].dis = unhappy;
  data.dishes[0].meh = eh;
  data.dishes[0].yay = happy;

  res.render('updatedItem', data.dishes[0]);
}
