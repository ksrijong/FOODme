//var data = require('explore.json');

$(document).ready(function() {

    //get dishes json data 
    var dishes;
    //for current dish 
    var curr;
    var i = 0; //tracker number

    //get JSON data with first 
         $.getJSON('explore.json', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        
        curr = data.dishes[i];
        console.log(curr);
        var name = curr.name;
        console.log("name variable testing..." + name);
        var im = curr.imgURL;
        $('#dish_img').attr('src', im);
        $('item').text(name);

});

         //move to next dish image
        $('#next').click(function() { 
            //change current dish number
                i = i+1;
                console.log(i);
                curr = dishes.dishes[i];
   
                    console.log(curr);
                    var im = curr.imgURL;
                    $('#dish_img').attr('src', im);
                console.log(dishes.length);
            
        }); 

        $('#prev').click(function() { 
             i = i-1;
            console.log(i);
            curr = dishes.dishes[i];
   
            console.log(curr);
            var im = curr.imgURL;
            $('#dish_img').attr('src', im);
            console.log(dishes.length);
        });


        //push new dish into your  bookmarks
        $('#book_button').click(function() { 

            var newBMK = { 
                'name' : curr.name, 
                'restaurant' : curr.restaurant, 
                'imgURL' : curr.imgURL,
                'address' : 'SD, CA'
            }
            console.log("BMK push testing...")
            console.log(newBMK);

            dishes.dishes.push(newBMK);
            console.log(dishes);
        });

})
 





    
