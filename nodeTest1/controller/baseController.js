var express = require('express');
var db = require('../DB/dbmanager');

module.exports = {
	handleInfoCount : function(req, res, next) {
		var search_type = req.body.search_type;
		if (search_type == 0) {
			search_type = 'java-crash';
		} else if (search_type == 1) {
			search_type = 'c-crash';
		}
		db.queryCrashInfoCount(search_type, function(data) {
			res.send({'count':data});
		});
	},

	handleInfo : function(req, res, next) {
		var search_type = req.body.search_type;
		db.queryCrashInfo(search_type, 0, function(data) {
				res.send(data);
			});
	},

	handleInfoDetail : function(req, res, next) {
		var id = req.body.crash_id;
		db.queryCrashDetail(id, function(data) {
			res.send(data);
		});
	}
}