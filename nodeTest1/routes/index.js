var express = require('express');
var router = express.Router();

//var session = require('express-session');
//var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.user) {
		res.redirect('/users/login');
	} else {
		var objs = ['1', '2', '3', '4'];
		res.render('index', { title: 'Express',items : objs });
	}
});

router.post('/login', function(req, res, next) {
	var username = req.body.username;
	var userpass = req.body.userpass;
	console.log(username + ":" + userpass);
	if (username == 'admin' && 
		userpass == '111111') {
		var user = {'username' : username};
		req.session.user = user;
		res.redirect('/');
	} else {
		res.send("Error!");
		res.redirect('/users/login');
	}
});

router.post('/logout', function(req, res, next) {
	if (req.session.user) {
		//req.session.user = null;
		//delete req.session.user;
		req.session.destroy();
	}
});

module.exports = router;
