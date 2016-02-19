//var data = require('explore.json');

//get dishes json data
    var dishes;
    var bookmarks;
    //for current dish
    var curr;
    var i = 0; //tracker number
    var face = false;
    var ups = false;
    var downs = false;
    var complete = false;

$(document).ready(function() {

    //get JSON data with first
    console.log("BEFORE EXPLORE!");

    // OLD STUFF START
    
    $.getJSON('../json/explore.json', function(data) {
      dishes = data;
      console.log("getJSON activated!");

      curr = dishes.dishes[i];
      console.log(curr);
      var name = curr.dishName;
      console.log("name variable testing..." + name);
      var im = curr.imgURL;
      console.log(im);
      $('#dish_img').attr('src', im);
      //setting up for review page
      $('#dishIMG').attr('src', im);
      $('item').text(name);
      $('#dis').text(curr.dis);
      $('#meh').text(curr.meh);
      $('#yay').text(curr.yay);
      $('#u1').text(curr.u1);
      $('#u2').text(curr.u2);
      $('#u3').text(curr.u3);
      $('#d1').text(curr.d1);
      $('#d2').text(curr.d2);
      $('#d3').text(curr.d3);
      $('#restaurant').text(curr.restaurantName);
      $('#dish_name').text(curr.dishName);
      $('#dname').html(curr.dishName);
      $('#drest').html(curr.restaurantName);
      console.log(curr.dishName);
    });

    //get JSON data of bookmarks
    $.getJSON('../json/bookmarks.json', function(data) {
      bookmarks = data;
      console.log("getJSON activated!");
      console.log(bookmarks);
    });

    // OLD STUFF END

    //get json array data
    $.get('/addExplore', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        console.log(dishes);
         //loading slideshow
        curr = dishes.dishes[i];
        console.log(curr);
        var name = curr.dishName;
        console.log("name variable testing..." + name);
        var im = "../" + curr.imgURL;
        console.log("Image is..." + im);
        $('#dish_img').attr('src', im);
        console.log(dishes.dishes.length);
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

    $('#dish_img').click(function() {
            localStorage.setItem('rate', i);
            console.log("ajax testing...");

        });

    //push new dish into your bookmarks
    $('#book_button').click(function() {
      console.log(bookmarks);
      alert(curr.dishName + " bookmarked!");
      var newBMK = {
        'dishName' : curr.dishName,
        'restaurantName' : curr.restaurantName,
        'imgURL' : curr.imgURL,
        'address' : 'SD, CA'
      }
      console.log("BMK push testing...")
      console.log(newBMK);

      bookmarks.bookmarks.push(newBMK);
      console.log(bookmarks);

      $.get(
        "/addBookmark",
        {
          'dishName' : curr.dishName,
          'restaurantName' : curr.restaurantName,
          'imgURL' : curr.imgURL,
          'address' : 'SD, CA'
        }
      );
    })

  });
