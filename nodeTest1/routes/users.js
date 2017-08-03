var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

router.get('/login', function(req, res, next) {
	var objs = ['1', '2', '3', '4'];
	res.render('login', {title: 'SIGN IN', items : objs});
	next();
});

module.exports = router;
