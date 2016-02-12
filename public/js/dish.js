$(document).ready(function() { 
	console.log('dish.js connected!');

	//get dishes json data 
    var dishes;
    //for current dish 
    var curr;
    var i = 5;

    //get JSON data with first 
         $.getJSON('explore.json', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        
        curr = data.dishes[i];
        console.log(curr);
        var name = curr.name;
        console.log("name variable testing..." + name);
        var im = curr.imgURL;
        var place = curr.restaurant;
        $('#dishIMG').attr('src', im);
        $('#dis').text(curr.dis);
        $('#meh').text(curr.meh);
        $('#yay').text(curr.yay);
        $('#restaurant').text(place);
        $('#dish_name').text(name);

});
})