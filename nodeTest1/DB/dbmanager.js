var mysql=require('mysql');
var config=require('../config/dbconfig');

function querydb(query, callback) {
var connection = mysql.createConnection({
	host: config.dbserver,
	user: config.dbuser,
	password: config.dbpass,
	database: config.dbname
});

connection.connect();
//查询
connection.query(query, function(err, rows, fields) {
	if (err) {
		throw err;
	}
	callback(rows);
});
//关闭连接
connection.end();
};

module.exports = {
	queryCrashInfoCount : function(type, callback) {
		var query = '';
		if (type == 'java-crash' || type == 'c-crash') {
			query = "select count(*) from tb_crash_info where crash_type='" + type + "'";
		} else {
			query = 'select count(*) from tb_crash_info';
		}
		querydb(query, function(data) {
			var countvalue = data[0];
			var count = 0;
			for (var i in countvalue) {
				count = countvalue[i];
			}
			callback(count);
		});
	},

	queryCrashInfo : function(type, index, callback) {
		var query = '';
		if (type == 'java-crash' || type == 'c-crash') {
			query = "select id,app_name,crash_date from tb_crash_info where crash_type='" + type + "'";
		} else {
			query = 'select id,app_name,crash_date from tb_crash_info';
		}
		query += ' limit ' + index * 10 + ',' + (index + 1) * 10;
		console.log(query);
		querydb(query, callback);
	},

	queryCrashDetail : function(id, callback) {
		var query = "select app_name,app_ver,android_ver,platform,device_id,crash_type,crash_date,stack_trace from tb_crash_info where id='" + id + "'";
		querydb(query, function(data) {
			var info = data[0];
			callback(info);
		});
	},

	queryUser : function(username, callback) {
		var query = "select * from tb_query_user where username='" + username + "'";
		querydb(query, function(data) {
			var user = data[0];
			callback(user);
		});
	},

//----------------------insert info ------------------------------
	insertCrash : function(obj) {
		var query = 'insert into tb_crash_info (crash_type,crash_date,app_ver,app_name,platform,android_ver,device_id,stack_trace) values("' 
			+ obj.crash_type + '","' + obj.crash_date + '","' + obj.app_ver + '","' + obj.app_name + '","' + obj.platform + '","' + 
			obj.android_ver + '","' + obj.device_id + '","' + obj.stack_trace + '")';
		querydb(query, function(data) {
			//nothing to do
		});
	}
};