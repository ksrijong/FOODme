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
    });

        //in rating form, the following are choices for facial expressions
    $('.em-disappointed').click(function() {
        console.log('disappointed clicked!');
        $('.em-disappointed').css('opacity', 1);
        $('.em-confused').css('opacity', 0.5);
        $('.em-smiley').css('opacity', 0.5);
        face = true;

    });


    $('.em-confused').click(function() {
        console.log('meh clicked!');
        $('.em-disappointed').css('opacity', 0.5);
        $('.em-confused').css('opacity', 1);
        $('.em-smiley').css('opacity', 0.5);
        face = true;

    });

    $('.em-smiley').click(function() {
        console.log('yay clicked!');
        $('.em-disappointed').css('opacity', 0.5);
        $('.em-confused').css('opacity', 0.5);
        $('.em-smiley').css('opacity', 1);
        face = true;

    })

    $("#submitBtn").click(function() {
        checkCompletion();
        if (complete == true) {
            alert("Your rating was submited!");
            $.get('/item');

        }
        else {
            missing();
            return false;
        }
    })

})

function checkInput() {
    if ($('#ui').val() != '') {
        ups = true;
        console.log(ups);
    };
    if ($('#di').val() != '') {
        downs = true;
        console.log(downs);
    };
}

function checkCompletion() {
    checkInput();
    if (face != false && ups != false && downs != false) {
        complete = true;
    };
}

function missing() {
    var missing = '';
    if (face == false) {
        missing = missing + " Faces ";
    }

    if (ups == false) {
        missing = missing + " Ups ";
    }
    if (downs == false) {
        missing = missing + " Downs ";
    }
    alert("You are missing the following: " + missing);
    return false;
}
