var data = require('../public/json/explore.json');

exports.view = function(req, res) { 
  // Get data from form
  var ups = req.body.ups; // Get ups field
  var downs = req.body.downs; // Get downs field
  var reaction = req.body.reaction;

  // Modify item using data from form
  data.dishes[0].u4 = ups;
  data.dishes[0].d4 = downs;

  switch (reaction) {
    case 'disappointed':
      data.dishes[0].dis++;
      break;
    case 'meh':
      data.dishes[0].meh++;
      break;
    case 'happy':
      data.dishes[0].yay++;
      break;
  }

  res.render('updatedItem', data.dishes[0]);
}
