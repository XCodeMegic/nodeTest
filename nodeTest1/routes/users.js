var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

router.get('/*login', function(req, res, next) {
	res.render('login', {title: 'SIGN IN'});
	//next();
});

module.exports = router;
