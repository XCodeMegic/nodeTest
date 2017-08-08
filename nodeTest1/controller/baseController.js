var express = require('express');
var formidable = require('formidable');
var exec = require('child_process').exec;
var fs = require('fs');
var db = require('../DB/dbmanager');
var fread = require('./fileController').readfile;

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
			//if data.crash_type == c-crash,read file content to fill data.stack_trace
			if (data.crash_type == 'c-crash') {
				fread(data.stack_trace, 30, function(value) {
					if (value) {
						data.stack_trace = value;
					} else {
						data.stack_trace = 'the crash-info is generating';
					}
					res.send(data);
				});
			} else {
				res.send(data);
			}
		});
	},

	handleInsert_JavaCrash : function(req, res, next) {
		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';

		form.parse(req, function(err, fields, files) {
			var json = fields.json;
			json = JSON.parse(json);
			json.crash_type = 'java-crash';

			db.insertCrash(json);
		});
	},

	handleInsert_CCrash : function(req, res, next) {
		var tmpFilePath = checkTempDir('temp');
		var crashFilePath = checkTempDir('crash-log');

		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';
		form.uploadDir = tmpFilePath;
		form.keepExtensions = true;
		form.maxFieldsSize = 5 * 1024 * 1024;
		console.log('tmpfile:' + tmpFilePath);
		console.log('crashFile:' + crashFilePath);
		form.parse(req, function(err, fields, files) {
			renameFile(files.file.path, tmpFilePath + files.file.name);
			var logFile = crashFilePath + getFileName(files.file.name) + '.log';
			var json = fields.json;
			json = JSON.parse(json);
			json.crash_type = 'c-crash';
			json.stack_trace = logFile;
			console.log(json);
			exec('tools/perform.sh ' + tmpFilePath + files.file.name + ' ' + logFile, {maxBuffer:5000*20*1024}, function(err, stdout, stderr) {
				if (err) {
					throw err;
				}
				console.log(stdout);
				db.insertCrash(json);
			});
		});
	}
}

function checkTempDir(rootdir) {
	var mydate = new Date();
	var month = mydate.getMonth() + 1;
	month = month < 10 ? ('0' + month) : month;
	var day = mydate.getDate();
	day = day < 10 ? ('0' + day) : day;
	if (!fs.existsSync('./' + rootdir + '/')) {
		fs.mkdirSync('./' + rootdir + '/');
	}
	if (!fs.existsSync('./' + rootdir + '/' + mydate.getFullYear())) {
		fs.mkdirSync('./' + rootdir + '/' + mydate.getFullYear());
	}
	var tmpdir = './' + rootdir + '/' + mydate.getFullYear() + '/' + month + '-' + day + '/';
	if (!fs.existsSync(tmpdir)) {
		fs.mkdirSync(tmpdir);
	}
	return tmpdir;
}

function renameFile(tmpFile, dstFile) {
	fs.rename(tmpFile, dstFile, function(err) {
		if (err) {
			throw err;
		}
	});
}

function getFileName(filepath) {
	var fileName = filepath.split('/');
	fileName = fileName[fileName.length - 1];

	var fileRealName = fileName.split('.');
	fileRealName = fileRealName[0];

	return fileRealName;
}

function getFileExt(filepath) {
	var fileName = filepath.split('/');
	fileName = fileName[fileName.length - 1];

	var fileRealName = fileName.split('.');
	fileRealName = fileRealName[fileRealName.length - 1];

	return fileRealName;
}
