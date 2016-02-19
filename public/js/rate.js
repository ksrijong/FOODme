var curr;
var id = 0; 
var dishes; 
var face = ""; 
var ups = false;
var downs = false;
var complete = false;

$(document).ready(function() { 

    console.log("rate.js connected!");
    var r = localStorage.getItem('rate');
    id = parseInt(r);
    console.log("r = " + r);
    //get json array data
    $.get('/addExplore', function(data) {
        dishes = data;
        console.log("getJSON activated!");
        console.log(dishes);
         //loading slideshow
        curr = dishes.dishes[id];
        console.log(curr);
        var name = curr.dishName;
        console.log("name variable testing..." + name);
        var im = "../" + curr.imgURL;
        console.log("Image is..." + im);
        $('#dish_img').attr('src', im);
        console.log(dishes.dishes.length); 
        loadDishReview();
    });


    //in rating form, the following are choices for facial expressions
    $('.em-disappointed').click(function() { 
        console.log('disappointed clicked!');
        $('.em-disappointed').css('opacity', 1);
        $('.em-confused').css('opacity', 0.5);
        $('.em-smiley').css('opacity', 0.5);
        face = 'dis';

    });


    $('.em-confused').click(function() { 
        console.log('meh clicked!');
        $('.em-disappointed').css('opacity', 0.5);
        $('.em-confused').css('opacity', 1);
        $('.em-smiley').css('opacity', 0.5);
        face = 'meh';


    });

    $('.em-smiley').click(function() { 
        console.log('yay clicked!');
        $('.em-disappointed').css('opacity', 0.5);
        $('.em-confused').css('opacity', 0.5);
        $('.em-smiley').css('opacity', 1);
        face = 'yay';

    })

    $('#rateBtn').click(function() { 
        console.log("rate id success!");
    });

    $("#submitBtn").click(function() { 
        checkCompletion();
        if (complete == true) { 
            alert("Your rating was submited!");
            window.location.href = "/exp";
            return false;

        }
        else { 
            missing();
            return false;
        }
    })
    
}) //end of document ready

function loadDishReview()  { 
    //set image
    var img = "../" + curr.imgURL; 
    console.log(img);
    $('#dishIMG').attr('src', img);
    $('#dis').text(curr.dis);
    $('#meh').text(curr.meh);
    $('#yay').text(curr.yay);
    $('#u1').text(curr.u1);
    $('#u2').text(curr.u2);
    $('#u3').text(curr.u3);
    $('#d1').text(curr.d1);
    $('#d2').text(curr.d2);
    $('#d3').text(curr.d3);
    $('#dish_name').text(curr.dishName);
    $('#restaurant').text(curr.restaurantName);
}



//taking to rateForm
function rateForm() { 
    alert("Taking you to rate form!");
}

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
    if (face != "" && ups != false && downs != false) { 
        complete = true;
        changeData();
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

function changeData() { 

    if (face == 'dis') { 
        console.log(curr.dis);
        curr.dis++;
        console.log(curr.dis);
    }
    else if (face == 'meh') { 
        console.log(curr.meh);
        curr.meh++;
        console.log(curr.meh);
    }
    else if (face == 'yay') { 
        console.log(curr.yay);
        curr.yay++;
        console.log(curr.yay);
    }

}
