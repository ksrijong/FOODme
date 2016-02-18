$(document).ready(function() {

    initializePage();

    //creating food image array
    var foodArr = new Array();
    var burger = "food/burger.jpg";
    var pizza = 'food/pizza.jpg';
    var sushi = 'food/sushi.jpg';
    var steak = 'food/steak.jpg';
    foodArr = [burger, pizza, sushi, steak];

    var i = 0;
    //moves to next image
    $("#next").click(function() {
        $('#bmk_confirm').css('visibility', 'hidden');
        console.log("right clicked!");
        if (i < foodArr.length - 1) {
             $("#end").css('visibility', 'hidden');
            $('img').attr('src', foodArr[i]);
            i++;
        }
        else if (i == foodArr.length - 1) {
            $('img').attr('src', foodArr[i]);
            $("#end").css('visibility', 'visible');
        }
        else {

        }
        console.log(i); // for testing purposes
    });

    //clicking left will go back to previous
    $("#prev").click(function() {
        $('#bmk_confirm').css('visibility', 'hidden');
        console.log("left clicked!");
        if (i > 0) {
            i--;
            $("#end").css('visibility', 'hidden');
            $('img').attr('src', foodArr[i]);
        }
        else if (i == 0){
            $('img').attr('src', foodArr[i]);
            $("#end").css('visibility', 'visible');
        }
        else {

        }
        console.log(i);
    });

    //receive confirmation that you bookmarked dish
    $('#bmk').click(function() {
        $('#bmk_confirm').css('visibility', 'visible');
    })
})

function initializePage() {
	console.log("Javascript connected!");
}
