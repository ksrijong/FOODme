
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var add = require('./routes/add');
var homepage = require('./routes/homepage');
var bookmarks = require('./routes/bookmarks');
var exp = require('./routes/exp');
var item = require('./routes/item');
var rate = require('./routes/rating');
var postRating = require('./routes/postRating');
var profile = require('./routes/profile');
var register = require('./routes/register');
var upload = require('./routes/up');
var friends = require('./routes/friends');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/add', add.addFriend)
app.get('/homepage', homepage.view)
app.get('/bookmarks', bookmarks.view)
app.get('/exp', exp.view)
app.get('/item', item.view)
app.get('/rate', rate.view)
app.post('/rate', postRating.view);
app.get('/profile', profile.view)
app.get('/addBookmark', exp.addBkmk)
app.get('/register', register.view)
app.get('/friends', friends.view)
app.get('/upload', upload.view)
app.post('/addExplore', upload.addExplore)
app.get('/addExplore', upload.getExplore)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
