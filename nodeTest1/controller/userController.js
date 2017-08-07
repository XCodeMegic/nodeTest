var express = require('express');
var session = require('express-session');
var db = require('../DB/dbmanager');
var crypto = require('crypto');


function md5(str) {
	var result = crypto.createHash('md5').update(str).digest('hex');
	return result;
};

module.exports = {
	handleUserlogin : function(req, res, next) {
		var username = req.body.username;
		var logindate = req.body.logindate;
		var sign = req.body.sign;

		var dbusers = db.queryUser(username, function(user) {
			var dbsign = md5(logindate + user.password);
			if (dbsign == sign) {
				var user = {'username' : username};
				req.session.user = user;
				res.send({'result':'OK'});
			} else {
				res.send({'result':'error'});
			}
		});
	}
}