var express = require('express');
var router = express.Router();

//var session = require('express-session');
//var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
	/*if (!req.session.user) {
		res.redirect('/users/login');
	} else {*/
		var objs = ['1', '2', '3', '4'];
		res.render('index', { title: 'Express',items : objs });
	// }
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

router.post('/query', function(req, res, next) {
	var value = "";
	if (req.body.search_type == 'all') {
		value = {'all':[
		{'name':'zhaoqing','age':118,'class':2,'id':'0098'},
		{'name':'longzhou','age':28,'class':1,'id':'0099'},
		{'name':'piaomiao','age':119,'class':2,'id':'0097'},
		{'name':'biyao','age':120,'class':1,'id':'0096'},
		]};
		res.send(value);
	} else {
		res.send({'res':'OK'});
	}
	//res.send('ol');
});

module.exports = router;
