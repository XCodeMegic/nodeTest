var express = require('express');
var usrCtrl = require('../controller/userController');
var infoCtrl = require('../controller/baseController');
var router = express.Router();

var session = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
	if (!req.session.user) {
		res.redirect('/users/login');
	} else {
		res.render('index', { title: 'CrashDisplay' });
	 }
});

router.post('/login', usrCtrl.handleUserlogin);

router.post('/logout', function(req, res, next) {
	if (req.session.user) {
		req.session.destroy();
	}
});

router.post('/query/info_count', infoCtrl.handleInfoCount);

router.post('/query/info', infoCtrl.handleInfo);

router.post('/query/detail', infoCtrl.handleInfoDetail);

module.exports = router;
