var express = require('express');
var formidable = require('formidable');
var exec = require('child_process').exec;
var fs = require('fs');
var db = require('../DB/dbmanager');
var fread = require('./fileController').readfile;
var fdrop = require('./fileController').deleteFile;
var filecfg = require('../config/dumpFileInfo');

module.exports = {
	handleInfoCount : function(req, res, next) {
		var search_type = req.body.search_type;
		if (search_type == 0) {
			search_type = 'java';
		} else if (search_type == 1) {
			search_type = 'jni';
		}
		db.queryCrashInfoCount(search_type, function(data) {
			res.send({'count':data});
		});
	},

	handleInfo : function(req, res, next) {
		var search_type = req.body.search_type;
		var search_page = req.body.pageno;
		if (search_type == 0) {
			search_type = 'java';
		} else if (search_type == 1) {
			search_type = 'jni';
		}
		db.queryCrashInfo(search_type, search_page, function(data) {
				res.send(data);
			});
	},

	handleInfoDetail : function(req, res, next) {
		var id = req.body.crash_id;
		db.queryCrashDetail(id, function(data) {
			if (data == null) {
				res.send(404,'Sorry, we cannot find that!');
				return;
			}
			if (data.crash_type == 'jni') {
				fread(data.stack_trace, 50, function(value) {
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
			json.crash_type = 'java';
			json.dumpfile = '';

			db.insertCrash(json);
		});
	},

	handleInsert_CCrash : function(req, res, next) {
		var tmpFilePath = checkTempDir(filecfg.dumpfile);
		var crashFilePath = checkTempDir(filecfg.dumptext);

		var form = new formidable.IncomingForm();
		form.encoding = 'utf-8';
		form.uploadDir = tmpFilePath;
		form.keepExtensions = true;
		form.maxFieldsSize = 5 * 1024 * 1024;
		console.log('tmpfile:' + tmpFilePath);
		console.log('crashFile:' + crashFilePath);
		form.parse(req, function(err, fields, files) {
			db.queryExists(files.file.name, function(data) {
				if (data.length == 0) {
					renameFile(files.file.path, tmpFilePath + files.file.name);
					var logFile = crashFilePath + getFileName(files.file.name) + '.log';
					var json = fields.json;
					json = JSON.parse(json);
					json.crash_type = 'jni';
					json.stack_trace = logFile;
					json.dumpfile = files.file.name;
					console.log(json);
					exec(__dirname + '/../tools/perform.sh ' + tmpFilePath + files.file.name + ' ' + logFile, {maxBuffer:10*5000*20*1024}, function(err, stdout, stderr) {
						if (err) {
							throw err;
						}
						console.log(stdout);
						db.insertCrash(json);
					});
				}
			})
			res.send('OK');
		});
	},
	handleDelete : function(req, res, next) {
		var id = req.body.crash_id;
		db.queryCrashDetail(id, function(data) {
			if (data != null) {
				db.deleteInfo(id);
				if (data.crash_type == 'jni') {
					var filename = data.stack_trace;
					fdrop(filename, null);
				}
			}
			res.send({'result':'OK'});
		});
	}
}

function checkTempDir(rootdir) {
	var mydate = new Date();
	var month = mydate.getMonth() + 1;
	month = month < 10 ? ('0' + month) : month;
	var day = mydate.getDate();
	day = day < 10 ? ('0' + day) : day;
	if (!fs.existsSync(rootdir)) {
		fs.mkdirSync(rootdir);
	}
	if (!fs.existsSync(rootdir + mydate.getFullYear())) {
		fs.mkdirSync(rootdir + mydate.getFullYear());
	}
	var tmpdir = rootdir + mydate.getFullYear() + '/' + month + '-' + day + '/';
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
