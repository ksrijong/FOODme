var name;  
var pw; 
var cpw; //confirm password match
var email; 
var profileData;

$(document).ready(function() { 
	console.log("register jquery connected!");

	$.getJSON('../json/myprofile.json', function(data){
		var profileData = data;
		console.log(data.myProfile[0]);
		console.log("imported success!");
	})

	$('#submit').click(function() { 
		checkRegistration();
	})
})

//check validation of registration
function checkRegistration() { 
	//preventDefault();
	name = $('#name').val(); 
	pw = $('#pass1').val();
	cpw = $('#pass2').val();
	email = $('#email').val();

	//check for correct output: debugging
	/*console.log("name: " + name);
	console.log("password: " + pw);
	console.log("password2: " + cpw);
	console.log("email: " + email);*/

	if (name == '' || email == '' || pw == '' || cpw == '') {
		alert("Please fill all fields");
	}

	else if (pw != cpw) { 
		$('#pass1').css('background-color', "red");
		$('#pass2').css('background-color', "red");
		alert("Your passwords do not match. Please retype both fields.");	
	}
	else if (pw.length < 6) { 
		$('#pass1').css('background-color', "red");
		$('#pass2').css('background-color', "red");
		alert("Your password must be at least six characters long");
	}
	else { 

		signupSuccess();
	}

} //end of checkRegistration function 

function signupSuccess() { 
	alert("Sign up success!");
	prof = 
		{
			"name": name,
			"email": email, 
			"password": pw,
			"city": "n/a"	
		};
	profileData.push(prof);
	console.log("Successing printing..." + prof);
}