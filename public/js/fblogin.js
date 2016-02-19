$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{1589516044683643}',
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });
});

function updateStatusCallback(){
   console.log('Status updated!!');
   // Your logic here
}

// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    testAPI();
    //window.location.href = '/exp';
    console.log('Redirected?');
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into Facebook.';
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    /*window.top.location = "/exp";
    console.log("Redirect!");*/
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1589516044683643',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    userID = JSON.stringify(response.id);
    console.log("resp: " + JSON.stringify(response));
    console.log("userID: " + userID);
    console.log('Successful login for: ' + response.name);
    /*document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';*/
    alert('Thanks for logging in, ' + response.name + '!');
    window.location.href = '/exp';
  });
}

function logOut() {
  try {
    if (FB.getAccessToken() != null) {
      FB.logout(function(response) {
        // user is now logged out from facebook do your post request or just redirect
        console.log("No Err-Logout")
        window.location.replace("/");
        });
      } else {
        // user is not logged in with facebook, maybe with something else
        console.log("Not logged in");
        window.location.replace();
      }
  } catch (err) {
    // any errors just logout
    console.log("Err-forced logout");
    window.location.replace("/");
  }
}
/*
  if (!response.session) {
    window.location = "/";
    return;
  }

  FB.logout(function(response) {
    window.location.href = '/';
    console.log("Logged out");
  });
}*/

function getProfileInfo() {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // the user is logged in and has authenticated your
      // app, and response.authResponse supplies
      // the user's ID, a valid access token, a signed
      // request, and the time the access token
      // and signed request each expire
      var uid = response.authResponse.userID;
      var accessToken = response.authResponse.accessToken;

      FB.api('/me', function(response) {
        document.getElementById('userName').innerHTML = response.name;
        //alert ("Welcome " + response.name + ": Your UID is " + response.id);
        console.log("response.id: " + response.id);
        console.log("uid: " + uid);
        console.log("accessToken: " + accessToken);
      });


      FB.api('/me', 'GET', {fields: 'picture.width(175).height(175)'}, function(response) {
        console.log("response pic data url: " + response.picture.data.url);
				document.getElementById('profPic').innerHTML = "<img src='" + response.picture.data.url + "'>";
			});

      FB.api('/me/user_friends', 'GET', {fields: 'user_friends'}, function(response) {
        console.log("response: " + JSON.stringify(response));
        console.log("user friends: " + response.user_friends);
				//document.getElementById('profPic').innerHTML = "<img src='" + response.picture.data.url + "'>";
			});

      /*
      FB.api('/me', 'GET', {fields: 'first_name,last_name,name,id,picture.width(150).height(150)'}, function(response) {
				document.getElementById('status').innerHTML = "<img src='" + response.picture.data.url + "'>";
			});
      */
/*
      FB.api(
        //"/{user-id}/picture",
        "{"+ uid +"}/picture",
        function (response) {
          console.log("resp: " + JSON.stringify(response));
          if (response && !response.error) {
          }
        }
      );*/
    } else if (response.status === 'not_authorized') {
      // the user is logged in to Facebook,
      // but has not authenticated your app
    } else {
      // the user isn't logged in to Facebook.
    }
  });

        /*
    console.log("userID: " + userID);
    FB.api(
      //"/{user-id}/picture",
      "{user-id}/picture",
      function (response) {
        console.log(response);
        console.log("resp: " + JSON.stringify(response));
        if (response && !response.error) {
          //document.getElementById('profPic').innerHTML = response.

        }
      }
    );

    FB.api('/me', function(response) {
      console.log("Changing profile pic");
      document.getElementById('userName').innerHTML = response.name;
    });*/
}
