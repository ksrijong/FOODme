$(document).ready(function() { 

	console.log('friends js connected!');
	var i = localStorage.getItem('friend');
	console.log(i);

	$('.friend').click(function() { 
		var name = $(this).attr("id");
		console.log(name);
		localStorage.setItem('friend', name);
	})
})