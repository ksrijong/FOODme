var dishes = [];
var bookmarks = [];
    //for current dish
var curr;
var i = 0; //tracker number

$(document).ready(function() { 
	console.log('upload.js connected!');

	$.getJSON('../json/explore.json', function(data) {
        dishes = data;
        console.log("getJSON activated!");
         //loading slideshow
        curr = dishes.dishes[i];
        console.log(curr);
        var name = curr.name;
        console.log("name variable testing..." + name);
        var im = "../" + curr.imgURL;
        console.log("Image is..." + im);
        $('#dish_img').attr('src', im);
        
  
});

	$('#upBtn').click(function() { 
		console.log('Submit Clicked!');
		/*var tags = $('#address').val();
		var array = new Array();
		array = tags.split(',');
		console.log(array);*/
		
		$.post('/addExplore', { 
				'dishName': $('#name').val(),
				'restaurantName': $('#restaurant').val(),
				'address': $('#address').val(),
				'imgURL': 'http://lorempixel.com/400/400/food/' 
		
		}, function (res) {});

		

		 
	/*console.log(newDish);
	console.log(dishes.dishes.length);
	dishes['dishes'].push(newDish); 
	max = dishes.dishes.length;
	console.log(dishes.dishes[max - 1]);*/

	})
})